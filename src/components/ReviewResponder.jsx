import React, { useState, useEffect } from 'react';

const BUSINESS_TYPES = ['Restaurant', 'Salon/Spa', 'Contractor', 'Retail', 'Medical/Dental', 'Other'];
const TONES = ['Professional', 'Friendly', 'Apologetic', 'Enthusiastic'];
const DAILY_LIMIT = 5;
const USAGE_KEY = 'rr_usage';

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

function readUsage() {
  try {
    const raw = JSON.parse(localStorage.getItem(USAGE_KEY));
    if (raw && raw.date === todayUTC()) return raw.count;
  } catch {
    // ignore malformed/missing localStorage data
  }
  return 0;
}

function writeUsage(count) {
  localStorage.setItem(USAGE_KEY, JSON.stringify({ date: todayUTC(), count }));
}

export default function ReviewResponder() {
  const [review, setReview] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES[0]);
  const [tone, setTone] = useState(TONES[0]);
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

  const handleGenerate = async (e) => {
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

      const data = await res.json();

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

      setResult(data.response);
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
    <div id="tool" className="max-w-[800px] mx-auto px-6 pb-16 scroll-mt-[100px]">
      <form onSubmit={handleGenerate} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <label htmlFor="review" className="block text-white font-semibold mb-2 text-sm">
            Customer Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            rows={5}
            placeholder="Paste the customer's review here..."
            className="w-full bg-brand-bg border border-brand-border rounded-lg p-4 text-brand-text placeholder:text-brand-dim/60 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="businessName" className="block text-white font-semibold mb-2 text-sm">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder="e.g. Lakeside Bistro"
              className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-brand-text placeholder:text-brand-dim/60 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-white font-semibold mb-2 text-sm">
              Business Type
            </label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            >
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tone" className="block text-white font-semibold mb-2 text-sm">
              Tone
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            >
              {TONES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <span className="block text-white font-semibold mb-2 text-sm">Star Rating</span>
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
                  <span className={(hoverRating || rating) >= star ? 'text-brand-blue' : 'text-brand-border'}>★</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || limitReached || !review.trim() || !businessName.trim()}
          className="w-full md:w-auto group relative flex items-center justify-center bg-brand-blue text-brand-bg py-3 px-8 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.2)] hover:shadow-[0_0_25px_rgba(121,192,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
        >
          {loading ? 'Generating…' : 'Generate Response'}
        </button>

        <p className="text-brand-dim text-xs font-mono">
          {usedToday} of {DAILY_LIMIT} free responses used today
        </p>
      </form>

      {error && (
        <div className="mt-6 glass-card rounded-xl p-6 border border-red-500/30 bg-red-500/5">
          <p className="text-red-300 font-medium">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-6 glass-card rounded-xl p-6 md:p-8">
          <div className="flex justify-between items-start gap-4 mb-4">
            <span className="text-brand-blue font-mono text-xs tracking-widest uppercase opacity-70">Generated Response</span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex-shrink-0 text-xs font-semibold py-1.5 px-3 rounded border border-brand-blue/40 text-brand-blue hover:bg-brand-blue hover:text-brand-bg transition-all duration-200"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
          <p className="text-brand-text leading-relaxed whitespace-pre-wrap">{result}</p>
        </div>
      )}

      <p className="mt-10 text-center text-brand-dim/60 text-xs font-mono">Powered by Gemini AI</p>
    </div>
  );
}
