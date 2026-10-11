import type { FaqItem } from '../components/Faq.astro';

export interface Industry {
  slug: string;
  /** Short name used in nav, breadcrumbs, and schema. */
  name: string;
  /** Value for the contact form's Industry field. */
  contactIndustry: 'Contractor/home services' | 'Restaurant' | 'Other';
  title: string;
  description: string;
  eyebrow: string;
  /** Plain part of the h1, then the serif-accent part. */
  h1: [string, string];
  intro: string;
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
    title: 'Contractor Websites: Roofing, HVAC, Plumbing | Michiana Dev',
    description:
      'Lead-focused websites for Michiana contractors: click-to-call, free-estimate forms, service and location pages, and Google Business Profile setup.',
    eyebrow: 'Contractors & home services',
    h1: ['Websites that make the phone ring for', 'Michiana contractors.'],
    intro:
      'Roofing, restoration, HVAC, plumbing, and other trades win jobs when a homeowner can find them, trust them, and call in a few taps. I build fast, custom sites designed around exactly that.',
    ctaLabel: 'Get a free website review',
    contactHeading: ['Tell me about your', 'contracting business.'],
    serviceType: 'Website design for contractors and home-service businesses',
    features: [
      { title: 'Built to generate leads', desc: 'Every page points to one outcome: a call or an estimate request. No clutter between a worried homeowner and your phone number.' },
      { title: 'Click-to-call everywhere', desc: 'A tap-to-call button that stays within reach on mobile, where most home-service searches happen.' },
      { title: 'Free-estimate forms', desc: 'Short, clear request forms that ask for what you need to follow up, and nothing that makes people give up.' },
      { title: 'Service pages', desc: 'A dedicated page for each service you offer, so you can show up for “roof repair,” “water damage,” or “furnace replacement,” not just your company name.' },
      { title: 'Location pages', desc: 'Pages for the towns you serve, with real local detail, so nearby customers find you in the places you want to work.' },
      { title: 'Google Business Profile setup', desc: 'Categories, services, service areas, hours, photos, and a review-request link, set up to match your website and handed over with a guide so you run it yourself.' },
    ],
    projectSlugs: ['jh-claims', 'no-limit-roofing', 'tristorm'],
    caseStudies: [],
    addon: {
      title: 'Optional add-on: RankRadius',
      desc: 'RankRadius turns the jobs you already complete into neighborhood-level content on your own website. It’s an optional $399/mo add-on for field-service businesses.',
      href: 'https://rankradius.io',
      linkLabel: 'Visit rankradius.io',
    },
    faqs: [
      {
        q: 'How much does a contractor website cost?',
        a: 'Websites start at $2,500 for a custom site of typically 5–8 pages. Website + Local Launch starts at $3,000 and adds Google Business Profile setup and handoff. Both come with $100/mo hosting. Additional service pages start at $200 each and location pages at $150 each.',
      },
      {
        q: 'Will the site help me show up in local searches?',
        a: 'Local SEO and schema markup are built into every site, along with dedicated service and location pages. I can’t promise specific rankings, but the site is structured to give you the best foundation.',
      },
      {
        q: 'Do you manage my Google profile after setup?',
        a: 'No. I set it up, optimize it, and hand it over with a walkthrough and guide, so you own and run it.',
      },
      {
        q: 'How long does it take to build a contractor website?',
        a: 'Most small-business websites take 2–4 weeks from kickoff to launch, depending on scope and how quickly content and feedback come together.',
      },
      {
        q: 'What do you need from me to get started?',
        a: 'Your services, the towns you serve, your logo and any photos of your work, and your contact details. If something is missing, we’ll sort it out in the free consultation.',
      },
      {
        q: 'Can I add service or location pages later?',
        a: 'Yes. Additional pages start at $200 each and location pages at $150 each, so the site can grow with your business.',
      },
      {
        q: 'Will I own my website?',
        a: 'Yes. You own your domain, your content, and the finished site.',
      },
    ],
  },

  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants',
    contactIndustry: 'Restaurant',
    title: 'Restaurant Websites in Mishawaka & South Bend | Michiana Dev',
    description:
      'Photo-forward restaurant websites for Michiana: easy-to-update menus, hours, ordering or reservations, and Google Business Profile setup.',
    eyebrow: 'Restaurants',
    h1: ['Restaurant websites that make people', 'hungry and easy to find.'],
    intro:
      'Guests check your menu, hours, and photos on their phones before they ever walk in. I build fast, photo-forward sites that put the essentials first and are simple for you to keep current.',
    ctaLabel: 'Get a free consultation',
    contactHeading: ['Tell me about your', 'restaurant.'],
    serviceType: 'Website design for restaurants',
    features: [
      { title: 'Menus that are easy to update', desc: 'A CMS so you can change dishes and prices yourself, without waiting on a developer or re-uploading a PDF.' },
      { title: 'Hours and location, front and center', desc: 'Hours, address, map, and phone are one tap away, including holiday hours, so guests aren’t guessing.' },
      { title: 'Online ordering and reservations', desc: 'Integrations with the ordering or reservation tools you already use, or a custom setup when you need one.' },
      { title: 'Photo-forward design', desc: 'Your food and your room lead the page, with images optimized so the site still loads quickly on a phone.' },
      { title: 'Google Business Profile setup', desc: 'Categories, hours, photos, menu links, and a review-request link, set up to match your website and handed over with a guide so you run it yourself.' },
    ],
    note: 'Restaurant sites with a CMS or online ordering are usually quoted as custom projects, after a free consultation. Most custom projects range from $5,000–$15,000.',
    projectSlugs: [],
    // TODO: add restaurant case study
    caseStudies: [],
    faqs: [
      {
        q: 'How much does a restaurant website cost?',
        a: 'A simple restaurant site starts at $2,500. Sites with a CMS for menus or online ordering are usually quoted as custom projects after a free consultation, and most custom projects range from $5,000–$15,000. All sites come with $100/mo hosting.',
      },
      {
        q: 'Can I update my menu myself?',
        a: 'Yes. With a CMS, you can edit dishes, prices, and specials without touching code. That’s quoted as a custom project.',
      },
      {
        q: 'Do you manage my Google profile after setup?',
        a: 'No. I set it up, optimize it, and hand it over with a walkthrough and guide, so you own and run it.',
      },
      {
        q: 'Can you connect my existing online ordering or reservation system?',
        a: 'I can integrate with ordering or reservation tools you already use, or set up a custom option. What’s possible depends on the platform, so I’d confirm that in the free consultation.',
      },
      {
        q: 'How long does it take to build a restaurant website?',
        a: 'Simple sites usually take 2–4 weeks from kickoff to launch. Sites with a CMS or online ordering are scoped separately and delivered in milestones.',
      },
      {
        q: 'What do you need from me to get started?',
        a: 'Your current menu, hours, address, logo, and any photos of your food and space, plus the ordering or reservation tool you use, if any. If something is missing, we’ll sort it out in the free consultation.',
      },
      {
        q: 'Will I own my website?',
        a: 'Yes. You own your domain, your content, and the finished site.',
      },
    ],
  },
};
