export interface Project {
  slug: string;
  name: string;
  kind: 'Website' | 'Software' | 'Product';
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  stack: string[];
  image: string;
  width: number;
  height: number;
  href: string;
  linkLabel: string;
  external: boolean;
  featured?: boolean;
  /** Industry page slug this project is an example for. */
  industry?: 'contractors' | 'restaurants';
  /** One-line "what I built" for the Results section. */
  built?: string;
  /** Measured outcome. Leave undefined until real numbers exist; nothing renders until it's set. */
  result?: string;
  /** Client quote. Leave undefined until a real quote exists; nothing renders until it's set. */
  testimonial?: { quote: string; name: string; role?: string; href?: string };
}

export const projects: Project[] = [
  {
    slug: 'rankradius',
    name: 'RankRadius',
    kind: 'Product',
    sector: 'Local SEO SaaS',
    summary:
      'A local SEO platform that turns a field-service company’s completed jobs into neighborhood-level content published on its own website.',
    challenge:
      'Field-service businesses do great work in dozens of neighborhoods every month, but none of it shows up in search. Writing location-specific content by hand is slow, and most owners never get to it.',
    solution:
      'I designed, built, and operate RankRadius end to end. Jobs sync in from the company’s CRM, AI expands short field notes into ~150-word neighborhood write-ups, matching Google reviews are attached, and one click publishes to an embeddable widget and social channels.',
    highlights: [
      'CRM sync via Zapier and Make, or portal upload',
      'AI content engine that expands field notes into local write-ups',
      'Neighborhood snapping that never exposes a customer’s address',
      'Drop-in widget for WordPress, Squarespace, Wix, Webflow, and custom sites',
    ],
    stack: ['SaaS', 'AI', 'Integrations', 'Embeddable widget'],
    image: '/assets/work/rankradius.webp',
    width: 1600,
    height: 1000,
    href: 'https://rankradius.io',
    linkLabel: 'Visit rankradius.io',
    external: true,
    featured: true,
  },
  {
    slug: 'no-limit-roofing',
    name: 'No Limit Roofing',
    kind: 'Website',
    sector: 'Storm damage & roofing',
    summary:
      'A lead-focused site for a locally owned Michiana roofing contractor that specializes in roof repair and replacement.',
    challenge:
      'After a hailstorm, homeowners are stressed, comparing contractors, and unsure how an insurance claim works. The site had to earn trust quickly and make booking a free inspection effortless.',
    solution:
      'A bold, high-contrast design with a free-inspection request form beside the headline, a plain-language five-step process from inspection to installation, and structured data and service-area coverage across five Indiana and Michigan counties.',
    highlights: ['Free-inspection form above the fold', 'Insurance-claim process explained step by step', 'Roofing contractor schema and multi-county service area'],
    stack: ['Astro', 'Schema markup', 'Local SEO'],
    image: '/assets/work/nolimit.webp',
    width: 1600,
    height: 1000,
    href: 'https://nolimitroofingin.com',
    linkLabel: 'Visit site',
    external: true,
    industry: 'contractors',
    built:
      'A lead-focused roofing site with a free-inspection form above the fold, a plain-language claim process, and multi-county local SEO.',
    featured: true,
  },
  {
    slug: 'jh-claims',
    name: 'JH Claims Solution',
    kind: 'Website',
    sector: 'Multi-state public adjusting',
    summary:
      'A credibility-first site for a public adjusting firm that fights insurance companies on behalf of property owners.',
    challenge:
      'Hiring a public adjuster is a high-stakes decision made by stressed homeowners who have just been denied or underpaid. The site had to build trust fast.',
    solution:
      'A calm, authoritative design built around transparent case results and a clear no-recovery, no-fee promise, structured for search across the states the firm serves.',
    highlights: ['Trust-driven information architecture', 'Case-result showcases', 'Multi-state local SEO structure'],
    stack: ['Astro', 'Schema markup', 'Multi-state SEO'],
    image: '/assets/work/jhclaims.webp',
    width: 1600,
    height: 1000,
    href: 'https://jhclaim.com',
    linkLabel: 'Visit site',
    external: true,
    industry: 'contractors',
    built:
      'A credibility-first site for a multi-state public adjuster, built around transparent case results and local search structure.',
    testimonial: {
      quote: 'Joe’s work is impeccable. He’s a real pro. Highly recommended.',
      name: 'Josh',
      role: 'Owner, JH Claims Solution',
    },
  },
  {
    slug: 'tristorm',
    name: 'TriStorm Restoration',
    kind: 'Website',
    sector: 'Fire, water & storm restoration',
    summary:
      'A 24/7 emergency-response site for a family-owned Michiana restoration company.',
    challenge:
      'Their customers arrive mid-crisis, with a flooded basement or a storm-damaged roof, usually on a phone. Every extra tap is a lost job.',
    solution:
      'A site designed around the fastest possible path from search to phone call, with instant-call and estimate paths front and center and clear reassurance that TriStorm handles the insurance claim.',
    highlights: ['Tap-to-call and estimate paths on every screen', 'Mobile-first performance', 'Local SEO across Michiana'],
    stack: ['Hand-coded HTML/CSS/JS', 'Local SEO', 'GA4 conversion tracking'],
    image: '/assets/work/tristorm.webp',
    width: 1600,
    height: 1000,
    href: 'https://tristormrestoration.com',
    linkLabel: 'Visit site',
    external: true,
    industry: 'contractors',
    built:
      'A mobile-first emergency-response site with tap-to-call and estimate paths on every screen, plus GA4 conversion tracking.',
    testimonial: {
      quote:
        'The TriStorm Team loves working with Joe! He created our website and truly took the time to understand our company and brand.',
      name: 'Hannah',
      role: 'Owner, TriStorm Restoration',
    },
    featured: true,
  },
  {
    slug: 'hsc-portal',
    name: 'HSC Portal',
    kind: 'Software',
    sector: 'Healthcare scheduling',
    summary:
      'A full-stack appointment platform with secure, role-based portals for patients, doctors, and administrators.',
    challenge:
      'Manual scheduling and phone tag waste staff time, and three very different user types need access to the same data with different permissions.',
    solution:
      'A Java Spring Boot API with stateless JWT authentication and role-based access control, paired with a responsive React front end giving each role its own self-service portal.',
    highlights: ['Stateless JWT authentication', 'Role-based access for three user types', 'Fully responsive interface'],
    stack: ['Java', 'Spring Boot', 'React', 'JWT'],
    image: '/assets/HSC-Portal.webp',
    width: 1082,
    height: 895,
    href: 'https://github.com/justjoe19/HSC_Portal',
    linkLabel: 'View on GitHub',
    external: true,
  },
  {
    slug: 'review-responder',
    name: 'AI Review Responder',
    kind: 'Software',
    sector: 'Free AI tool',
    summary: 'Paste a customer review and get a polished, on-brand reply in seconds.',
    challenge:
      'Responding to reviews builds trust and helps local search, but writing thoughtful replies takes time most owners don’t have.',
    solution:
      'A lightweight tool powered by Google Gemini through a serverless function, with per-IP rate limiting to keep the free tier sustainable.',
    highlights: ['Google Gemini integration', 'Serverless API with rate limiting', 'Tone and rating controls'],
    stack: ['React', 'Serverless functions', 'Google Gemini'],
    image: '/assets/work/review-responder.webp',
    width: 1600,
    height: 1000,
    href: '/review-responder',
    linkLabel: 'Try the demo',
    external: false,
  },
];
