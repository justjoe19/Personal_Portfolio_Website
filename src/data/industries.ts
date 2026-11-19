import type { FaqItem } from '../components/Faq.astro';

export interface Industry {
  slug: string;
  /** Short name used in nav, breadcrumbs, and schema. */
  name: string;
  /** Value for the contact form's Industry field. */
  contactIndustry:
    | 'Contractor/home services'
    | 'Restaurant'
    | 'Professional, medical & insurance'
    | 'Retail, shop & local service'
    | 'Manufacturing & B2B'
    | 'Other';
  title: string;
  description: string;
  eyebrow: string;
  /** Plain part of the h1, then the serif-accent part. */
  h1: [string, string];
  intro: string;
  /** Concise 50–75 word citation block for AI Overviews, ChatGPT, and Perplexity. */
  quickAnswer: string;
  ctaLabel: string;
  /** Contact section heading as [plain, accented]. */
  contactHeading: [string, string];
  /** Schema.org Service serviceType. */
  serviceType: string;
  features: { title: string; desc: string }[];
  /** Optional note shown under the feature grid. */
  note?: string;
  /** Slugs from projects.ts shown as work examples. */
  projectSlugs: string[];
  /** Case studies for this industry. Rendered only when non-empty. */
  caseStudies: { name: string; summary: string; result?: string; href?: string }[];
  faqs: FaqItem[];
  /** Optional add-on callout. */
  addon?: { title: string; desc: string; href: string; linkLabel: string };
}

export const industries: Record<string, Industry> = {
  contractors: {
    slug: 'contractors',
    name: 'Contractors & home services',
    contactIndustry: 'Contractor/home services',
    title: 'Contractor Websites in Mishawaka, South Bend & Michiana | Michiana Dev',
    description:
      'Lead-focused websites for Michiana contractors (roofing, restoration, HVAC, plumbing, remodeling): tap-to-call, free-estimate forms, service & town pages, and Google Business Profile setup.',
    eyebrow: 'Contractors & Home Services · Michiana',
    h1: ['Websites that make the phone ring for', 'Michiana contractors.'],
    intro:
      'Roofing, restoration, HVAC, plumbing, remodeling, and landscaping companies win jobs when a homeowner can find them on Google, trust their work, and call or request an estimate in two taps. I build fast, custom sites designed around exactly that.',
    quickAnswer:
      'Michiana Dev LLC builds custom, lead-focused websites for contractors and home-service trades (roofing, restoration, HVAC, plumbing, remodeling) across Mishawaka, South Bend, Elkhart, and Southwest Michigan. Options range from simple starter sites (starting at $500) for solo tradespeople to full multi-page builds with one-time Google Business Profile setup, persistent tap-to-call, free-estimate forms, and Google-ready contractor details.',
    ctaLabel: 'Get a free website review',
    contactHeading: ['Tell me about your', 'contracting business.'],
    serviceType: 'Website design for contractors and home-service businesses',
    features: [
      {
        title: 'Built to generate phone calls & estimates',
        desc: 'Every page points to one outcome: a live phone call or an estimate request. No clutter between a homeowner with a problem and your phone number.',
      },
      {
        title: 'Persistent tap-to-call on mobile',
        desc: 'Most emergency and home-service searches happen on a cell phone. Your number and estimate button stay within thumb’s reach on every screen.',
      },
      {
        title: 'Frictionless free-estimate forms',
        desc: 'Short, plain-English request forms above the fold that ask for the exact details your crew needs to follow up—and nothing that makes homeowners abandon the page.',
      },
      {
        title: 'Dedicated service pages',
        desc: 'Separate pages for each core trade service (e.g., roof replacement, storm damage, water restoration, furnace repair) so you rank for the specific jobs people search for.',
      },
      {
        title: 'Multi-town Michiana location pages',
        desc: 'Pages targeting the exact cities and counties you serve across Northern Indiana and Southwest Michigan so nearby homeowners find you in their town.',
      },
      {
        title: 'One-time Google Business Profile setup',
        desc: 'Categories, services, service areas, hours, photos, and a review-request link set up to match your website and handed over with a walkthrough and guide.',
      },
    ],
    projectSlugs: ['tristorm', 'no-limit-roofing', 'jh-claims'],
    caseStudies: [],
    addon: {
      title: 'Optional add-on for field-service crews: RankRadius',
      desc: 'RankRadius turns the jobs your crew already completes into neighborhood-level proof published on your own website, paired with your Google reviews.',
      href: 'https://rankradius.io',
      linkLabel: 'Visit rankradius.io',
    },
    faqs: [
      {
        q: 'How is a contractor website priced?',
        a: 'Every contractor website is quoted upfront around your scope after a free consultation. Solo tradespeople can start with a Simple Starter Site (1–3 pages), while growing crews often choose Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), with optional service and town pages added as needed.',
      },
      {
        q: 'Will the site help me show up in Mishawaka, South Bend, Elkhart, and surrounding towns?',
        a: 'Yes. Local SEO, Google-ready contractor details, and clear service-area signals are built into every site from day one, and we can add dedicated location pages for every town and county in your service radius.',
      },
      {
        q: 'Do you manage my Google Business Profile monthly after setup?',
        a: 'No—and that saves you a monthly retainer. I set it up, optimize it, align it with your website, and hand it over with a walkthrough and written guide so you own and run it yourself.',
      },
      {
        q: 'How long does it take to build a contractor website?',
        a: 'Most small-business contractor websites launch in 2–4 weeks from kickoff, depending on scope and how quickly photos and feedback come together.',
      },
      {
        q: 'What do you need from me to get started?',
        a: 'Your list of services, the towns/counties you serve, your logo, any job-site photos you have, and your contact info. If anything is missing, we’ll sort it out during the free consultation.',
      },
      {
        q: 'Can I add more service or town pages later as my crew grows?',
        a: 'Yes. We can add new service or location pages anytime as your business and service radius grow.',
      },
      {
        q: 'Will I own my website and domain?',
        a: 'Yes. You own your domain name, your content, and the finished website.',
      },
    ],
  },

  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants & hospitality',
    contactIndustry: 'Restaurant',
    title: 'Restaurant Website Design in Mishawaka & South Bend | Michiana Dev',
    description:
      'Fast, photo-forward restaurant websites for Michiana: mobile-friendly menus (no pinched PDFs), hours, online ordering or reservations, and Google Business Profile setup.',
    eyebrow: 'Restaurants, Cafes & Hospitality · Michiana',
    h1: ['Restaurant websites that make guests', 'hungry and easy to find.'],
    intro:
      'Diners check your menu, hours, address, and food photos on their phones before they ever walk through your door. I build fast, photo-forward websites that put the essentials one tap away—without forcing guests to pinch-and-zoom a blurry PDF menu.',
    quickAnswer:
      'Michiana Dev LLC builds fast, photo-forward websites for restaurants, cafes, and bars in Mishawaka, South Bend, Elkhart, St. Joseph, and across Michiana. Options range from simple starter sites for neighborhood cafes and food trucks to full multi-page restaurant websites featuring readable mobile mobile-friendly menus (never pinched PDFs), one-tap directions, online ordering/reservation links, and optional easy-to-update content editor dashboards.',
    ctaLabel: 'Get a free website review',
    contactHeading: ['Tell me about your', 'restaurant.'],
    serviceType: 'Website design for restaurants and hospitality businesses',
    features: [
      {
        title: 'Mobile-friendly menus (never a clumsy PDF)',
        desc: 'Clean, readable menus built right into the page so guests can browse dishes, dietary notes, and prices effortlessly on any phone—and so Google and AI search can read your dishes.',
      },
      {
        title: 'Hours, map & phone right at the top',
        desc: 'Today’s hours (including holiday or seasonal hours), one-tap Google/Apple Maps directions, and tap-to-call are front and center on the home screen.',
      },
      {
        title: 'Online ordering & reservation integrations',
        desc: 'Direct links or clean integrations with Toast, Square, Clover, OpenTable, Resy, DoorDash, or a custom ordering setup.',
      },
      {
        title: 'Photo-forward design that still loads fast',
        desc: 'Your food, drinks, and dining room lead the page, with every image optimized so the site loads in under a second on cellular connections.',
      },
      {
        title: 'Optional self-editable menu CMS',
        desc: 'Need to update seasonal specials, 86 an item, or adjust prices yourself? I can include a simple dashboard so you or your manager can update the menu anytime.',
      },
      {
        title: 'One-time Google Business Profile setup',
        desc: 'Categories, hours, menu URLs, ordering links, photos, and a direct review-request link set up to match your site and handed over with a guide.',
      },
    ],
    note: 'Every restaurant website is quoted around your scope after a free consultation—whether you need a simple menu-and-hours starter site or a custom build with a easy-to-update content editor.',
    projectSlugs: ['review-responder'],
    caseStudies: [],
    faqs: [
      {
        q: 'How is a restaurant website priced?',
        a: 'Every project is quoted upfront around your needs after a free consultation—from a Simple Starter Site for a new cafe or food truck to a full Business Website (with optional $100/month hosting & menu updates) or a custom easy-to-update content editor and online ordering integration.',
      },
      {
        q: 'Why shouldn’t my restaurant just use a PDF menu or Facebook page?',
        a: 'PDF menus are frustrating to read on phones, don’t adapt to dark/small screens, and often fail to rank in Google or AI search when someone searches for specific dishes near Mishawaka or South Bend. And many diners don’t have Facebook installed on their phones—meaning a standalone, fast website ensures every guest can see your menu and hours immediately.',
      },
      {
        q: 'Can you connect our Toast, Square, or OpenTable links?',
        a: 'Yes. I make your existing online ordering, gift card, catering, and reservation platforms prominent and seamless from every page of your website.',
      },
      {
        q: 'Do you manage my Google Business Profile after setup?',
        a: 'No. I set it up, connect your menu and ordering links, optimize your categories and photos, and hand it over with a walkthrough and guide so you own and run it with zero monthly agency fees.',
      },
      {
        q: 'How long does it take to launch a restaurant website?',
        a: 'Standard restaurant websites typically take 2–4 weeks from kickoff to launch. Custom CMS or ordering builds are scoped with clear milestones during our free consultation.',
      },
      {
        q: 'Will I own my website and domain?',
        a: 'Yes. You own your domain, your photos, your menu content, and the finished site.',
      },
    ],
  },

  'small-business': {
    slug: 'small-business',
    name: 'Small businesses & professional services',
    contactIndustry: 'Professional, medical & insurance',
    title: 'Small Business Web Design in Mishawaka, South Bend & Michiana | Michiana Dev',
    description:
      'Custom websites and software for Michiana small businesses: professional services, insurance & legal, medical/dental clinics, retail shops, and B2B manufacturers.',
    eyebrow: 'Small Businesses, Professional Offices & B2B · Michiana',
    h1: ['Custom websites & software built for', 'Michiana small businesses.'],
    intro:
      'Whether you run an insurance or public adjusting firm, a medical or dental practice, a local shop, or an Elkhart County manufacturing business, your website is how customers and partners size you up. I build fast, custom websites and software tailored to how your business actually works.',
    quickAnswer:
      'Michiana Dev LLC (based in Mishawaka, IN) builds custom websites and web software for Michiana small businesses—including solo local shops, professional offices, insurance and public adjusting firms, medical/dental practices, retail shops, and Elkhart/St. Joseph County manufacturers. Packages range from simple starter sites to full business websites with Google Business Profile setup and custom client portals, all quoted upfront after a free consultation.',
    ctaLabel: 'Get a free website review',
    contactHeading: ['Tell me about your', 'business.'],
    serviceType: 'Website design and custom software for small businesses',
    features: [
      {
        title: 'Designed around your business—never a generic template',
        desc: 'Every business wins customers differently. Whether you need high-trust case results, appointment booking, product/capability showcases, or quote requests, your site is designed from scratch.',
      },
      {
        title: 'Built for Google Search, Maps & AI answers',
        desc: 'Clean HTML structure, local business schema, and clear service pages help your business show up when customers search Google or ask AI tools like ChatGPT for local recommendations.',
      },
      {
        title: 'Direct access to a local software engineer',
        desc: 'Based in Mishawaka, I design and build every site myself. You never get passed off to a junior account rep or stuck waiting weeks for a simple change.',
      },
      {
        title: 'Custom portals, scheduling & internal tools',
        desc: 'Because I’m a full-stack software engineer, your site isn’t limited to static pages. When you need client portals, custom intake forms, or CRM automation, I can build it.',
      },
      {
        title: 'One-time Google Business Profile setup & handoff',
        desc: 'Get your Google Search and Maps presence properly aligned with your new website for a one-time fee—no ongoing marketing retainers.',
      },
      {
        title: 'Worry-free hosting & monthly updates',
        desc: 'Optional $100/month hosting includes SSL security, regular backups, and up to one hour of content updates every month.',
      },
    ],
    projectSlugs: ['jh-claims', 'tristorm', 'hsc-portal'],
    caseStudies: [],
    faqs: [
      {
        q: 'What types of small businesses in Michiana do you work with?',
        a: 'I work with local businesses of every size across Northern Indiana and Southwest Michigan, including solo tradespeople and neighborhood shops, professional services (insurance, public adjusting, legal, accounting), healthcare and dental clinics, retail and service shops, B2B and manufacturing companies, contractors, and restaurants.',
      },
      {
        q: 'How is a small-business website priced?',
        a: 'Every project is quoted upfront around your scope after a free consultation. Newer or solo businesses can start with a Simple Starter Site (1–3 pages), growing businesses typically choose Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), and custom portals or content-editor builds are scoped around your workflow.',
      },
      {
        q: 'Why choose a custom-built website over WordPress, Wix, or Squarespace?',
        a: 'DIY builders and bloated WordPress themes load slowly on mobile phones, require constant plugin updates, and look like everyone else’s template. A custom-engineered site loads in under a second, is tailored to convert your specific customers, has no fragile plugins to break, and is fully managed for you.',
      },
      {
        q: 'Can you redesign our existing website without losing our domain or emails?',
        a: 'Yes. I handle the technical transition carefully so your existing domain name, business email addresses, and search rankings carry over smoothly to the new website.',
      },
      {
        q: 'Will I own my website?',
        a: 'Yes. You own your domain, your content, and the finished site.',
      },
    ],
  },
};
