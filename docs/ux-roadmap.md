# Site UX & Conversion Roadmap

Recommendations from the September 2026 redesign review, ranked by expected impact on inquiries.

## Group 1 — No input needed (done)

- [x] **Reorder the homepage so proof comes first:** Hero → Work → Services → RankRadius → Craft → Process → Hosting → About → FAQ → Contact.
- [x] **Mobile CTA:** show a compact "Start a project" button in the mobile nav (it was only inside the hamburger menu).
- [x] **Simplify the nav:** Work · Services · RankRadius · About · Blog, plus the CTA. Hosting stays reachable from Services, the footer, and the ⌘K palette.
- [x] **Branded 404 page** instead of Netlify's default.
- [x] **Contact form spam protection** via Netlify's honeypot field.

## Group 2 — Needs Joe's input

- [ ] **Testimonials:** 1–2 short client quotes (TriStorm, JH Claims) with name and company, placed next to the work.
- [ ] **Results on case studies:** measurable outcomes per project on `/work` (calls/leads, rankings, load time or Lighthouse scores, time to launch).
- [ ] **Book-a-call option:** a Cal.com or Calendly link for a 15-minute call alongside the contact form.
- [x] **Pricing expectations:** new three-card Pricing section (Website $500 first page + $100/additional page · Custom Software quoted · Hosting $100/mo), "Pricing" in the nav and ⌘K search, plus matching copy in Services, the FAQ, the contact intro, the first blog post, and structured data. To confirm: the line saying blogs, booking, and integrations are quoted separately. Optional: a budget-range field on the contact form.
- [ ] **Analytics:** privacy-friendly analytics (Plausible or Netlify Analytics) to measure drop-off and test changes.

## Group 3 — Before / after launch

- [x] **Lighthouse audit** (local production build, Sept 26 2026). Mobile: home 98, /work 97, blog 95, blog post 97. Desktop: 100. Accessibility, Best Practices, and SEO: 100 on every page (the 404 is deliberately noindexed). Fixes: the WebGL shader now starts after load in idle time and skips software-rendered WebGL; CSS inlined; 800px `srcset` variants for project and blog images. Re-run on the deployed site after launch.
- [x] **Self-host fonts** via Fontsource (Geist, Geist Mono, Instrument Serif italic), with preloads for the two above-the-fold faces. Google Fonts removed.
- [ ] **HSC Portal screenshot:** replace the old image with a fresh 16:10 capture (requires running the app locally).

## Longer term

- [ ] **Blog content aligned with the new positioning:** e.g. how a custom build works, a RankRadius behind-the-scenes. Existing posts stay aimed at local SEO traffic.
- [ ] **Individual case study pages** (`/work/<slug>`) once each project has enough detail — better for SEO and for sharing with prospects.
