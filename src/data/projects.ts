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
      'A 24/7 emergency-response website for a family-owned Michiana restoration company built around instant phone calls and fast mobile load times.',
    challenge:
      'Their customers arrive mid-crisis—with a flooded basement or a storm-damaged roof—almost always on a phone. Every extra tap or slow-loading page is a lost job.',
    solution:
      'A mobile-first site engineered around the fastest possible path from a local Google search to a live phone call, with persistent tap-to-call and free-estimate paths on every screen and clear reassurance on how insurance claims work.',
    highlights: [
      'Persistent tap-to-call and estimate request paths on every screen',
      'Instant mobile load speed for homeowners in an emergency',
      'Local SEO and service-area coverage across Michiana',
    ],
    stack: ['Mobile-first design', '24/7 tap-to-call', 'Michiana local SEO', 'Lead tracking'],
    image: '/assets/work/tristorm.webp',
    width: 1600,
    height: 1000,
    href: 'https://tristormrestoration.com',
    linkLabel: 'Visit live site',
    external: true,
    industry: 'contractors',
    built:
      'A mobile-first emergency-response website with tap-to-call and estimate paths on every screen, plus local search structure across Michiana.',
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
    slug: 'rankradius',
    name: 'RankRadius',
    kind: 'Product',
    sector: 'Local SEO software for field-service businesses',
    locationTag: 'Michiana Dev Software Platform',
    outcomePill: 'Automated Neighborhood Proof',
    summary:
      'A software platform I designed, built, and operate that turns a field-service company’s completed jobs into neighborhood-level proof published right on its own website.',
    challenge:
      'Contractors and home-service crews complete great work in dozens of neighborhoods every month, but none of that local activity ever makes it onto their website to help them rank in those towns.',
    solution:
      'RankRadius syncs completed jobs from a company’s CRM, turns short technician notes into ~150-word neighborhood summaries without ever exposing customer street addresses, attaches matching Google reviews, and publishes them via a drop-in website widget.',
    highlights: [
      'Automatic job sync from popular field-service CRMs or simple portal upload',
      'AI-assisted neighborhood write-ups that protect homeowner privacy',
      'Matches real Google reviews to recent work in each town',
      'Works on custom websites as well as WordPress, Squarespace, Wix, and Webflow',
    ],
    stack: ['CRM integration', 'Neighborhood SEO widget', 'Google review matching', 'Custom web software'],
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
