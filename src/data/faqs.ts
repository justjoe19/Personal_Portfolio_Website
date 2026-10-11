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
  q: 'Do you manage my Google profile after setup?',
  a: 'No. I set it up, optimize it, and hand it over with a walkthrough and guide, so you own and run it.',
};

export const ownershipFaq: FaqItem = {
  q: 'Will I own my website?',
  a: 'Yes. You own your domain, your content, and the finished site.',
};

/** Homepage FAQ: who I work with and how I work. */
export const homeFaqs: FaqItem[] = [
  {
    q: 'What kinds of businesses do you work with?',
    a: 'Local Michiana businesses of all kinds. I have particular experience with field-service contractors (roofing, restoration, HVAC, plumbing) and restaurants. I also work with remote clients across the U.S.',
  },
  gbpFaq,
  {
    q: 'Do you work with businesses outside Michiana?',
    a: `Yes. I’m based in Mishawaka and work most closely with businesses across Michiana, including ${areaList}. I also work with remote clients anywhere in the U.S.`,
  },
  ownershipFaq,
];

/** /services FAQ: pricing, timeline, hosting, RankRadius. */
export const servicesFaqs: FaqItem[] = [
  {
    q: 'How much does a custom website cost?',
    a: 'Websites start at $2,500 for a custom site of typically 5–8 pages, including local SEO and schema, a contact form, click-to-call, two rounds of revisions, and Google Analytics and Search Console setup. Website + Local Launch starts at $3,000 and adds Google Business Profile setup and handoff. Both come with $100/mo hosting. Add-ons: additional pages from $200 each, location pages from $150 each, and Google Business Profile setup on its own for $450. Custom sites and software, such as CMS sites, restaurant menus and online ordering, booking, e-commerce, and client portals, are quoted after a free consultation, and most range from $5,000–$15,000. All prices are starting prices, and you get a clear quote before any work begins.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most small-business websites take 2–4 weeks from kickoff to launch, depending on scope and how quickly content and feedback come together. Custom software is scoped separately and delivered in milestones.',
  },
  {
    q: 'What’s included in the $100/month hosting and maintenance plan?',
    a: 'Secure hosting with an SSL certificate, regular backups, and up to one hour per month of minor content updates — things like swapping photos, editing text, or updating hours, prices, and service areas. New pages, new features, and redesigns are not included and are quoted separately.',
  },
  {
    q: 'Do you offer website hosting in Mishawaka and Michiana?',
    a: 'Yes. I host the websites I build for businesses in Mishawaka, South Bend, and across Michiana. Hosting and maintenance is $100/mo: secure hosting with an SSL certificate, regular backups, and up to one hour per month of minor updates.',
  },
  gbpFaq,
  {
    q: 'What is RankRadius?',
    a: 'RankRadius is a local SEO platform I built and operate for field-service businesses, available as an optional $399/mo add-on. It pulls completed jobs from a company’s CRM, uses AI to turn short field notes into neighborhood-specific write-ups, matches them with Google reviews, and publishes them through a widget on the company’s own website. Learn more at rankradius.io.',
  },
  ownershipFaq,
];
