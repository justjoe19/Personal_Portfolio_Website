# Site UX & Conversion Roadmap

Recommendations from the September 2026 redesign review, ranked by expected impact on inquiries.

## Group 1 — No input needed (done)

- [x] **Reorder the homepage so proof comes first:** Hero → Work → Services → RankRadius → Craft → Process → Hosting → About → FAQ → Contact.
- [x] **Mobile CTA:** show a compact "Start a project" button in the mobile nav (it was only inside the hamburger menu).
- [x] **Simplify the nav:** Work · Services · RankRadius · About · Blog, plus the CTA. Hosting stays reachable from Services, the footer, and the ⌘K palette.
- [x] **Branded 404 page** instead of Netlify's default.
- [x] **Contact form spam protection** via Netlify's honeypot field.

## Group 2 — Needs Joe's input

- [ ] **Testimonials:** Joe has 2 Google reviews, both from TriStorm (the owner + the TriStorm business account). Plan: feature only the owner's review as a single quote (after the Work section or on TriStorm's case study) with a "Read on Google" link; skip review schema. Needs: review text, name/title as displayed, Google reviews link. Next: ask JH Claims for a short quote so a two-client testimonial strip is possible.
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

## Site audit — Sept 26 2026

Fixed:
- [x] Search titles/descriptions trimmed to fit results (blog posts gained an optional `seoTitle` field, also in the CMS).
- [x] Branded 1200×630 social share image (`public/og-image.jpg`) for non-blog pages.
- [x] Twitter/X card tags use `name=`; `og:site_name` added; web manifest colors updated.
- [x] Escape closes the mobile menu; Tab no longer escapes the open ⌘K search.
- [x] Security headers (nosniff, frame, referrer, permissions) and 1-year caching for fingerprinted `/_astro/` assets in `netlify.toml`.
- [x] Removed unused `logo-black.svg`, `logo-full.svg`, `logo-mark.svg`.

Suggestions:
- [ ] **Live RankRadius proof:** TriStorm's site already runs the RankRadius widget ("See work near you"). Link to it from the RankRadius section as a live example, or capture a real widget screenshot to replace the example mock.
- [x] **Blog call-to-action wording:** now matches the contact section ("The consultation is free.").
- [ ] **"Now taking new projects" badge:** keep it accurate; remove or reword when booked up.
- [ ] **Related posts + RSS feed** at the end of each blog post (`@astrojs/rss`).
- [ ] **Content-Security-Policy:** start with a report-only policy; a strict one needs care around inline scripts, Netlify RUM, and the CMS.
- [ ] **CMS login:** `/admin` uses Netlify Identity (still supported — Netlify reversed its deprecation on Feb 19, 2026) with Git Gateway, which *is* deprecated: it keeps working for existing sites and gets major security fixes, but no bug fixes and no sunset date yet. Low urgency; if it ever misbehaves, switch Decap to its GitHub backend. Sources: https://docs.netlify.com/manage/security/secure-access-to-sites/git-gateway/ and https://www.netlify.com/blog/auth0-extension-identity-changes/

## Search visibility & off-site profiles — status as of Oct 4 2026

Google/Stripe actions need Joe's signed-in Chrome; Claude can drive them there and should confirm each outward-facing step first.

**Done**
- [x] **Search Console** (URL-prefix property `https://michiana.dev/`, verified via `public/google8da53f77ec034aac.html` — don't delete): `sitemap-index.xml` reads Success. Stale/typo sitemap entries removed; `/sitemap.xml` (redirects to the index) is harmless and can stay.
- [x] **Request Indexing, Oct 4:** `/` plus the two posts that were "Crawled – currently not indexed" (last crawled Jul 13): `why-speed-is-the-secret-weapon…` and `the-headless-advantage…`.
- [x] **Business Profile** (verified, service-area business, address hidden — keep it that way, it's Joe's home): hours set to "Open with no main hours" (was "Open 24 hours"; Google review may lag), secondary category Software company added, profile share link added to the `ProfessionalService` `sameAs` in `src/layouts/Layout.astro`.
- [x] **Favicon:** 192×192 `<link rel="icon">` added to the layout (Google wants multiples of 48px).
- [x] **Stripe branding** (Settings → Branding): icon = `public/android-chrome-512x512.png`; logo = generated Michiana.dev wordmark (transparent PNG, dark text, Geist semibold + the `//` tile; "Prefer logo over icon" on); accent color `#4f5bd5` (deeper site indigo, better button contrast). Brand color left at Stripe's default `#525f7f` on purpose: it is a background in some receipts/invoices and the logo has dark text. Source files: `docs/brand/michiana-dev-logo-for-light-backgrounds.png` (the one uploaded) and `…-for-dark-backgrounds.png` (light text); both are transparent 1170×236 PNGs kept out of `public/` on purpose. To regenerate: render the `//` tile from `Logo.tsx` plus "Michiana.dev" in Geist 600 (150px, -0.035em) with headless Chrome on a transparent background, then trim.

**Still open**
- [ ] **Re-check indexing ~Oct 11:** Search Console → Pages → did the two blog posts move to Indexed? If still not indexed, the content is probably thin/overlapping — improve it rather than re-requesting.
- [ ] **Favicon in search results** still shows the old "MD" icon (Google caches favicons separately; days to weeks). If unchanged by ~Oct 18, investigate.
- [ ] **Business Profile logo:** upload `public/android-chrome-512x512.png` (Photos → Add a logo → Select image). Needs Joe's manual file pick — Claude's upload tool can't reach Google's uploader.
- [ ] **Business Profile photos/reviews:** add a cover photo and fresh photos (last upload 217 days ago); get more reviews (both existing ones are TriStorm); skim the description and services. "Internet marketing service" was dropped as a secondary category — re-add if wanted.
- [ ] **Hours:** confirm the public panel no longer says "Open 24 hours".
- [ ] **Stripe:** click through the Email receipts / Invoice / Customer portal preview tabs to confirm the logo and colors look right.
- [ ] **Refresh social previews:** run `https://michiana.dev` through LinkedIn Post Inspector / Facebook Sharing Debugger for the new share image.
- [ ] **Test the live contact form** once and confirm the submission arrives; confirm `/admin` login still works (X-Frame-Options header).
- [ ] **Optional — IndexNow (Bing, DuckDuckGo, Yandex):** Claude can add a key file and ping updated URLs; no login needed. Doesn't affect Google.
- [ ] **HSC Portal screenshot:** still the old image; needs the app running locally for a fresh 16:10 capture.

**Image audit (Oct 4):** every file in `public/` and `src/` is referenced and all 6 blog posts are published, so nothing is unused. The `-800.webp` files are built by `srcsetFor()` in `src/lib/images.ts`, so they look unreferenced but are in use.
