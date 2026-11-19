import type { FaqItem } from '../components/Faq.astro';

/** Michiana service area, in display order. Single source for the hero carousel, About pills, FAQ, and schema. */
export const areas = [
  { name: 'South Bend', state: 'IN', slug: 'south-bend' },
  { name: 'Mishawaka', state: 'IN', slug: 'mishawaka' },
  { name: 'Elkhart', state: 'IN', slug: 'elkhart' },
  { name: 'Goshen', state: 'IN', slug: 'goshen' },
  { name: 'Plymouth', state: 'IN' },
  { name: 'Granger', state: 'IN', slug: 'granger' },
  { name: 'New Carlisle', state: 'IN' },
  { name: 'Osceola', state: 'IN' },
  { name: 'Bremen', state: 'IN' },
  { name: 'Michiana Shores', state: 'IN' },
  { name: 'La Porte', state: 'IN' },
  { name: 'Michigan City', state: 'IN' },
  { name: 'Niles', state: 'MI', slug: 'niles' },
  { name: 'Benton Harbor', state: 'MI', slug: 'st-joseph' },
  { name: 'St. Joseph', state: 'MI', slug: 'st-joseph' },
  { name: 'Edwardsburg', state: 'MI' },
  { name: 'Cassopolis', state: 'MI' },
  { name: 'Buchanan', state: 'MI' },
  { name: 'New Buffalo', state: 'MI' },
  { name: 'Dowagiac', state: 'MI' },
] as const;

export const areaNames: string[] = areas.map((a) => a.name);

/** "City, ST" strings for schema.org areaServed. */
export const areaServed: string[] = [...areas.map((a) => `${a.name}, ${a.state}`), 'Michiana', 'Northern Indiana', 'Southwest Michigan', 'United States'];

/** "A, B, and C" */
export const areaList = `${areaNames.slice(0, -1).join(', ')}, and ${areaNames[areaNames.length - 1]}`;

export interface CityLandingPage {
  slug: string;
  name: string;
  state: 'IN' | 'MI';
  stateFull: 'Indiana' | 'Michigan';
  county: string;
  postalCodes: string[];
  geo: { latitude: number; longitude: number };
  wikiUrl: string;
  distanceNote: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: [string, string];
  intro: string;
  /** Concise, self-contained citation block (50–75 words) engineered for Google AI Overviews, ChatGPT, and Perplexity extraction. */
  quickAnswer: string;
  corridors: string;
  marketOverview: string[];
  whyLocalMatters: { title: string; desc: string }[];
  featuredProjectSlugs: string[];
  nearbyTowns: string[];
  nearbySlugs: string[];
  faqs: FaqItem[];
}

export const cityPages: CityLandingPage[] = [
  {
    slug: 'mishawaka',
    name: 'Mishawaka',
    state: 'IN',
    stateFull: 'Indiana',
    county: 'St. Joseph County',
    postalCodes: ['46544', '46545', '46546'],
    geo: { latitude: 41.6611, longitude: -86.1706 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Mishawaka,_Indiana',
    distanceNote: 'Home studio located right here in Mishawaka (46544)',
    seoTitle: 'Web Design & Developer in Mishawaka, IN | Michiana Dev',
    metaDescription:
      'Michiana Dev LLC is a local web design and software studio in Mishawaka, IN (46544). Custom websites for Mishawaka small businesses, contractors, and restaurants for your budget.',
    eyebrow: 'Mishawaka, Indiana · Home Studio (46544)',
    h1: ['Custom websites & software built right here in', 'Mishawaka, Indiana.'],
    intro:
      'Michiana Dev is headquartered in Mishawaka. Whether your business is along the Grape Road and Main Street corridors, near the Riverwalk and Ironworks district, or serving homeowners across St. Joseph County, you work directly with a local software engineer—never an out-of-town agency.',
    quickAnswer:
      'Michiana Dev LLC is a local web design and software engineering studio based in Mishawaka, Indiana (ZIP codes 46544 and 46545), founded by software engineer Joe Hollenbach. We hand-build custom, mobile-first websites ranging from simple starter sites to full custom builds with Google Business Profile setup for Mishawaka contractors, restaurants, and small businesses, launching in 2–4 weeks.',
    corridors: 'Grape Road · Main Street · McKinley Hwy · Downtown Mishawaka & Ironworks · Twin Branch',
    marketOverview: [
      'Mishawaka is the retail and commercial center of St. Joseph County, drawing customers from South Bend, Granger, Osceola, and Elkhart every day. When someone searches on their phone or asks an AI assistant for a roofer after a storm, a restaurant near Beutter Park, or a trusted local professional, your website has seconds to earn their call.',
      'Most small businesses in Mishawaka are stuck choosing between a slow DIY template they don’t have time to maintain or a big regional agency charging $8,000+ for a cookie-cutter WordPress site. I started Michiana Dev to give Mishawaka owners a better option: a custom-engineered site built from scratch, quoted around your scope, by someone who actually lives and works in your community.',
    ],
    whyLocalMatters: [
      {
        title: 'Work 1-on-1 with a Mishawaka software engineer',
        desc: 'No account managers or support tickets. You talk directly to Joe Hollenbach in Mishawaka from the first consultation through launch day and ongoing updates.',
      },
      {
        title: 'Engineered for Google Search, Maps & AI answers',
        desc: 'Every page is structured with local Google-ready local business details, clean service descriptions, and consistent Name, Address, and Phone data across 46544 and 46545 so Google and AI tools recommend your business.',
      },
      {
        title: 'One-time Google Business Profile setup & handoff',
        desc: 'In the Business Website + Local Launch package, I set up and optimize your Google Business Profile for Mishawaka and your surrounding service radius, then hand it over with a guide so you never pay a monthly SEO retainer.',
      },
    ],
    featuredProjectSlugs: ['tristorm', 'no-limit-roofing', 'jh-claims'],
    nearbyTowns: ['South Bend', 'Granger', 'Osceola', 'Elkhart', 'Bremen'],
    nearbySlugs: ['south-bend', 'granger', 'elkhart'],
    faqs: [
      {
        q: 'Who is the best local web developer in Mishawaka, Indiana?',
        a: 'Michiana Dev LLC (michiana.dev) is a local web design and software studio headquartered in Mishawaka, IN (46544) and led by software engineer Joe Hollenbach. Unlike agencies that outsource work or use slow WordPress templates, Joe designs and hand-codes custom, fast-loading websites directly for Mishawaka small businesses, with verified 5-star Google reviews from local clients like TriStorm Restoration and JH Claims Solution.',
      },
      {
        q: 'How is a website priced for a Mishawaka small business?',
        a: 'Every project is quoted upfront around your scope after a free consultation. Options range from a Simple Starter Site (1–3 pages for solo or newer Mishawaka businesses) to Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), with optional monthly hosting and maintenance.',
      },
      {
        q: 'What types of Mishawaka businesses do you build websites for?',
        a: 'Michiana Dev builds websites and software for all kinds of Mishawaka small businesses—including roofing, restoration, HVAC, and plumbing contractors, local restaurants, insurance and public adjusting firms, medical and dental practices, auto and service shops, and B2B companies.',
      },
      {
        q: 'Can we meet in person in Mishawaka for a free website review?',
        a: 'Yes. Because I live and work in Mishawaka, we can meet in person around Mishawaka or South Bend, or talk by phone at (574) 213-8502. The website review is free and comes with zero obligation.',
      },
    ],
  },
  {
    slug: 'south-bend',
    name: 'South Bend',
    state: 'IN',
    stateFull: 'Indiana',
    county: 'St. Joseph County',
    postalCodes: ['46601', '46613', '46614', '46615', '46616', '46617', '46619', '46628', '46635', '46637'],
    geo: { latitude: 41.6764, longitude: -86.2520 },
    wikiUrl: 'https://en.wikipedia.org/wiki/South_Bend,_Indiana',
    distanceNote: '10 minutes from Downtown South Bend & Eddy Street',
    seoTitle: 'Web Design South Bend, IN | Custom Small Business Websites | Michiana Dev',
    metaDescription:
      'Custom web design and software development for South Bend, IN small businesses. Fast, mobile-first websites—from simple starter sites to full custom builds—by a local Michiana engineer.',
    eyebrow: 'South Bend, Indiana · Local Web Studio',
    h1: ['High-performing web design for', 'South Bend businesses.'],
    intro:
      'South Bend is the largest market in Michiana—and the most competitive on Google and AI search. I design and hand-build fast, custom websites and software for South Bend small businesses, contractors, restaurants, and professional firms that want to stand out from slow, template-built competitors.',
    quickAnswer:
      'For small businesses in South Bend, Indiana (ZIP codes 46601–46637), Michiana Dev LLC builds custom, mobile-first websites ranging from simple starter sites to full custom builds. Based 10 minutes away in Mishawaka, software engineer Joe Hollenbach works directly with South Bend contractors, restaurants, and professional firms—delivering sub-second load times, local SEO schema, and 100% site ownership without agency retainers.',
    corridors: 'Downtown South Bend · Eddy Street & Notre Dame · Ireland Road · Portage & Bendix Corridors · River Park',
    marketOverview: [
      'In a city the size of South Bend, dozens of competitors are vying for the same local searches—whether it’s emergency home repair in River Park and Harter Heights, dining near Downtown or Eddy Street Commons, or professional and medical services along Ireland Road and the north side.',
      'Search engines and AI answer engines (like ChatGPT, Perplexity, and Google AI Overviews) reward websites that load instantly on mobile phones, clearly state what services are offered in which South Bend neighborhoods, and back it up with structured Google-ready local business details. Based right next door in Mishawaka, I build South Bend websites that load in under a second and guide visitors straight to calling your phone or requesting a quote.',
    ],
    whyLocalMatters: [
      {
        title: 'Engineered to beat slow agency & WordPress sites',
        desc: 'Many South Bend business websites take 5–8 seconds to load on a cell phone because they’re weighed down by bloated templates. My custom builds load near-instantly, keeping impatient mobile visitors on your page.',
      },
      {
        title: 'Dedicated service & neighborhood coverage',
        desc: 'Instead of cramming everything onto one vague page, we structure dedicated pages for the exact services you offer across South Bend and St. Joseph County.',
      },
      {
        title: 'Direct access to a local engineer, upfront pricing',
        desc: 'Skip the steep downtown agency pitch and monthly marketing lock-ins. Every build is quoted upfront around your scope, and you work one-on-one with the engineer building your site.',
      },
    ],
    featuredProjectSlugs: ['jh-claims', 'no-limit-roofing', 'tristorm'],
    nearbyTowns: ['Mishawaka', 'Granger', 'New Carlisle', 'Plymouth', 'Niles, MI'],
    nearbySlugs: ['mishawaka', 'granger', 'niles'],
    faqs: [
      {
        q: 'How is web design priced in South Bend, Indiana?',
        a: 'At Michiana Dev, every South Bend project is quoted upfront around your business size and goals—from Simple Starter Sites (1–3 pages) for solo or newer shops to Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), without steep agency retainers.',
      },
      {
        q: 'Why hire Michiana Dev instead of a traditional South Bend marketing agency?',
        a: 'Traditional agencies typically charge $8,000–$15,000+, hand your project to junior staff using a slow template, and try to lock you into expensive monthly SEO retainers. At Michiana Dev, you work directly with Joe Hollenbach (a software engineer based next door in Mishawaka), your site is custom-built for speed and conversions around your scope, and you own everything.',
      },
      {
        q: 'How long does it take to launch a new website for a South Bend business?',
        a: 'Most 5–8 page South Bend small-business websites launch in 2 to 4 weeks from kickoff, depending on how quickly we gather your photos and feedback.',
      },
      {
        q: 'Do you also build custom software or client portals for South Bend companies?',
        a: 'Yes. In addition to marketing websites, I hold a B.S. in Software Engineering and build custom web applications, role-based client portals, scheduling systems, and AI-powered tools for South Bend organizations.',
      },
    ],
  },
  {
    slug: 'elkhart',
    name: 'Elkhart',
    state: 'IN',
    stateFull: 'Indiana',
    county: 'Elkhart County',
    postalCodes: ['46514', '46515', '46516', '46517'],
    geo: { latitude: 41.6820, longitude: -85.9767 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Elkhart,_Indiana',
    distanceNote: '20 minutes east along US-20 / IN-120',
    seoTitle: 'Web Design Elkhart, IN | Websites for Contractors, B2B & SMBs | Michiana Dev',
    metaDescription:
      'Custom websites and software for Elkhart, Indiana (46514–46517) small businesses, contractors, manufacturers, and restaurants. Built locally for your budget.',
    eyebrow: 'Elkhart, Indiana · Elkhart County (46514–46517)',
    h1: ['Custom websites & software for', 'Elkhart businesses.'],
    intro:
      'Elkhart businesses are built on craftsmanship, speed, and reliability—your website should be too. From specialty contractors and home-service trades to B2B suppliers, manufacturers, and local restaurants across Elkhart County, I build websites that earn trust and generate real inquiries.',
    quickAnswer:
      'Michiana Dev LLC builds custom websites and web software for businesses in Elkhart, Indiana (ZIP codes 46514, 46516, and 46517) and across Elkhart County. Located 20 minutes west in Mishawaka, software engineer Joe Hollenbach delivers fast, mobile-first websites ranging from simple starter sites to full custom builds for Elkhart contractors, B2B manufacturers, restaurants, and local service companies.',
    corridors: 'Downtown Elkhart · Cassopolis Street (SR 19) · CR 6 & Industrial Parks · Concord / US-33 · Dunlap',
    marketOverview: [
      'Elkhart’s economy blends hard-working residential trades, busy retail corridors along Cassopolis Street and US-33, and one of the highest concentrations of manufacturing and B2B supply companies in the Midwest. Yet many established Elkhart companies still rely on outdated websites from a decade ago that don’t work on mobile or fail to explain what sets them apart.',
      'Whether you need a lead-generating website for an Elkhart County roofing, HVAC, or restoration company, a sharp B2B site to impress commercial buyers, or custom software to streamline internal operations, I build clean, durable web systems just 20 minutes west in Mishawaka.',
    ],
    whyLocalMatters: [
      {
        title: 'Tailored for both consumer trades & Elkhart B2B companies',
        desc: 'Whether your customer is a homeowner on CR 17 needing an urgent estimate or a purchasing manager vetting your manufacturing capabilities, the site is structured around how your buyers actually decide.',
      },
      {
        title: 'Multi-county Michiana reach',
        desc: 'Many Elkhart businesses serve customers across Elkhart, St. Joseph, Kosciusko, and LaGrange counties—plus Cass and St. Joseph counties in Michigan. We build location and service pages that reflect your real footprint.',
      },
      {
        title: 'Custom software & workflow capability',
        desc: 'Need more than a brochure site? I build custom portals, quoting forms, CRM integrations, and internal tools tailored to how your shop or crew runs.',
      },
    ],
    featuredProjectSlugs: ['no-limit-roofing', 'tristorm', 'hsc-portal'],
    nearbyTowns: ['Goshen', 'Mishawaka', 'Osceola', 'Granger', 'Edwardsburg, MI'],
    nearbySlugs: ['goshen', 'mishawaka', 'granger'],
    faqs: [
      {
        q: 'Who builds websites for contractors and manufacturers in Elkhart, Indiana?',
        a: 'Michiana Dev LLC (based 20 minutes west in Mishawaka, IN) builds custom websites and web applications for Elkhart contractors (roofing, restoration, HVAC, plumbing) as well as Elkhart County manufacturers, B2B suppliers, and local retail/hospitality businesses. Every project is quoted upfront around your scope after a free consultation.',
      },
      {
        q: 'Can my Elkhart website target surrounding towns like Goshen, Middlebury, and Mishawaka?',
        a: 'Yes. Every website includes local SEO and Google-ready local business details, and we can add dedicated location pages for Goshen, Mishawaka, South Bend, Granger, Middlebury, Nappanee, or Michigan towns you serve.',
      },
      {
        q: 'Who handles website updates after launch?',
        a: 'My optional monthly hosting and maintenance plan includes SSL security, backups, and up to one hour of content updates every month—so if you need new project photos added, spec sheets updated, or hours changed, you just send me an email.',
      },
      {
        q: 'Do I own my website and domain name?',
        a: 'Yes, 100%. You own your domain, your content, and the finished site with no proprietary lock-in.',
      },
    ],
  },
  {
    slug: 'granger',
    name: 'Granger',
    state: 'IN',
    stateFull: 'Indiana',
    county: 'St. Joseph County',
    postalCodes: ['46530'],
    geo: { latitude: 41.7534, longitude: -86.1108 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Granger,_Indiana',
    distanceNote: '10 minutes north of our Mishawaka studio',
    seoTitle: 'Web Design Granger, IN | Custom Small Business Websites | Michiana Dev',
    metaDescription:
      'Custom website design for Granger, Indiana (46530) small businesses, home-service contractors, medical/professional practices, and restaurants for your budget.',
    eyebrow: 'Granger, Indiana · St. Joseph County (46530)',
    h1: ['Polished, high-converting websites for', 'Granger businesses.'],
    intro:
      'Homeowners and clients in Granger expect high standards—and they judge a business by its website before they ever pick up the phone. I design and build custom, fast websites for businesses serving Granger, Heritage Square, and the SR-23 and Adams Road corridors.',
    quickAnswer:
      'Michiana Dev LLC provides custom web design and local SEO setup for businesses serving Granger, Indiana (46530). Based 10 minutes south in Mishawaka, software engineer Joe Hollenbach builds credibility-first websites ranging from simple starter sites to full custom builds for Granger home-service contractors, medical and dental offices, professional firms, and Heritage Square / SR-23 restaurants.',
    corridors: 'Heritage Square · SR 23 · Bittersweet & Cleveland Road · Adams Road · State Line / Gumwood',
    marketOverview: [
      'Granger is one of the highest-demand residential and professional markets in Michiana. For home-service contractors (roofing, remodeling, landscaping, HVAC, restoration), medical and dental practices, financial and insurance offices, and dining near Heritage Square and Gumwood Road, first impressions online directly determine whether a client calls you or your competitor.',
      'A generic template with stock photos immediately looks out of place to Granger customers. I build custom, credibility-first websites that showcase your real work, reviews, and professionalism while loading instantly on any device.',
    ],
    whyLocalMatters: [
      {
        title: 'Credibility-first design that wins high-value clients',
        desc: 'Clean typography, authentic project galleries, and prominent customer reviews give Granger homeowners and clients immediate confidence in your business.',
      },
      {
        title: 'Cross-border visibility (IN & MI)',
        desc: 'Sitting right on the Michigan state line, Granger businesses regularly draw clients from Mishawaka, South Bend, Elkhart, and Edwardsburg/Niles. Your site’s local SEO is built to capture both sides of the state line.',
      },
      {
        title: 'Effortless contact & booking paths',
        desc: 'Whether your clients prefer tap-to-call, a fast estimate request form, or online appointment booking, every page makes taking the next step frictionless.',
      },
    ],
    featuredProjectSlugs: ['jh-claims', 'tristorm', 'no-limit-roofing'],
    nearbyTowns: ['Mishawaka', 'South Bend', 'Elkhart', 'Edwardsburg, MI', 'Niles, MI'],
    nearbySlugs: ['mishawaka', 'south-bend', 'elkhart', 'niles'],
    faqs: [
      {
        q: 'How can my Mishawaka or South Bend business rank for customers searching in Granger (46530)?',
        a: 'Many contractors and service businesses do a large share of their work in Granger (46530) without having a physical storefront there. By building a dedicated Granger service-area page on your website and aligning your Google-ready local business details and Google Business Profile service areas, Google and AI search engines can confidently recommend you to Granger homeowners.',
      },
      {
        q: 'How is a custom website for a Granger business priced?',
        a: 'Every Granger project is quoted upfront around your scope after a free consultation—from Simple Starter Sites (1–3 pages) to Business Website + Local Launch (5–8+ pages with one-time Google Business Profile setup and handoff) or custom content editor/portal builds.',
      },
      {
        q: 'Can you integrate online scheduling or estimate requests for a Granger practice or contractor?',
        a: 'Yes. Every standard website includes custom lead and estimate forms, and I can also integrate your existing booking, CRM, or patient/client scheduling software.',
      },
      {
        q: 'How do we get started with a free website review?',
        a: 'Request a free website review using the form below or call Joe directly at (574) 213-8502. We’ll talk through your business and goals, and I’ll provide a clear scope and quote before any work begins.',
      },
    ],
  },
  {
    slug: 'goshen',
    name: 'Goshen',
    state: 'IN',
    stateFull: 'Indiana',
    county: 'Elkhart County',
    postalCodes: ['46526', '46527', '46528'],
    geo: { latitude: 41.5823, longitude: -85.8344 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Goshen,_Indiana',
    distanceNote: '30 minutes southeast in Elkhart County',
    seoTitle: 'Web Design Goshen, IN | Small Business & Contractor Websites | Michiana Dev',
    metaDescription:
      'Custom websites and software for Goshen, Indiana (46526, 46528) small businesses, contractors, restaurants, and local shops. Built in Michiana for your budget.',
    eyebrow: 'Goshen, Indiana · Elkhart County (46526–46528)',
    h1: ['Custom websites built for', 'Goshen small businesses.'],
    intro:
      'From thriving Downtown Goshen restaurants and shops to family-owned contractors and manufacturers across Elkhart County, Goshen businesses thrive on personal reputation. I build custom websites that bring that same quality online and turn local searches into steady customers.',
    quickAnswer:
      'Michiana Dev LLC builds custom, mobile-first websites for small businesses in Goshen, Indiana (ZIP codes 46526 and 46528) and across Elkhart County. Options range from simple starter sites to full business websites with Google Business Profile setup, built directly by local Michiana software engineer Joe Hollenbach with typical launch times of 2–4 weeks.',
    corridors: 'Downtown Goshen & Main Street · US-33 / Lincolnway · Millersburg Road · College Avenue · Dunlap',
    marketOverview: [
      'Goshen has a vibrant independent business community—from restaurants, breweries, and retail along Main Street to builders, roofers, agricultural/industrial suppliers, and professional services along the US-33 corridor.',
      'When local residents or visitors look up your business on Google or ask an AI search tool for recommendations in Goshen, an outdated site or a Facebook-only presence leaves money on the table. I build fast, custom websites that tell your story clearly, work effortlessly on mobile phones, and are backed by real local engineering support.',
    ],
    whyLocalMatters: [
      {
        title: 'A real person in Michiana, not a faceless call center',
        desc: 'You work directly with me from start to finish. When you need a seasonal update, a menu change, or a new service page, I’m one email or phone call away.',
      },
      {
        title: 'Built for Google Search, Maps & AI recommendations',
        desc: 'Proper local schema, clear service descriptions, and optional one-time Google Business Profile setup help Goshen customers find and choose you.',
      },
      {
        title: 'Transparent packages with no surprise retainers',
        desc: 'Every project gets a fixed quote tailored to your scope before work starts—from simple starter sites to full builds with optional monthly hosting.',
      },
    ],
    featuredProjectSlugs: ['no-limit-roofing', 'tristorm', 'review-responder'],
    nearbyTowns: ['Elkhart', 'Mishawaka', 'Bremen', 'Middlebury', 'Nappanee'],
    nearbySlugs: ['elkhart', 'mishawaka', 'south-bend'],
    faqs: [
      {
        q: 'How is a small-business website priced in Goshen, Indiana?',
        a: 'Every Goshen website is quoted upfront around your scope after a free consultation—whether you need a Simple Starter Site (1–3 pages) for a newer shop or Business Website + Local Launch (5–8+ pages with one-time Google Business Profile setup and handoff), plus optional monthly hosting and updates.',
      },
      {
        q: 'Do you build websites for both Downtown Goshen shops/restaurants and local trades?',
        a: 'Yes. Whether you run a restaurant or storefront in Downtown Goshen that needs mobile-friendly menus, hours, and photos, or a home-service trade serving all of Elkhart and Kosciusko counties, I design the site around what your specific customers need.',
      },
      {
        q: 'Do you lock Goshen clients into long-term monthly SEO contracts?',
        a: 'Never. On-page local SEO and Google-ready local business details are built into your website from day one, and my Google Business Profile service is a one-time setup and handoff so you control your own profile without paying a monthly marketing fee.',
      },
      {
        q: 'Can I update my own website if I want to?',
        a: 'If you want me to handle minor updates, the optional hosting plan includes up to an hour of updates each month. If you need a easy-to-update content editor (for example, for daily restaurant specials or frequent inventory changes), I can build a custom content editor setup so your team can edit content anytime.',
      },
    ],
  },
  {
    slug: 'niles',
    name: 'Niles',
    state: 'MI',
    stateFull: 'Michigan',
    county: 'Berrien & Cass Counties',
    postalCodes: ['49120'],
    geo: { latitude: 41.8298, longitude: -86.2542 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Niles,_Michigan',
    distanceNote: '20 minutes north across the Michigan state line',
    seoTitle: 'Web Design Niles, MI | Southwest Michigan Websites | Michiana Dev',
    metaDescription:
      'Custom web design and software for Niles, Michigan (49120) and Southwest Michigan small businesses, contractors, and restaurants for your budget.',
    eyebrow: 'Niles, Michigan · Southwest Michigan (49120)',
    h1: ['Custom web design for', 'Niles & Southwest Michigan.'],
    intro:
      'Business in Michiana doesn’t stop at the state line. Located just 20 minutes south in Mishawaka, I build fast, custom websites for businesses in Niles, Buchanan, Edwardsburg, Dowagiac, and across Berrien and Cass counties.',
    quickAnswer:
      'Michiana Dev LLC builds custom websites and software for small businesses in Niles, Michigan (49120) and across Berrien and Cass counties. Located 20 minutes south in Mishawaka, software engineer Joe Hollenbach creates fast, bi-state SEO-structured websites ranging from simple starter sites to full custom builds that help Niles contractors, restaurants, and service companies capture customers on both sides of the Indiana–Michigan border.',
    corridors: 'Downtown Niles & Riverfront · South 11th Street (M-51) · US-12 Corridor · Buchanan & Edwardsburg',
    marketOverview: [
      'Niles sits at the crossroads of Southwest Michigan and Northern Indiana. Local contractors, automotive and repair shops, restaurants along Main Street and South 11th Street, and service businesses regularly serve customers in both Michigan (Berrien and Cass counties) and Indiana (St. Joseph County).',
      'Most web designers treat Indiana and Michigan as separate worlds, missing out on cross-border search traffic. Because I’m based right here in Michiana, I structure your website and local SEO so customers find you whether they’re searching from Niles, Buchanan, Edwardsburg, Granger, or South Bend.',
    ],
    whyLocalMatters: [
      {
        title: 'True bi-state Michiana search structure',
        desc: 'If your business serves both Southwest Michigan and Northern Indiana, your site’s service areas, location pages, and Google-ready local business details are built to rank on both sides of the border.',
      },
      {
        title: 'Fast mobile performance for rural & highway corridors',
        desc: 'Customers searching along US-12, M-51, or around Barron Lake and Cassopolis aren’t always on fast Wi-Fi. Lightweight, custom-coded pages load quickly even on spotty cellular connections.',
      },
      {
        title: 'Direct partnership with a local developer',
        desc: 'Work one-on-one with an engineer 20 minutes away who understands the Michiana market and builds every page by hand.',
      },
    ],
    featuredProjectSlugs: ['no-limit-roofing', 'tristorm', 'jh-claims'],
    nearbyTowns: ['Buchanan, MI', 'Edwardsburg, MI', 'Dowagiac, MI', 'South Bend, IN', 'Granger, IN'],
    nearbySlugs: ['st-joseph', 'south-bend', 'granger', 'mishawaka'],
    faqs: [
      {
        q: 'Do you work with businesses in Niles, Buchanan, Edwardsburg, and Cassopolis, MI?',
        a: 'Yes. I work with small businesses across Berrien and Cass counties in Southwest Michigan—including Niles (49120), Buchanan, Edwardsburg, Cassopolis, Dowagiac, St. Joseph, Benton Harbor, and New Buffalo—as well as Northern Indiana companies that serve Michigan customers.',
      },
      {
        q: 'How can a website help my Niles business reach customers in both Michigan and Indiana?',
        a: 'By structuring dedicated service-area and town pages with accurate bi-state Google-ready local business details and matching Google Business Profile service areas, Google and AI search engines clearly understand that you serve customers across both Berrien/Cass counties (MI) and St. Joseph/Elkhart counties (IN).',
      },
      {
        q: 'How is a small business website priced in Niles, MI?',
        a: 'Every project is quoted upfront around your scope after a free consultation—from Simple Starter Sites (1–3 pages) to Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), with optional monthly hosting.',
      },
      {
        q: 'Can you replace an old Wix, Squarespace, or WordPress site without losing our domain?',
        a: 'Yes. Most of my projects are complete rebuilds of slow or outdated sites. I handle the migration carefully so you keep your domain name, email setup, and existing search equity.',
      },
    ],
  },
  {
    slug: 'st-joseph',
    name: 'St. Joseph & Benton Harbor',
    state: 'MI',
    stateFull: 'Michigan',
    county: 'Berrien County',
    postalCodes: ['49085', '49022', '49127', '49117'],
    geo: { latitude: 42.1098, longitude: -86.4800 },
    wikiUrl: 'https://en.wikipedia.org/wiki/St._Joseph,_Michigan',
    distanceNote: '40 minutes northwest on Lake Michigan',
    seoTitle: 'Web Design St. Joseph & Benton Harbor, MI | Michiana Dev',
    metaDescription:
      'Custom websites for St. Joseph (49085), Benton Harbor (49022), and Harbor Country small businesses, restaurants, and contractors in Southwest Michigan.',
    eyebrow: 'St. Joseph & Benton Harbor · Southwest Michigan (49085 / 49022)',
    h1: ['Custom websites for', 'St. Joseph & Southwest Michigan.'],
    intro:
      'Along Michigan’s Sunset Coast—from St. Joseph and Benton Harbor down to Stevensville and New Buffalo—businesses compete for both year-round Berrien County residents and thousands of seasonal visitors. I build fast, photo-forward, mobile-first websites that convert both.',
    quickAnswer:
      'Michiana Dev LLC designs and hand-builds custom websites for businesses in St. Joseph (49085), Benton Harbor (49022), Stevensville, and New Buffalo in Berrien County, Michigan. Options range from simple starter sites to full multi-page builds with Google Business Profile setup, built directly by Michiana software engineer Joe Hollenbach.',
    corridors: 'Downtown St. Joseph · Benton Harbor Arts District · Stevensville / Red Arrow Hwy · I-94 Corridor · New Buffalo',
    marketOverview: [
      'In St. Joseph, Benton Harbor, and Harbor Country, customers make rapid decisions on their phones: tourists looking for menus, hours, and reservations near Silver Beach, lakefront homeowners hiring trusted roofers, remodelers, or landscapers, and local companies serving all of Berrien County.',
      'A slow website with broken mobile menus or outdated PDFs sends those customers straight to the next listing on Google Maps. I build custom, fast-loading websites and software that showcase your brand beautifully and turn searches into calls, orders, and bookings.',
    ],
    whyLocalMatters: [
      {
        title: 'Photo-forward design that still loads in under a second',
        desc: 'Whether you’re showing off lakefront craftsmanship, a dining room, or a retail storefront, I optimize every visual so your site looks sharp without bogging down mobile phones.',
      },
      {
        title: 'Built for both year-round locals & seasonal visitors',
        desc: 'Clear hours, one-tap directions, tap-to-call buttons, and Google Business Profile alignment ensure visitors and Berrien County homeowners get accurate info immediately.',
      },
      {
        title: 'Direct engineering without big-city agency overhead',
        desc: 'Get Chicago-caliber software engineering and custom design at straightforward Michiana pricing—quoted around your scope.',
      },
    ],
    featuredProjectSlugs: ['tristorm', 'jh-claims', 'review-responder'],
    nearbyTowns: ['Stevensville, MI', 'New Buffalo, MI', 'Niles, MI', 'Buchanan, MI', 'Michigan City, IN'],
    nearbySlugs: ['niles', 'south-bend', 'mishawaka'],
    faqs: [
      {
        q: 'Do you build websites for St. Joseph and Harbor Country restaurants and hospitality businesses?',
        a: 'Yes. I build fast, photo-forward sites with easy-to-read mobile mobile-friendly menus (no pinched PDFs), clear seasonal/holiday hours, online ordering or reservation integrations, and optional easy-to-update editor controls so your staff can update menus anytime.',
      },
      {
        q: 'Do you also work with Berrien County contractors and home-service companies?',
        a: 'Yes. Contractors and home-service trades (roofing, restoration, HVAC, plumbing, remodeling, landscaping) are one of my core specialties. Every contractor site is built around tap-to-call conversion, free-estimate forms, and local Berrien County SEO.',
      },
      {
        q: 'How is a website priced in St. Joseph or Benton Harbor, MI?',
        a: 'Every project is quoted upfront around your scope after a free consultation—from Simple Starter Sites (1–3 pages) to Business Website + Local Launch (5–8+ pages plus one-time Google Business Profile setup and handoff), with optional monthly hosting.',
      },
      {
        q: 'How do we collaborate if my business is in St. Joseph or Benton Harbor?',
        a: 'We can kick off with a phone or video consultation—or meet in person in Michiana—and you work directly with me throughout the 2–4 week build.',
      },
    ],
  },
];
