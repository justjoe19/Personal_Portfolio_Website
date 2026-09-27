import { useEffect, useState, type FormEvent } from 'react';
import { getEmail } from '../lib/email';

const SERVICES = ['New website', 'Custom software', 'Hosting & maintenance', 'Not sure yet'] as const;

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10';
const labelClass = 'mb-2 block text-sm font-semibold text-ink';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  // Set after hydration so the address never appears in the server-rendered HTML.
  const [email, setEmail] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(getEmail());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        setStatus('sent');
        form.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,5.4vw,4.2rem)]">
            Let’s build <span className="serif-accent text-gradient">something great.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
            Tell me about your business and what you want to build. I’ll come back with a clear scope, timeline, and quote. Websites start at $500, and the first conversation is free.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">Email</dt>
              <dd className="mt-1">
                <a href={email ? `mailto:${email}` : '#contact'} className="text-xl font-semibold text-ink hover:text-accent">{email || 'Email me'}</a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+15742138502" className="text-xl font-semibold text-ink hover:text-accent">(574) 213-8502</a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">Elsewhere</dt>
              <dd className="mt-1 flex gap-5">
                <a href="https://www.linkedin.com/in/joe-hollenbach" target="_blank" rel="noopener noreferrer" className="link-arrow">LinkedIn</a>
                <a href="https://github.com/justjoe19" target="_blank" rel="noopener noreferrer" className="link-arrow">GitHub</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="card p-6 sm:p-10 shadow-[0_40px_100px_-40px_oklch(0.74_0.15_270/0.35)]">
          {status === 'sent' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center" role="status">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/10 text-mint">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="display mt-6 text-4xl">Message sent.</h3>
              <p className="mt-3 max-w-xs text-body">Thanks for reaching out — I’ll get back to you within 1–2 business days.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-8">Send another message</button>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={handleSubmit} className="grid gap-5">
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot: hidden from people, filled in by bots; Netlify drops those submissions. */}
              <p className="hidden" aria-hidden="true">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input type="text" name="name" id="name" autoComplete="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Business <span className="font-normal text-muted">(optional)</span></label>
                  <input type="text" name="company" id="company" autoComplete="organization" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone <span className="font-normal text-muted">(optional)</span></label>
                  <input type="tel" name="phone" id="phone" autoComplete="tel" className={inputClass} />
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>What do you need?</legend>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s, i) => (
                    <label key={s} className="cursor-pointer">
                      <input type="radio" name="service" value={s} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-body transition-colors peer-checked:border-transparent peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:ring-4 peer-focus-visible:ring-accent/20 hover:border-line-strong">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className={labelClass}>Tell me about the project</label>
                <textarea name="message" id="message" rows={5} required placeholder="What does your business do, and what would you like the site or software to do?" className={`${inputClass} resize-y`}></textarea>
              </div>

              {status === 'error' && (
                <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                  Something went wrong sending your message. Please try again, or email {email} directly.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
