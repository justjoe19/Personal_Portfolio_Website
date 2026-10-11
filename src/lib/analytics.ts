// Google Analytics 4. Loads only on the live site (never on localhost or Netlify previews),
// after the page has finished loading, so it stays out of the way of performance.
const MEASUREMENT_ID = 'G-Y3748834QM';
const LIVE_HOSTS = ['michiana.dev', 'www.michiana.dev'];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a GA4 event. A no-op until analytics has loaded (and always off in dev). */
export function track(name: string, params: Record<string, unknown> = {}): void {
  window.gtag?.('event', name, params);
}

export function initAnalytics(): void {
  if (!LIVE_HOSTS.includes(window.location.hostname)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // GA4 requires the `arguments` object itself, not an array copy.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const load = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(s);
  };
  const schedule = () => ('requestIdleCallback' in window ? window.requestIdleCallback(load, { timeout: 4000 }) : window.setTimeout(load, 2000));
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });

  // Phone and email clicks aren't captured by GA4's built-in measurement.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a');
    const href = a?.getAttribute('href') ?? '';
    if (href.startsWith('tel:')) track('click_to_call', { page_path: window.location.pathname });
    else if (href.startsWith('mailto:')) track('click_email', { page_path: window.location.pathname });
  });
}
