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

/** Homepage FAQ: who I work with, packages, local SEO/AI search, and how I work. */
export const homeFaqs: FaqItem[] = [
  {
    q: 'What kinds of Michiana small businesses do you work with?',
    a: 'I work with small and medium businesses of every size across Northern Indiana and Southwest Michigan—from solo tradespeople and new neighborhood shops needing a simple starter site to established contractors, restaurants, professional and insurance offices, medical/dental practices, and B2B manufacturers.',
  },
  {
    q: 'How is a website priced?',
    a: 'Every project is quoted upfront around your scope after a free consultation—so you never pay for features you don’t need. Options range from a Simple Starter Site (1–3 pages for newer or solo businesses) to a full Business Website + Local Launch (5–8+ pages with one-time Google Business Profile setup and handoff) and custom software builds.',
  },
  {
    q: 'Why hire a local engineer in Mishawaka instead of using WordPress/Wix or a big agency?',
    a: 'DIY templates and bloated WordPress sites load slowly on mobile phones and look like everyone else’s site, while traditional marketing agencies often charge steep retainers and pass your project to junior account managers. At Michiana Dev, you work directly with me (Joe Hollenbach) right here in Mishawaka, get a hand-built site that loads in under a second, and get a clear fixed quote before work begins.',
  },
  {
    q: 'How do you help my business rank on Google and in AI search tools?',
    a: 'Every site is engineered from day one with fast mobile performance, dedicated service and town pages, clean semantic HTML, and structured JSON-LD schema markup. This gives both Google Search/Maps and AI answer engines (like ChatGPT, Perplexity, and Google AI Overviews) the exact local signals they need to recommend your business.',
  },
  gbpFaq,
  {
    q: 'Which towns in Northern Indiana and Southwest Michigan do you serve?',
    a: `I’m based in Mishawaka, Indiana and work closely with businesses across Michiana, including ${areaList}. I also work with remote clients anywhere in the U.S.`,
  },
  ownershipFaq,
];

/** /services FAQ: packages, timeline, hosting, RankRadius. */
export const servicesFaqs: FaqItem[] = [
  {
    q: 'How do your website packages and quotes work?',
    a: 'After a free consultation, you get a clear, fixed quote tailored to your business size and goals before any work begins. Smaller or newer businesses can start with a Simple Starter Site (1–3 pages), established businesses typically choose Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), and custom CMS, online ordering, or portal projects are scoped around your workflow.',
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
