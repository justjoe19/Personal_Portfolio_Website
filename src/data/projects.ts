export interface Project {
  slug: string;
  name: string;
  kind: 'Website' | 'Software' | 'Product';
  sector: string;
  locationTag?: string;
  outcomePill?: string;
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
  industry?: 'contractors' | 'restaurants' | 'small-business';
  /** One-line "what I built" for the Results section. */
  built?: string;
  /** Measured outcome. Leave undefined until real numbers exist; nothing renders until it's set. */
  result?: string;
  /** Client quote. Leave undefined until a real quote exists; nothing renders until it's set. */
  testimonial?: { quote: string; name: string; role?: string; href?: string };
}

export const projects: Project[] = [
  {
    slug: 'tristorm',
    name: 'TriStorm Restoration',
    kind: 'Website',
    sector: 'Fire, water & storm restoration',
    locationTag: 'Michiana · Local Trade',
    outcomePill: '24/7 Emergency Call & Estimate Flow',
    summary:
      'A bilingual (English/Spanish) 24/7 emergency-response website for a family-owned Michiana restoration company—built for instant phone calls, insurance claim clarity, and local neighborhood proof.',
    challenge:
      'Their customers arrive mid-crisis—with a flooded basement, fire damage, or a storm-damaged roof—almost always on a phone. Every extra tap or slow-loading page is a lost job.',
    solution:
      'A fast, mobile-first website engineered around the shortest path from a local Google search to a live 24/7 phone call, with an English/Spanish toggle, dedicated restoration service and Michiana town pages, live RankRadius project proof, and clear reassurance that TriStorm handles the insurance paperwork.',
    highlights: [
      '24/7 tap-to-call and "Get Help Now" emergency paths on every screen',
      'Built-in English & Spanish (EN | ES) language switcher for Michiana families',
      'Live neighborhood project feed (powered by RankRadius) plus dedicated service & town pages',
    ],
    stack: ['Bilingual (EN / ES)', '24/7 tap-to-call', 'RankRadius live proof', 'Michiana local SEO'],
    image: '/assets/work/tristorm.webp',
    width: 1600,
    height: 1000,
    href: 'https://tristormrestoration.com',
    linkLabel: 'Visit live site',
    external: true,
    industry: 'contractors',
    built:
      'A bilingual (EN/ES) 24/7 emergency-response site with instant tap-to-call, live RankRadius project proof, and dedicated Michiana service and town pages.',
    testimonial: {
      quote:
        'The TriStorm Team loves working with Joe! He created our website and truly took the time to understand our company and brand.',
      name: 'Hannah',
      role: 'Owner, TriStorm Restoration',
      href: 'https://share.google/Shycqyc3DYoD1z9DR',
    },
    featured: true,
  },
  {
    slug: 'jh-claims',
    name: 'JH Claims Solution',
    kind: 'Website',
    sector: 'Public insurance adjusting',
    locationTag: 'Multi-State · Professional Services',
    outcomePill: 'Credibility-First Lead Generation',
    summary:
      'A credibility-first website for a public adjusting firm that represents commercial and residential property owners in complex insurance claims.',
    challenge:
      'Hiring a public adjuster is a high-stakes decision made by stressed property owners who have been delayed, denied, or underpaid. The site had to establish authority and trust immediately.',
    solution:
      'A calm, authoritative layout built around transparent case outcomes, a clear no-recovery, no-fee promise, and dedicated state and claim-type pages structured for search visibility.',
    highlights: [
      'Trust-driven page structure explaining the claim process clearly',
      'Real claim-result showcases that prove value before the first call',
      'Multi-state local and service-line search architecture',
    ],
    stack: ['Credibility-first design', 'Case-result showcases', 'Multi-state SEO', 'Lead capture'],
    image: '/assets/work/jhclaims.webp',
    width: 1600,
    height: 1000,
    href: 'https://jhclaim.com',
    linkLabel: 'Visit live site',
    external: true,
    industry: 'contractors',
    built:
      'A credibility-first website for a public adjusting firm, built around transparent case outcomes, clear next steps, and multi-state search visibility.',
    testimonial: {
      quote: 'Joe’s work is impeccable. He’s a real pro. Highly recommended.',
      name: 'Josh',
      role: 'Owner, JH Claims Solution',
      href: 'https://share.google/Shycqyc3DYoD1z9DR',
    },
    featured: true,
  },
  {
    slug: 'no-limit-roofing',
    name: 'No Limit Roofing',
    kind: 'Website',
    sector: 'Storm damage & roofing contractor',
    locationTag: 'Northern IN & SW Michigan',
    outcomePill: 'Above-the-Fold Inspection Booking',
    summary:
      'A lead-focused website for a locally owned Michiana roofing contractor specializing in residential roof repair, replacement, and storm damage.',
    challenge:
      'After a hail or wind storm, homeowners compare multiple roofers at once and want to know how an inspection and insurance claim work. The site needed to earn trust fast and make booking an inspection effortless.',
    solution:
      'A bold, high-contrast design with a free-inspection form right beside the main headline, a plain-English five-step walkthrough from inspection to installation, and structured local coverage across five Indiana and Michigan counties.',
    highlights: [
      'Free-inspection request form above the fold on desktop and mobile',
      'Step-by-step homeowner guide for storm damage and insurance claims',
      'Roofing contractor schema and five-county Michiana service coverage',
    ],
    stack: ['Above-the-fold lead form', '5-county local SEO', 'Homeowner claim guide', 'Google-ready local SEO'],
    image: '/assets/work/nolimit.webp',
    width: 1600,
    height: 1000,
    href: 'https://nolimitroofingin.com',
    linkLabel: 'Visit live site',
    external: true,
    industry: 'contractors',
    built:
      'A lead-focused roofing website with a free-inspection form above the fold, a plain-language claim walkthrough, and five-county Michiana local SEO.',
    featured: true,
  },
  {
    slug: 'sebas-pros',
    name: 'Sebas Pros Lawn Care',
    kind: 'Website',
    sector: 'Lawn care & leaf cleanup',
    locationTag: 'Michiana · Local Startup',
    outcomePill: 'Tap-to-Call Free Estimates',
    summary:
      'A one-page website for a young Michiana entrepreneur launching a lawn care and leaf cleanup business.',
    challenge:
      'A brand-new business needed to look established, show real yard work, and make it effortless for neighbors to ask for an estimate.',
    solution:
      'A fast, mobile-first page built around the company logo and job photos, with call, text, and estimate-form options, town-by-town Michiana coverage, and structured data for search engines and AI answers.',
    highlights: [
      'Call, text, and free-estimate paths always within reach on phones',
      'Responsive AVIF and WebP photos with a before-and-after showcase',
      'Michiana local SEO with structured data, sitemap, and llms.txt',
    ],
    stack: ['One-page site', 'Estimate form', 'Michiana local SEO', 'AI-search ready'],
    image: '/assets/work/sebaspros.webp',
    width: 1600,
    height: 1000,
    href: 'https://sebaspros.netlify.app',
    linkLabel: 'Visit live site',
    external: true,
    built:
      'A one-page website for a new lawn care business, with tap-to-call, an estimate form, job photos, and Michiana local SEO.',
  },
  {
    slug: 'rankradius',
    name: 'RankRadius',
    kind: 'Product',
    sector: 'Local SEO software for field-service businesses',
    locationTag: 'Michiana Dev Software Platform',
    outcomePill: 'Automated Neighborhood Proof',
    summary:
      'A local SEO automation platform I designed, built, and operate that turns a field-service company’s completed jobs into neighborhood-level proof, social posts, and performance insights.',
    challenge:
      'Contractors and home-service crews complete great work in dozens of neighborhoods every month, but none of that local activity makes it onto their website—and Google listing changes or search results are easy to miss.',
    solution:
      'RankRadius pulls completed jobs and photos from a company’s CRM (via direct sync, Zapier, Make, or portal upload), turns short field notes into ~150-word neighborhood write-ups, snaps map pins to the neighborhood center so a customer’s house is never shown, and suggests matching 4- and 5-star Google reviews. Every post waits for owner approval before publishing to a drop-in website widget and Facebook/Instagram—backed by a performance dashboard with Google calls, clicks, directions, Search Console data, and a daily Google listing check.',
    highlights: [
      'Direct CRM, Zapier, Make, or portal intake—approve every write-up before it goes live',
      'Privacy-first neighborhood snapping (never shows a customer’s actual house) + ~150-word AI write-ups',
      'Matched 4- and 5-star Google reviews plus one-click Facebook & Instagram posting',
      'Performance dashboard: Google calls/clicks/directions, Search Console search phrases, PDF reports & daily listing watch',
      'Drop-in widget for custom sites, WordPress, Squarespace, Wix, and Webflow',
    ],
    stack: ['CRM & Portal Sync', 'Neighborhood Snapping', 'Review Matching', '1-Click Social', 'Listing Watch & Analytics'],
    image: '/assets/work/rankradius.webp',
    width: 1600,
    height: 1000,
    href: 'https://rankradius.io',
    linkLabel: 'Visit rankradius.io',
    external: true,
    featured: true,
  },
  {
    slug: 'hsc-portal',
    name: 'HSC Portal',
    kind: 'Software',
    sector: 'Healthcare scheduling & client portal',
    locationTag: 'Custom Web Application',
    outcomePill: '3-Role Self-Service Portal',
    summary:
      'A full-stack appointment and scheduling platform with secure, role-based portals for patients, providers, and clinic administrators.',
    challenge:
      'Manual appointment booking and phone tag waste hours of front-desk time, while patients, doctors, and administrators each need different views and permissions over the same schedule.',
    solution:
      'A secure web application with role-based access control and dedicated self-service dashboards for patients, providers, and staff—demonstrating the custom business software I build when off-the-shelf tools don’t fit.',
    highlights: [
      'Separate, secure portals for clients/patients, staff, and administrators',
      'Self-service appointment scheduling that cuts down phone tag',
      'Responsive interface that works on office desktops, tablets, and phones',
    ],
    stack: ['Client & staff portals', 'Online scheduling', 'Role-based security', 'Custom database'],
    image: '/assets/HSC-Portal.webp',
    width: 1082,
    height: 895,
    href: 'https://github.com/justjoe19/HSC_Portal',
    linkLabel: 'View project source',
    external: true,
    industry: 'small-business',
  },
  {
    slug: 'review-responder',
    name: 'AI Review Responder',
    kind: 'Software',
    sector: 'Free tool for local business owners',
    locationTag: 'Live Interactive Demo',
    outcomePill: 'Instant Customer Review Replies',
    summary:
      'Paste any customer review from Google, Yelp, or Facebook and get a thoughtful, on-brand reply in seconds—built for restaurants, contractors, clinics, and shops.',
    challenge:
      'Replying to customer reviews builds trust and helps local Google visibility, but busy small-business owners rarely have time to write personalized responses after a long day.',
    solution:
      'A free interactive tool right on this site where local owners can pick their business type, star rating, and tone to draft a human-sounding response in one click.',
    highlights: [
      'Tailored presets for restaurants, contractors, salons, retail, and medical/dental offices',
      'Handles both 5-star praise and sensitive 1-to-3-star complaints professionally',
      'Live example of practical AI automation built for small businesses',
    ],
    stack: ['Free local business tool', 'Reputation management', 'Custom AI workflow', 'Try it live'],
    image: '/assets/work/review-responder.webp',
    width: 1600,
    height: 1000,
    href: '/review-responder',
    linkLabel: 'Try the free tool',
    external: false,
    industry: 'restaurants',
  },
];
