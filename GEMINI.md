# Michiana.dev | Project Standards & Marketing Strategy

This document outlines the foundational mandates for development and marketing alignment for Michiana.dev. All work must adhere to these guidelines to ensure consistency, performance, and local market dominance.

## 1. Project Vision
Michiana.dev is a high-performance portfolio and service platform targeting small-to-medium businesses in Northern Indiana (South Bend, Mishawaka, Elkhart, Granger) and Southwest Michigan (Niles, Edwardsburg). 

**The Unique Selling Proposition (USP):** We provide enterprise-grade software engineering and "high-performance" web development to local businesses that typically only have access to slow, template-based agency sites.

---

## 2. Marketing & SEO Mandates
Every code change must consider its impact on search visibility and user conversion.

### Local SEO Priority
- **Primary Keywords:** "Web Developer Mishawaka", "Software Engineer South Bend", "Custom Software Michiana", "High-Performance Web Design".
- **Geo-Targeting:** Content should naturally reference local areas (Mishawaka, South Bend, Elkhart, Granger, Niles).
- **Metadata:** Maintain the JSON-LD schema in `Layout.astro` for LocalBusiness/ProfessionalService status.

### Conversion Optimization (CRO)
- **Primary CTA:** "Schedule a Call" (links to #contact).
- **Secondary CTA:** Blog engagement and service exploration.
- **Lead Capture:** All forms must utilize Netlify Forms for serverless handling.

### Tone & Voice
- **Professional but Approachable:** Technical expertise (Software Engineering) blended with local community focus (Michiana).
- **Performance-First:** We don't just "make websites"; we "engineer high-performance digital assets."

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
- **Theme:** Adhere to the brand palette defined in `src/index.css` (Dark mode/GitHub-inspired aesthetics).
- **Responsive:** Mobile-first is non-negotiable. Test all components at 320px width.

---

## 4. Development Workflow

### Component Strategy
- **Astro Components:** Use for layout, structural sections, and static content.
- **React Components:** Use for complex state (Forms, Carousels, interactive Nav).
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
