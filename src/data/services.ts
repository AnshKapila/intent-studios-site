import type { FaqItem, ProofItem } from "./site";

export type ServiceSlug =
  | "website-design"
  | "product-design"
  | "brand-identity"
  | "content-social";

export interface ServiceItem {
  slug: ServiceSlug;
  index: string;
  name: string;
  shortName: string;
  href: string;
  outcomeLine: string;
  proofLine: string;
  goalLabel: string;
  summary: string;
  heroTitle: string;
  heroIntro: string;
  deliverables: { title: string; detail: string }[];
  whoItIsFor: string[];
  timeline: string;
  stageTimelines: string[];
  priceDrivers: string[];
  fitList: { bestFit: string[]; notAFit: string[] };
  proofBar: ProofItem[];
  faqs: FaqItem[];
  relatedServices: ServiceSlug[];
  hasTypePages?: boolean;
  previewType: "website" | "product" | "brand" | "content";
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "website-design",
    index: "01",
    name: "Website Design & Build",
    shortName: "Websites",
    href: "/services/website-design/",
    outcomeLine: "High-converting marketing sites and storefronts engineered to turn visitors into qualified leads and buyers.",
    proofLine: "Built on modern full-stack architecture with sub-second loads and clean SEO foundations.",
    goalLabel: "Turn traffic into enquiries or sales",
    summary:
      "Strategy, UX architecture, custom visual design, and full-stack development for startups, D2C brands, and growing service businesses.",
    heroTitle: "Websites engineered to convert — not sit quietly as digital brochures.",
    heroIntro:
      "We pair clear buyer positioning with bespoke dark- or light-led visual systems and fast, accessible frontend code so your site earns trust on the very first screen.",
    deliverables: [
      {
        title: "Conversion Architecture & Sitemap",
        detail: "Page hierarchy, offer framing, and user journeys structured around real buyer objections.",
      },
      {
        title: "Custom Visual & Component System",
        detail: "Bespoke typography, spacing tokens, and responsive layouts built specifically for your brand.",
      },
      {
        title: "Full-Stack Development & CMS",
        detail: "Production Next.js / React or Shopify builds with clean code, refined motion, and easy content updates.",
      },
      {
        title: "Technical SEO & Launch QA",
        detail: "Per-page metadata, canonicals, structured sitemaps, speed optimization, and cross-viewport verification.",
      },
    ],
    whoItIsFor: [
      "Growing businesses whose current site undersells the real quality of their work.",
      "D2C and product brands moving off sluggish, generic storefronts.",
      "Startups launching a new category offer that needs immediate credibility.",
    ],
    timeline: "3–6 weeks",
    stageTimelines: ["Days 1–3", "Week 1", "Weeks 2–3", "Weeks 3–5", "Week 6"],
    priceDrivers: [
      "Total number of unique page templates and custom interactive flows.",
      "E-commerce checkout, inventory, or third-party CRM/booking integrations.",
      "Whether copywriting, brand visual direction, or custom photography/content is included.",
    ],
    fitList: {
      bestFit: [
        "Teams ready to treat their website as a primary revenue and trust engine.",
        "Founders who want custom design and clean engineering under one roof.",
      ],
      notAFit: [
        "Projects looking for a quick reskin of a $49 theme with no strategy.",
        "Sites that require complex enterprise ERP migrations outside web scope.",
      ],
    },
    proofBar: [
      { value: "3–6 wks", label: "Typical launch window", context: "From initial discovery to production QA." },
      { value: "100%", label: "Responsive & accessible", context: "Verified across 360px mobile to 1440px desktop." },
      { value: "Full-stack", label: "Design + Code", context: "Zero handoff drift between Figma and production." },
    ],
    faqs: [
      {
        question: "Do you build on Next.js, Webflow, or Shopify?",
        answer:
          "We choose the stack that best fits your team’s long-term operations — Next.js and React for high-performance custom sites and apps, Shopify for scalable e-commerce storefronts, and headless CMS setups when marketing teams publish frequently.",
      },
      {
        question: "Will we be able to edit text and add pages ourselves after launch?",
        answer:
          "Yes. We structure every build with clean data layers or CMS collections and provide a short walkthrough so your team can update content without breaking layout integrity.",
      },
      {
        question: "Do you handle domain setup, redirects, and technical SEO?",
        answer:
          "Yes. Every website launch includes canonical URLs, unique titles and meta descriptions, sitemap.xml, robots.txt, and 301 redirects so you preserve search equity.",
      },
    ],
    relatedServices: ["brand-identity", "product-design", "content-social"],
    hasTypePages: true,
    previewType: "website",
  },
  {
    slug: "product-design",
    index: "02",
    name: "Product & App Design",
    shortName: "Product & App",
    href: "/services/product-design/",
    outcomeLine: "Intuitive UI/UX and end-to-end digital product systems that reduce friction and keep users coming back.",
    proofLine: "Component-driven interfaces designed directly for engineering clarity and fast iteration.",
    goalLabel: "Launch or redesign a digital product",
    summary:
      "End-to-end product UX, interactive prototypes, design systems, and frontend engineering for web apps, SaaS platforms, and mobile products.",
    heroTitle: "Digital products built for clarity, retention, and fast shipping.",
    heroIntro:
      "From zero-to-one MVPs to complex workflow redesigns, we translate messy feature sets into calm, high-precision interfaces engineers love to build.",
    deliverables: [
      {
        title: "Product Flows & Information Architecture",
        detail: "User journeys, edge-case mapping, and onboarding flows that cut time-to-value.",
      },
      {
        title: "UI Design & Interactive Prototypes",
        detail: "High-craft web and mobile screens validated with clickable prototypes before engineering.",
      },
      {
        title: "Scalable Design Systems",
        detail: "Tokenized typography, color, spacing, and interactive component states ready for code.",
      },
      {
        title: "Frontend Implementation Support",
        detail: "Direct React / Next.js UI engineering or tight collaboration with your internal developers.",
      },
    ],
    whoItIsFor: [
      "Early-stage SaaS and AI startups preparing to launch or raise with a credible product.",
      "Established software teams suffering from clunky onboarding or fragmented UI.",
      "Founders turning a service workflow into a dedicated customer-facing app.",
    ],
    timeline: "4–8 weeks",
    stageTimelines: ["Week 1", "Weeks 1–2", "Weeks 2–5", "Weeks 5–7", "Week 8"],
    priceDrivers: [
      "Number of core user roles, workflows, and complex data/dashboard views.",
      "Whether the scope is UI/UX & design system only or includes full frontend build.",
      "Depth of user testing and iterative prototype sprints required.",
    ],
    fitList: {
      bestFit: [
        "Product founders who care deeply about usability, speed, and visual polish.",
        "Engineering teams wanting clean, tokenized component specs without ambiguity.",
      ],
      notAFit: [
        "Teams looking for purely cosmetic dribbble shots detached from real product states.",
        "Projects with undefined core functionality and no active product owner.",
      ],
    },
    proofBar: [
      { value: "Tokenized", label: "Design systems", context: "Primitive, semantic, and component tokens built to scale." },
      { value: "End-to-end", label: "UX to frontend", context: "Flows, prototypes, states, and production UI." },
      { value: "4–8 wks", label: "MVP / Redesign", context: "Structured weekly milestones with live review links." },
    ],
    faqs: [
      {
        question: "Can you work alongside our in-house engineering team?",
        answer:
          "Yes. We regularly partner directly with internal engineers, delivering production-ready Figma component libraries, token specs, and interactive prototypes — or writing the React/Tailwind frontend layer ourselves.",
      },
      {
        question: "Do you design empty states, error states, and responsive breakpoints?",
        answer:
          "Always. Real products live in edge cases. Every workflow includes loading, empty, error, validation, and mobile/desktop responsive specifications.",
      },
      {
        question: "Can you help scope an MVP before full design starts?",
        answer:
          "Yes. Our Discovery and Strategy phase trims unnecessary feature bloat so your first release ships faster and validates the core value proposition.",
      },
    ],
    relatedServices: ["website-design", "brand-identity"],
    previewType: "product",
  },
  {
    slug: "brand-identity",
    index: "03",
    name: "Brand Identity",
    shortName: "Brand Identity",
    href: "/services/brand-identity/",
    outcomeLine: "Distinctive visual identities and brand systems that make ambitious businesses immediately recognisable.",
    proofLine: "Cohesive wordmarks, typography, color rules, and practical guidelines built for digital-first brands.",
    goalLabel: "Look legitimate and stand apart",
    summary:
      "Positioning, logo systems, typography, colour architecture, and practical visual guidelines designed to work across web, product, and social.",
    heroTitle: "Brand systems built for legitimacy, recognition, and real-world use.",
    heroIntro:
      "We do not deliver 80-page brand books that gather dust. We build sharp, practical visual identities designed to hold together across your website, product, packaging, and social presence.",
    deliverables: [
      {
        title: "Brand Positioning & Visual Direction",
        detail: "Clear audience framing, tone rules, and art direction grounded in your market reality.",
      },
      {
        title: "Logo Suite & Brand Marks",
        detail: "Primary wordmark, icon mark, responsive lockups, and dark/light usage rules.",
      },
      {
        title: "Colour, Type & Grid Architecture",
        detail: "Accessible palettes, typographic hierarchy, and layout motifs that scale effortlessly.",
      },
      {
        title: "Practical Brand System Guide",
        detail: "A concise visual brain your team and future collaborators can apply immediately.",
      },
    ],
    whoItIsFor: [
      "Startups moving from a DIY logo to a serious market-ready identity.",
      "D2C, fitness, and lifestyle brands struggling to look cohesive across touchpoints.",
      "Established businesses rebranding before a major website or product launch.",
    ],
    timeline: "2–4 weeks",
    stageTimelines: ["Days 1–3", "Week 1", "Weeks 2–3", "Week 3", "Week 4"],
    priceDrivers: [
      "Core identity system vs. extended packaging, print, and collateral rollouts.",
      "Whether verbal positioning and messaging guidelines are included.",
      "Integration directly into a new website or content template kit.",
    ],
    fitList: {
      bestFit: [
        "Founders who want a confident, minimalist, modern identity with staying power.",
        "Brands pairing identity work with a website or visual content upgrade.",
      ],
      notAFit: [
        "Anyone looking for 20 logo concepts in 48 hours from a logo-mill process.",
        "Teams wanting playful mascots or trend-chasing aesthetics disconnected from strategy.",
      ],
    },
    proofBar: [
      { value: "2–4 wks", label: "Identity sprint", context: "Focused direction without endless agency rounds." },
      { value: "Digital-first", label: "Built for screens", context: "Tested on web, mobile UI, and social formats." },
      { value: "Actionable", label: "Brand system", context: "Clear rules your team can actually use on day one." },
    ],
    faqs: [
      {
        question: "Do you design logos on their own, or complete brand systems?",
        answer:
          "We design complete visual systems. A logo alone cannot carry a brand — typography, colour contrast, imagery rules, and layout rhythm are what make a business look credible everywhere.",
      },
      {
        question: "Can Brand Identity and Website Design run together?",
        answer:
          "Yes, and it is often the fastest route. Establishing the identity system in weeks 1–2 flows directly into website design and engineering with zero rework.",
      },
      {
        question: "What file formats and guidelines do we receive?",
        answer:
          "You receive vector SVG/EPS/PDF logo suites, color and font specifications, Figma component tokens, and a practical Visual Brand Guide for your team.",
      },
    ],
    relatedServices: ["website-design", "content-social", "product-design"],
    previewType: "brand",
  },
  {
    slug: "content-social",
    index: "04",
    name: "Content & Social",
    shortName: "Content & Social",
    href: "/services/content-social/",
    outcomeLine: "Art-directed AI-led product shoots, campaign visuals, and social design systems that look like a real studio.",
    proofLine: "Studio-grade visual assets delivered at modern speed — without sacrificing brand taste.",
    goalLabel: "Elevate visuals and social presence",
    summary:
      "AI-led product and editorial shoots, campaign creatives, and structured social visual systems that keep your brand looking sharp across channels.",
    heroTitle: "Studio-grade brand visuals and social systems — without traditional shoot bottlenecks.",
    heroIntro:
      "We combine creative direction, brand guidelines, and practical AI production workflows to deliver crisp product imagery, campaign visuals, and repeatable social formats that actually look legitimate.",
    deliverables: [
      {
        title: "AI-Led Product & Editorial Shoots",
        detail: "Art-directed product scenes and campaign visuals calibrated to your lighting and brand palette.",
      },
      {
        title: "Social Visual System & Templates",
        detail: "Cohesive carousel, reel cover, and LinkedIn/Instagram design frameworks.",
      },
      {
        title: "Launch & Campaign Asset Kits",
        detail: "Coordinated visuals for website hero banners, ads, and product announcements.",
      },
      {
        title: "Creative Direction & Quality Control",
        detail: "Every asset is art-directed, colour-graded, and checked for realism — never raw AI output.",
      },
    ],
    whoItIsFor: [
      "D2C and product brands needing high-impact product photography across multiple campaigns.",
      "Founders and service brands whose social feeds look disconnected from their website.",
      "Teams launching new offers who need cohesive campaign visuals fast.",
    ],
    timeline: "1–3 weeks (or ongoing retainer — scope confirmation pending)",
    stageTimelines: ["Days 1–2", "Days 3–4", "Week 1–2", "Week 2", "Week 3"],
    priceDrivers: [
      "Total number of campaign scenes, SKU variations, and output formats.",
      "One-off launch visual kit vs. recurring monthly content production.",
      "Note: Whether ongoing social media account management is included is tracked in CONTENT-REQUIREMENTS.md.",
    ],
    fitList: {
      bestFit: [
        "Product and lifestyle brands that care about art direction and visual realism.",
        "Founders who want a sharp, cohesive feed without coordinating a full physical studio every month.",
      ],
      notAFit: [
        "Brands wanting AI-generated fake founder headshots or misleading before/after claims.",
        "Accounts chasing viral gimmicks at the expense of brand credibility.",
      ],
    },
    proofBar: [
      { value: "Art-directed", label: "Never raw AI", context: "Colour-graded, brand-locked, and realism-checked." },
      { value: "Multi-format", label: "Web + Social", context: "Sized cleanly for web heroes, 1:1, 4:5, and 9:16." },
      { value: "1–3 wks", label: "Production cycle", context: "Rapid creative turnaround for launches and campaigns." },
    ],
    faqs: [
      {
        question: "Will the visuals look obviously AI-generated?",
        answer:
          "No. Generic prompts create plastic, off-brand imagery. We direct lighting, texture, composition, and post-production grading so every asset fits seamlessly beside real brand photography.",
      },
      {
        question: "Do you generate AI photos of founders or fake team members?",
        answer:
          "Never. Founder and team photography should always be real photography. We use AI-led production for product staging, editorial environments, abstract architecture, and campaign visuals.",
      },
      {
        question: "Do you handle ongoing social media management and posting?",
        answer:
          "Our core strength is art-directed visual creation and social design systems. We confirm ongoing publishing or management scope during your discovery call based on your team’s setup.",
      },
    ],
    relatedServices: ["brand-identity", "website-design"],
    previewType: "content",
  },
];

export interface WebsiteTypePageData {
  slug: "ecommerce" | "business";
  href: string;
  name: string;
  h1: string;
  intro: string;
  whatsDifferent: { title: string; body: string }[];
  matchingProjectSlugs: string[];
  timeline: string;
  processNotes: string[];
  faqs: FaqItem[];
}

export const WEBSITE_TYPE_PAGES: Record<"ecommerce" | "business", WebsiteTypePageData> = {
  ecommerce: {
    slug: "ecommerce",
    href: "/services/website-design/ecommerce/",
    name: "E-commerce Website Design",
    h1: "E-commerce storefronts built for product clarity and checkout conversion.",
    intro:
      "For D2C and product brands ready to move beyond cluttered templates into a fast, editorial shopping experience that builds instant trust and lifts average order value.",
    whatsDifferent: [
      {
        title: "Product page hierarchy that answers doubts fast",
        body: "Clear imagery, sizing or ingredient clarity, shipping expectations, and trust signals positioned right next to the buy action.",
      },
      {
        title: "Mobile-first cart & checkout speed",
        body: "Most D2C traffic buys on a phone. We engineer thumb-friendly filters, frictionless drawers, and fast page transitions.",
      },
      {
        title: "Editorial merchandising without clutter",
        body: "High-contrast photography paired with disciplined typography so your product feels worth its price point.",
      },
    ],
    matchingProjectSlugs: ["kora-botanicals", "meridian-gear"],
    timeline: "4–7 weeks",
    processNotes: [
      "Audit existing store analytics, drop-off points, and PDP structure.",
      "Design collection, PDP, cart drawer, and brand storytelling templates.",
      "Build on Shopify or headless Next.js with optimized media and clean SEO.",
    ],
    faqs: [
      {
        question: "Do you build on Shopify or custom headless storefronts?",
        answer:
          "Most D2C brands get the best operational leverage from a bespoke Shopify theme; we recommend headless Next.js + Shopify only when custom merchandising or performance demands justify it.",
      },
      {
        question: "Can you migrate our existing products and preserve SEO URLs?",
        answer:
          "Yes. We map product collections, preserve working URLs, and configure 301 redirects for any changed paths before launch.",
      },
      {
        question: "Can you also produce upgraded product visuals for the store?",
        answer:
          "Yes. Many e-commerce clients pair a storefront redesign with our Content & Social service for cohesive PDP and campaign imagery.",
      },
    ],
  },
  business: {
    slug: "business",
    href: "/services/website-design/business/",
    name: "Business Website Design",
    h1: "Business websites that position you as the credible choice in your market.",
    intro:
      "For startups, studios, fitness brands, and professional service businesses that rely on booked calls, demo requests, or high-trust enquiries.",
    whatsDifferent: [
      {
        title: "Lead with positioning, not vague slogans",
        body: "Within five seconds, a visitor knows what you do, who you serve, and why your team is the safe, high-craft choice.",
      },
      {
        title: "Structured proof and service depth",
        body: "Dedicated service pages, case studies, and buyer-word FAQs that pre-qualify leads before they ever get on a call.",
      },
      {
        title: "Frictionless enquiry & booking flow",
        body: "A brief qualification form paired directly with calendar scheduling so high-intent buyers book immediately.",
      },
    ],
    matchingProjectSlugs: ["ironform-athletics", "northline-advisory"],
    timeline: "3–5 weeks",
    processNotes: [
      "Clarify your positioning, service architecture, and buyer objections.",
      "Build reusable page templates across services, case studies, and industry pages.",
      "Ship fast, accessible code with per-page SEO metadata and booking flow.",
    ],
    faqs: [
      {
        question: "How many pages does a business website typically need?",
        answer:
          "Most growing service businesses start with a focused 5–12 page architecture covering Home, Services, Work/Case Studies, About, and Contact — built on reusable templates so you can expand cleanly.",
      },
      {
        question: "Will this help filter out low-budget or poor-fit enquiries?",
        answer:
          "Yes. Clear positioning, explicit Fit / Not a Fit lists, and structured case studies naturally attract stronger clients and discourage bargain-hunting leads.",
      },
      {
        question: "Can you integrate our calendar and CRM?",
        answer:
          "Yes. We connect your enquiry form and scheduling tool (Cal.com, Calendly, HubSpot, or custom webhooks) cleanly without slowing down page load.",
      },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
