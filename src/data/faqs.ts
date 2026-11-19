import type { FaqItem } from '../components/Faq.astro';
import { areaList } from './areas';

export const faqSchema = (faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export const gbpFaq: FaqItem = {
  q: 'Do you manage my Google Business Profile monthly after setup?',
  a: 'No—and that saves you a monthly agency retainer. I set up and optimize your Google Business Profile once, align it with your new website, and hand it over with a walkthrough and written guide so you own and run it yourself.',
};

export const ownershipFaq: FaqItem = {
  q: 'Will I own my website and domain?',
  a: 'Yes, 100%. You own your domain name, your content, and the finished website.',
};

/** /services FAQ: packages, timeline, hosting, RankRadius. */
export const servicesFaqs: FaqItem[] = [
  {
    q: 'How do your website packages and quotes work?',
    a: 'After a free consultation, you get a clear, fixed quote tailored to your business size and goals before any work begins. Smaller or newer businesses can start with a Simple Starter Site (1–3 pages), established businesses typically choose Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), and custom content-editor, online ordering, or portal projects are scoped around your workflow.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Simple starter sites typically launch in 1–2 weeks, and full small-business websites take 2–4 weeks from kickoff to launch, depending on scope and how quickly content and feedback come together. Custom software is scoped separately and delivered in milestones.',
  },
  {
    q: 'What’s included in the hosting and maintenance plan?',
    a: 'Secure hosting with an SSL certificate, regular backups, and up to one hour per month of minor content updates — things like swapping photos, editing text, or updating hours, prices, and service areas. New pages, new features, and redesigns are quoted separately.',
  },
  {
    q: 'Do you offer website hosting in Mishawaka and Michiana?',
    a: 'Yes. I host the websites I build for businesses in Mishawaka, South Bend, Elkhart, and across Michiana, handling SSL security, backups, and monthly content updates.',
  },
  gbpFaq,
  {
    q: 'What is RankRadius?',
    a: 'RankRadius is a local SEO platform I built and operate for field-service businesses, available as an optional add-on. It pulls completed jobs from a company’s CRM, uses AI to turn short field notes into neighborhood-specific write-ups, matches them with Google reviews, and publishes them through a widget on the company’s own website. Learn more at rankradius.io.',
  },
  ownershipFaq,
];

export interface FaqCategory {
  id: string;
  eyebrow: string;
  title: string;
  faqs: FaqItem[];
}

/** Full organized FAQ categories for the dedicated /faq page. */
export const faqCategories: FaqCategory[] = [
  {
    id: 'working-together',
    eyebrow: 'Studio & Process',
    title: 'Working with Michiana Dev',
    faqs: [
      {
        q: 'What kinds of Michiana small businesses do you work with?',
        a: 'I work with small and medium businesses of every size across Northern Indiana and Southwest Michigan—from solo tradespeople and new neighborhood shops needing a simple starter site to established contractors, restaurants, professional and insurance offices, medical/dental practices, and B2B manufacturers.',
      },
      {
        q: 'Why hire a local engineer in Mishawaka instead of using WordPress/Wix or a big agency?',
        a: 'DIY templates and bloated WordPress sites load slowly on mobile phones and look like everyone else’s site, while traditional marketing agencies often charge steep retainers and pass your project to junior account managers. At Michiana Dev, you work directly with me (Joe Hollenbach) right here in Mishawaka, get a hand-built site that loads instantly on any phone, and receive a clear fixed quote before work begins.',
      },
      {
        q: 'Which towns in Northern Indiana and Southwest Michigan do you serve?',
        a: `I’m based in Mishawaka, Indiana (46544) and work closely with businesses across Michiana, including ${areaList}. I also work with remote clients anywhere in the U.S.`,
      },
      {
        q: 'What do you need from me to get started?',
        a: 'All we need to start is a quick conversation about your business, the services you offer, the towns you serve, and any logo or photos you already have. If you don’t have professional photos or written copy yet, I’ll help structure and write clear, plain-English copy during the build.',
      },
      ownershipFaq,
    ],
  },
  {
    id: 'packages-timeline',
    eyebrow: 'Packages & Timeline',
    title: 'Pricing, quotes, and turnaround',
    faqs: [
      {
        q: 'How do your website packages and quotes work?',
        a: 'After a free consultation, you get a clear, fixed quote tailored to your business size and goals before any work begins. Smaller or newer businesses can start with a Simple Starter Site (1–3 pages), established businesses typically choose Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), and custom content-editor, online ordering, or portal projects are scoped around your workflow.',
      },
      {
        q: 'What is included in a Simple Starter Site?',
        a: 'A Simple Starter Site is a fast, custom 1–3 page website built for solo tradespeople or newer local businesses that need a credible presence without overbuilding. It includes mobile-first design, tap-to-call, a lead contact form, local Google & AI search basics, and Analytics + Search Console setup.',
      },
      {
        q: 'How long does it take to build and launch a website?',
        a: 'Simple starter sites typically launch in 1–2 weeks, and full small-business websites take 2–4 weeks from kickoff to launch, depending on scope and how quickly content and feedback come together. Custom software is scoped separately and delivered in milestones.',
      },
      {
        q: 'Can you replace an old WordPress, Wix, or Squarespace site without losing my domain or search rankings?',
        a: 'Yes. I handle the transition carefully so you keep your existing domain name and business email addresses, preserve or properly redirect your existing URLs, and carry over your search equity cleanly.',
      },
      {
        q: 'Can I update my website myself if I want to?',
        a: 'If you prefer hands-off updates, my optional monthly hosting and maintenance plan includes up to one hour per month of text, photo, menu, or hours updates handled directly by me. If your team needs to edit menus, specials, or pages frequently on your own, I can build an easy-to-update content editor into your site.',
      },
    ],
  },
  {
    id: 'local-seo-ai',
    eyebrow: 'Google & AI Search',
    title: 'Local visibility, Google Business Profile & RankRadius',
    faqs: [
      {
        q: 'How do you help my business rank on Google and in AI search tools?',
        a: 'Every site is engineered from day one with fast mobile performance, dedicated service and town pages, clear plain-English answers, and Google-ready local business details under the hood. This gives both Google Search/Maps and AI answer engines (like ChatGPT, Perplexity, and Google AI Overviews) the exact local signals they need to recommend your business.',
      },
      gbpFaq,
      {
        q: 'What is RankRadius, and who is it for?',
        a: 'RankRadius is a local SEO software platform I built and operate for contractors and field-service businesses, available as an optional add-on. It pulls completed jobs from your CRM, turns short technician notes into neighborhood-level project write-ups (without ever exposing a customer’s street address), pairs them with matching Google reviews, and publishes them right onto your website. Learn more at rankradius.io.',
      },
    ],
  },
  {
    id: 'hosting-support',
    eyebrow: 'Hosting & Ongoing Care',
    title: 'Hosting, security, and monthly updates',
    faqs: [
      {
        q: 'What’s included in the hosting and maintenance plan?',
        a: 'Secure hosting with an SSL certificate, regular backups, and up to one hour per month of minor content updates — things like swapping photos, editing text, or updating hours, prices, and service areas. New pages, new features, and redesigns are quoted separately.',
      },
      {
        q: 'Do you offer website hosting in Mishawaka and Michiana?',
        a: 'Yes. I host the websites I build for businesses in Mishawaka, South Bend, Elkhart, and across Michiana, handling SSL security, backups, and monthly content updates.',
      },
      {
        q: 'How does the free website review work?',
        a: 'Send your current website URL (or tell me about your new business) through the contact form or by calling (574) 213-8502. I’ll look over your speed, mobile layout, and local search setup and give you honest, plain-English feedback on whether your site needs a few targeted fixes or a rebuild—with zero obligation.',
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqCategories.flatMap((c) => c.faqs);
