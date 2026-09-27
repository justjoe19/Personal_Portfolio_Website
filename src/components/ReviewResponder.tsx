import { useState, useEffect, type FormEvent } from 'react';

const BUSINESS_TYPES = ['Restaurant', 'Salon/Spa', 'Contractor', 'Retail', 'Medical/Dental', 'Other'] as const;
const TONES = ['Professional', 'Friendly', 'Apologetic', 'Enthusiastic'] as const;
const DAILY_LIMIT = 5;
const USAGE_KEY = 'rr_usage';

type BusinessType = (typeof BUSINESS_TYPES)[number];
type Tone = (typeof TONES)[number];

interface UsageRecord {
  date: string;
  count: number;
}

interface GenerateResponsePayload {
  response?: string;
  error?: string;
}

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

function readUsage(): number {
  try {
    const raw = JSON.parse(localStorage.getItem(USAGE_KEY) ?? 'null') as UsageRecord | null;
    if (raw && raw.date === todayUTC()) return raw.count;
  } catch {
    // ignore malformed/missing localStorage data
  }
  return 0;
}

function writeUsage(count: number) {
  localStorage.setItem(USAGE_KEY, JSON.stringify({ date: todayUTC(), count }));
}

export default function ReviewResponder() {
  const [review, setReview] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType>(BUSINESS_TYPES[0]);
  const [tone, setTone] = useState<Tone>(TONES[0]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [limitReached, setLimitReached] = useState(false);
  const [copied, setCopied] = useState(false);
  const [usedToday, setUsedToday] = useState(0);

  useEffect(() => {
    const count = readUsage();
    setUsedToday(count);
    if (count >= DAILY_LIMIT) setLimitReached(true);
  }, []);

  const handleGenerate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!review.trim() || !businessName.trim()) return;

    setLoading(true);
    setError('');
    setResult('');
    setCopied(false);

    try {
      const res = await fetch('/.netlify/functions/generate-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, businessName, businessType, tone, rating }),
      });

      const data: GenerateResponsePayload = await res.json();

      if (res.status === 429) {
        setLimitReached(true);
        setUsedToday(DAILY_LIMIT);
        writeUsage(DAILY_LIMIT);
        setError(data.error || "You've reached the 5 free responses for today. Check back tomorrow!");
        return;
      }

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setResult(data.response ?? '');
      const newCount = Math.min(usedToday + 1, DAILY_LIMIT);
      setUsedToday(newCount);
      writeUsage(newCount);
      if (newCount >= DAILY_LIMIT) setLimitReached(true);
    } catch {
      setError('Could not reach the server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="tool" className="container-x max-w-[800px] pb-20 scroll-mt-24">
      <form onSubmit={handleGenerate} className="card p-6 sm:p-8 space-y-6 shadow-[0_30px_60px_-40px_rgba(17,21,28,0.35)]">
        <div>
          <label htmlFor="review" className="block mb-2 block text-sm font-semibold text-ink">
            Customer Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            rows={5}
            placeholder="Paste the customer's review here..."
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10 resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="businessName" className="block mb-2 block text-sm font-semibold text-ink">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder="e.g. Lakeside Bistro"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block mb-2 block text-sm font-semibold text-ink">
              Business Type
            </label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value as BusinessType)}
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tone" className="block mb-2 block text-sm font-semibold text-ink">
              Tone
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone)}
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              {TONES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <span className="block mb-2 block text-sm font-semibold text-ink">Star Rating</span>
            <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  role="radio"
                  aria-checked={rating === star}
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-2xl leading-none p-1 transition-transform hover:scale-110"
                >
                  <span className={(hoverRating || rating) >= star ? 'text-amber-300' : 'text-white/15'}>★</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || limitReached || !review.trim() || !businessName.trim()}
          className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-ink"
        >
          {loading ? 'Generating…' : 'Generate Response'}
        </button>

        <p className="text-muted text-xs font-mono">
          {usedToday} of {DAILY_LIMIT} free responses used today
        </p>
      </form>

      {error && (
        <div className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 p-5">
          <p className="text-red-300 font-medium">{error}</p>
        </div>
      )}

      {result && (
        <div className="card mt-6 p-6 sm:p-8">
          <div className="flex justify-between items-start gap-4 mb-4">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">Generated Response</span>
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
          <p className="text-ink leading-relaxed whitespace-pre-wrap">{result}</p>
        </div>
      )}

      <p className="mt-8 text-center text-muted text-xs font-mono">Powered by Gemini AI</p>
    </div>
  );
}
