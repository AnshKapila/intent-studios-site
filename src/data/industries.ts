import type { FaqItem, ProofItem } from "./site";
import type { ServiceSlug } from "./services";

export interface IndustryPageData {
  slug: "fitness-wellness" | "d2c-brands";
  href: string;
  name: string;
  shortDesc: string;
  h1: string;
  intro: string;
  problems: { quote: string; explanation: string }[];
  proofBar: ProofItem[];
  serviceSlugs: ServiceSlug[];
  clientQuote: {
    quote: string;
    name: string;
    role: string;
    company: string;
    credibilityLine: string;
    isPlaceholder: true;
  };
  faqs: FaqItem[];
}

export const INDUSTRIES: IndustryPageData[] = [
  {
    slug: "fitness-wellness",
    href: "/who-we-help/fitness-wellness/",
    name: "Fitness & Wellness",
    shortDesc: "Performance gyms, boutique studios, recovery clubs, and wellness brands turning local attention into booked members.",
    h1: "Digital presence and product experiences built for fitness & wellness brands.",
    intro:
      "When your studio, coaching, or recovery space feels premium in person, a generic website or clunky booking flow quietly costs you high-value members every week.",
    problems: [
      {
        quote: "“Our space looks incredible in person, but our website feels like a 2016 gym template.”",
        explanation: "First-time visitors judge coaching quality and atmosphere in seconds before ever booking a trial.",
      },
      {
        quote: "“People click from Instagram and drop off before finishing a trial booking.”",
        explanation: "Mobile friction, slow pages, and unclear membership structure kill warm social traffic.",
      },
      {
        quote: "“Our brand, schedule pages, and social feed look like three different businesses.”",
        explanation: "Disconnected templates weaken perceived authority and force you to compete on price.",
      },
    ],
    proofBar: [
      { value: "3", label: "Fitness & wellness slots", context: "Across performance gyms, boutique studios, and recovery clubs.", isPlaceholder: true },
      { value: "Mobile-first", label: "Booking architecture", context: "Engineered for Instagram-to-trial conversion on phones." },
      { value: "3–5 wks", label: "Typical launch", context: "Focused sprint from positioning to live booking site." },
    ],
    serviceSlugs: ["website-design", "brand-identity", "product-design"],
    clientQuote: {
      quote: "Industry client quote placeholder — awaiting verified fitness & wellness founder quote.",
      name: "Verified Fitness Founder [Pending]",
      role: "Founder",
      company: "Fitness & Wellness Partner",
      credibilityLine: "Fitness & Wellness · Intent Studios",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Can you integrate Mindbody, Glofox, Momence, or custom trial forms?",
        answer:
          "Yes. We design clean front-end entry points that connect cleanly to your studio booking software or lead-capture CRM without slow, broken iframes.",
      },
      {
        question: "Do you work with single-location boutique studios or multi-location brands?",
        answer:
          "Both. We structure the site architecture so a single flagship studio can expand cleanly into multiple locations or digital programs later.",
      },
      {
        question: "Can you refresh our brand identity and website together?",
        answer:
          "Yes. Pairing Brand Identity with Website Design & Build ensures your typography, photography direction, and booking flow feel unmistakably cohesive.",
      },
    ],
  },
  {
    slug: "d2c-brands",
    href: "/who-we-help/d2c-brands/",
    name: "D2C & Product Brands",
    shortDesc: "Consumer product brands upgrading storefronts, packaging identities, and studio-grade campaign visuals.",
    h1: "Storefronts, brand systems, and campaign visuals built for D2C product brands.",
    intro:
      "Paid acquisition is too expensive to send traffic to a generic storefront. We help product founders build distinct visual worlds and fast, conversion-focused buying experiences.",
    problems: [
      {
        quote: "“We look too similar to every other brand running ads in our category.”",
        explanation: "When your identity and store blend in, shoppers default to comparing price instead of value.",
      },
      {
        quote: "“Every new SKU launch gets delayed waiting for expensive physical photo shoots.”",
        explanation: "Art-directed AI-led product staging bridges the gap between launches without lowering visual standards.",
      },
      {
        quote: "“Traffic lands on our product pages, scrolls, and leaves without adding to cart.”",
        explanation: "Weak hierarchy, slow mobile imagery, and buried proof create hesitation right at the buy button.",
      },
    ],
    proofBar: [
      { value: "3", label: "D2C & product slots", context: "Spanning storefronts, packaging systems, and product shoots.", isPlaceholder: true },
      { value: "PDP-first", label: "Conversion focus", context: "Built around mobile add-to-cart clarity and fast load times." },
      { value: "Web + Visuals", label: "Unified craft", context: "Storefront, identity, and campaign scenes under one direction." },
    ],
    serviceSlugs: ["website-design", "brand-identity", "content-social"],
    clientQuote: {
      quote: "Industry client quote placeholder — awaiting verified D2C founder quote.",
      name: "Verified D2C Founder [Pending]",
      role: "Co-Founder",
      company: "D2C Brand Partner",
      credibilityLine: "D2C & Product Brands · Intent Studios",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Do you build custom Shopify storefronts?",
        answer:
          "Yes. We design and engineer bespoke Shopify and headless Next.js storefronts focused on mobile speed, clear product storytelling, and clean checkout paths.",
      },
      {
        question: "How do AI-led product shoots work with our physical product?",
        answer:
          "We work from clean reference photos of your real packaging or hardware, then art-direct lighting, surfaces, and editorial compositions so your actual product stays accurate and brand-consistent.",
      },
      {
        question: "Can we start with a single product launch kit before a full site rebuild?",
        answer:
          "Yes. Many D2C founders start with a Brand Identity refresh or Content & Social launch kit, then roll directly into a full storefront build.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
