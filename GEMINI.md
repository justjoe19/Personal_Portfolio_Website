# Michiana.dev | Project Standards & Marketing Strategy

This document outlines the foundational mandates for development and marketing alignment for Michiana.dev. All work must adhere to these guidelines to ensure consistency, performance, and local market dominance.

## 1. Project Vision
Michiana.dev is the site for a local web and software studio in Mishawaka, Indiana, targeting small-to-medium businesses in Northern Indiana (South Bend, Mishawaka, Elkhart, Granger, and more) and Southwest Michigan (Niles, Edwardsburg, and more). The full city list lives in `src/data/areas.ts`. 

**The Unique Selling Proposition (USP):** We provide enterprise-grade software engineering and "high-performance" web development to local businesses that typically only have access to slow, template-based agency sites.

---

## 2. Marketing & SEO Mandates
Every code change must consider its impact on search visibility and user conversion.

### Local SEO Priority
- **Primary Keywords:** "Web Developer Mishawaka", "Web Design South Bend", "Michiana Web Design", "Website for Contractors", "Restaurant Website Design".
- **Geo-Targeting:** Content should naturally reference local areas (Mishawaka, South Bend, Elkhart, Granger, Niles).
- **Metadata:** Maintain the JSON-LD schema in `Layout.astro` for LocalBusiness/ProfessionalService status.

### Conversion Optimization (CRO)
- **Primary CTA:** "Get a free website review" (links to #contact); secondary: "View portfolio".
- **Secondary CTA:** Blog engagement and service exploration.
- **Lead Capture:** All forms must utilize Netlify Forms for serverless handling.

### Tone & Voice
- **Professional but Approachable:** Plain-spoken local developer you work directly with (Michiana), backed by real engineering skill.
- **Performance-First:** Fast, custom sites that bring in calls and customers. Do not market the site's own tech (WebGL, OKLCH, etc.) to visitors, and do not describe ongoing SEO or monthly marketing services.

---

## 3. Technical Standards

### Framework & Stack
- **Astro 6:** Primary routing and static generation.
- **React 19:** Used only for interactive components (Islands architecture).
- **Tailwind CSS 4:** Modern utility-first styling. Avoid legacy `@apply` where native CSS variables suffice.
- **TypeScript:** Strict typing for all components.

### Performance (Core Web Vitals)
- **LCP Optimization:** Hero images must be preloaded and use `fetchpriority="high"`.
- **Assets:** Always use `.webp` or `.avif` for images. Optimize SVGs for size.
- **Islands Architecture:** Keep `client:load` to a minimum; prefer `client:visible` or static Astro components for content.

### Styling Conventions
- **Theme:** Adhere to the brand palette defined in `src/index.css` (dark, product-grade aesthetic: OKLCH tokens, Geist + Geist Mono, Instrument Serif italic accents; utilities like `spotlight`, `glow-border`, `reveal`, `tilt-in` in `index.css`). Keep the site's own effects running, but don't market them to visitors (no WebGL/OKLCH/etc. copy). Pricing is packages (Website from $2,500, Website + Local Launch from $3,000, Custom quoted) with add-ons; never describe ongoing SEO or monthly marketing services. The Google Business Profile service is one-time setup and handoff only.
- **Responsive:** Mobile-first is non-negotiable. Test all components at 320px width.

---

## 4. Development Workflow

### Component Strategy
- **Astro Components:** Use for layout, structural sections, and static content.
- **React Components:** Use for complex state (Forms, interactive Nav, the ⌘K Command Palette, the Review Responder tool).
- **Props:** Always define interfaces for props in both Astro and React components.

### Content Management
- **Blog:** Managed via Markdown in `src/content/blog/`.
- **Media:** Images should be stored in `public/assets/` and referenced via absolute paths.

### Accessibility (A11y)
- Maintain 100/100 Lighthouse accessibility scores.
- Focus visible states must always be distinct (configured in `index.css`).
- Use semantic HTML (main, section, nav, article).

---

## 5. Deployment
- **Platform:** Netlify.
- **Identity:** Use Netlify Identity for CMS/Admin access.
- **Forms:** Ensure `data-netlify="true"` is present on the hidden detector form in `Layout.astro`.
