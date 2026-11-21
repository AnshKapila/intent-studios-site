import type { ServiceSlug } from "./services";

export type IndustrySlug =
  | "fitness-wellness"
  | "d2c-brands"
  | "startups-saas"
  | "professional-services";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  outcomeTitle: string;
  clientLabel: string;
  isPlaceholder: true;
  featured: boolean;
  serviceSlug: ServiceSlug;
  serviceName: string;
  industrySlug: IndustrySlug;
  industryLabel: string;
  tags: string[];
  role: string;
  timeline: string;
  liveUrl?: string;
  atAGlance: {
    client: string;
    whatWeDid: string;
    time: string;
    result: string;
  };
  situation: string;
  decisions: string[];
  whatWeMade: {
    label: string;
    description: string;
  }[];
  resultDetail: string;
  clientQuote: {
    quote: string;
    name: string;
    role: string;
    company: string;
    credibilityLine: string;
    isPlaceholder: true;
  };
  underTheHood: {
    stack: string[];
    architectureNotes: string[];
  };
  visualTheme: {
    accent: string;
    surface: string;
    layout: "browser" | "mobile" | "editorial" | "product";
  };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "ironform-athletics",
    title: "Ironform Athletics",
    outcomeTitle: "Conversion-led digital flagship & member booking experience for a performance gym",
    clientLabel: "Featured Case Study Slot 01 — Fitness & Wellness",
    isPlaceholder: true,
    featured: true,
    serviceSlug: "website-design",
    serviceName: "Website Design & Build",
    industrySlug: "fitness-wellness",
    industryLabel: "Fitness & Wellness",
    tags: ["Website Design & Build", "Fitness & Wellness", "Conversion UX"],
    role: "Strategy, UX Architecture, Visual Design & Full-Stack Build",
    timeline: "4 weeks [Placeholder]",
    atAGlance: {
      client: "Ironform Athletics [Placeholder Slot — replace with verified client]",
      whatWeDid: "Positioning, custom dark-first website, trial booking flow",
      time: "4 weeks [Placeholder]",
      result: "Pending verified conversion metric — see CONTENT-REQUIREMENTS.md",
    },
    situation:
      "Strength and conditioning studios often lose high-intent local prospects to slow, cluttered sites that bury class schedules, coaching credentials, and trial booking behind confusing menus.",
    decisions: [
      "Anchored the hero on a clear local value proposition and single primary trial-booking action.",
      "Replaced generic stock gym imagery with structured high-contrast coaching and facility showcases.",
      "Built a frictionless mobile-first booking flow that answers pricing and schedule doubts before the call.",
    ],
    whatWeMade: [
      { label: "Homepage & Positioning System", description: "Dark architectural layout with immediate facility proof and trial CTA." },
      { label: "Program & Membership Architecture", description: "Clear side-by-side comparison of coaching tiers without cognitive overload." },
      { label: "Mobile-First Trial Flow", description: "Two-step enquiry and calendar handoff tuned for 390px mobile screens." },
    ],
    resultDetail:
      "Verified post-launch metrics (trial bookings, conversion lift, and page speed delta) will be added here once confirmed with the client.",
    clientQuote: {
      quote: "Client quote placeholder — awaiting verified founder or client testimonial for Featured Project 01.",
      name: "Verified Client Name [Pending]",
      role: "Founder",
      company: "Featured Fitness Client",
      credibilityLine: "Website Design & Build · Fitness & Wellness",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      architectureNotes: [
        "Static generation for sub-second initial load on mobile networks.",
        "Accessible keyboard navigation and WCAG AA contrast across all dark surfaces.",
        "Structured local business schema and per-page canonical URLs.",
      ],
    },
    visualTheme: { accent: "#F24E1E", surface: "#141211", layout: "browser" },
  },
  {
    slug: "kora-botanicals",
    title: "Kora Botanicals",
    outcomeTitle: "Editorial D2C storefront & art-directed product visual system",
    clientLabel: "Featured Case Study Slot 02 — D2C & Product Brands",
    isPlaceholder: true,
    featured: true,
    serviceSlug: "website-design",
    serviceName: "Website Design & Build",
    industrySlug: "d2c-brands",
    industryLabel: "D2C & Product Brands",
    tags: ["E-commerce", "D2C & Product Brands", "Content & Social"],
    role: "Storefront UX, E-commerce Build & AI-Led Product Staging",
    timeline: "5 weeks [Placeholder]",
    atAGlance: {
      client: "Kora Botanicals [Placeholder Slot — replace with verified client]",
      whatWeDid: "Custom D2C e-commerce architecture, PDP redesign, product visual kit",
      time: "5 weeks [Placeholder]",
      result: "Pending verified AOV / checkout conversion metric — see CONTENT-REQUIREMENTS.md",
    },
    situation:
      "Growing D2C brands frequently outgrow off-the-shelf themes: product pages feel crowded, mobile add-to-cart friction hurts paid traffic ROI, and visual consistency breaks across SKUs.",
    decisions: [
      "Redesigned the product detail page so ingredient clarity, usage, and shipping expectations sit above the fold.",
      "Paired warm alabaster editorial sections with dark high-contrast hero frames for premium product framing.",
      "Produced cohesive art-directed product staging across hero banners and collection cards.",
    ],
    whatWeMade: [
      { label: "Custom Collection & PDP Templates", description: "Editorial merchandising engineered for fast mobile browsing." },
      { label: "Slide-Out Cart & Bundle Logic", description: "Frictionless cart drawer with clear shipping threshold feedback." },
      { label: "Campaign Visual System", description: "Coordinated hero and social visuals matching storefront lighting." },
    ],
    resultDetail:
      "Verified storefront metrics (conversion rate, mobile load time, and repeat order lift) will populate once client approval is finalized.",
    clientQuote: {
      quote: "Client quote placeholder — awaiting verified client testimonial for Featured Project 02.",
      name: "Verified Client Name [Pending]",
      role: "Co-Founder",
      company: "Featured D2C Brand",
      credibilityLine: "E-commerce & Visual Direction · D2C",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Shopify / Next.js", "TypeScript", "Tailwind CSS", "Responsive Media Pipeline"],
      architectureNotes: [
        "AVIF/WebP image optimization with strict aspect-ratio locking to prevent CLS.",
        "Clean URL structure with 301 redirect map preserving legacy collection rankings.",
      ],
    },
    visualTheme: { accent: "#F24E1E", surface: "#171412", layout: "product" },
  },
  {
    slug: "pulseflow-os",
    title: "Pulseflow OS",
    outcomeTitle: "Zero-to-one product interface & tokenized design system for an AI workflow platform",
    clientLabel: "Featured Case Study Slot 03 — Startups & SaaS",
    isPlaceholder: true,
    featured: true,
    serviceSlug: "product-design",
    serviceName: "Product & App Design",
    industrySlug: "startups-saas",
    industryLabel: "Startups & SaaS",
    tags: ["Product & App Design", "Design System", "SaaS"],
    role: "Product UX, Design System Architecture & Frontend UI",
    timeline: "6 weeks [Placeholder]",
    atAGlance: {
      client: "Pulseflow OS [Placeholder Slot — replace with verified client]",
      whatWeDid: "Core app UX, interactive prototypes, 3-layer token design system",
      time: "6 weeks [Placeholder]",
      result: "Pending verified activation / onboarding metric — see CONTENT-REQUIREMENTS.md",
    },
    situation:
      "Technical founders often ship powerful backend capabilities wrapped in confusing interfaces that overwhelm first-time users and slow down enterprise sales demos.",
    decisions: [
      "Collapsed a 7-step setup into a guided 3-step onboarding flow with live preview states.",
      "Built a dark-first tokenized component system so engineers could ship new views without design drift.",
      "Designed explicit loading, empty, and validation states for every core workflow.",
    ],
    whatWeMade: [
      { label: "Core Workspace & Navigation", description: "Calm, high-density workspace with keyboard-first shortcuts." },
      { label: "Three-Layer Token System", description: "Primitive, semantic, and component variables synced to Tailwind." },
      { label: "Interactive Demo Prototype", description: "Investor- and sales-ready clickable product flow." },
    ],
    resultDetail:
      "Verified activation, demo-to-trial conversion, and engineering velocity metrics will be added once confirmed.",
    clientQuote: {
      quote: "Client quote placeholder — awaiting verified client testimonial for Featured Project 03.",
      name: "Verified Client Name [Pending]",
      role: "Founder & CEO",
      company: "Featured SaaS Client",
      credibilityLine: "Product & App Design · SaaS",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["React", "TypeScript", "Design Tokens", "Accessible Primitives"],
      architectureNotes: [
        "Strict keyboard focus management and ARIA live regions for asynchronous job updates.",
        "Tabular numeric alignment for analytics tables and operational metrics.",
      ],
    },
    visualTheme: { accent: "#F24E1E", surface: "#0E1014", layout: "mobile" },
  },
  {
    slug: "sola-pilates-club",
    title: "Sola Pilates Club",
    outcomeTitle: "Brand identity & class booking website for a boutique wellness studio",
    clientLabel: "Case Study Slot 04 — Fitness & Wellness",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "brand-identity",
    serviceName: "Brand Identity",
    industrySlug: "fitness-wellness",
    industryLabel: "Fitness & Wellness",
    tags: ["Brand Identity", "Fitness & Wellness", "Website"],
    role: "Brand System, Typography & Digital Presence",
    timeline: "3 weeks [Placeholder]",
    atAGlance: {
      client: "Sola Pilates Club [Placeholder Slot]",
      whatWeDid: "Complete brand identity system and studio launch website",
      time: "3 weeks [Placeholder]",
      result: "Pending verified launch metric",
    },
    situation:
      "Boutique movement studios compete on atmosphere and trust; a generic Canva identity undermines premium membership pricing before a prospective member ever visits.",
    decisions: [
      "Crafted a restrained typographic wordmark paired with warm stone and charcoal surfaces.",
      "Built reusable social and studio signage guidelines alongside the digital booking site.",
    ],
    whatWeMade: [
      { label: "Identity & Brand Guide", description: "Wordmark, monogram, palette, and digital usage rules." },
      { label: "Studio Launch Site", description: "Fast mobile schedule overview and direct intro-pack booking." },
    ],
    resultDetail: "Verified membership launch metrics pending client confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Studio Director",
      company: "Wellness Client",
      credibilityLine: "Brand Identity · Fitness & Wellness",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Figma Brand System", "Next.js", "Tailwind CSS"],
      architectureNotes: ["Unified token mapping between print collateral and digital web surfaces."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#151413", layout: "editorial" },
  },
  {
    slug: "apex-recovery-lab",
    title: "Apex Recovery Lab",
    outcomeTitle: "Performance wellness app UX & member retention flows",
    clientLabel: "Case Study Slot 05 — Fitness & Wellness",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "product-design",
    serviceName: "Product & App Design",
    industrySlug: "fitness-wellness",
    industryLabel: "Fitness & Wellness",
    tags: ["Product & App Design", "Fitness & Wellness", "Mobile UX"],
    role: "Mobile App UI/UX & Interactive Prototyping",
    timeline: "5 weeks [Placeholder]",
    atAGlance: {
      client: "Apex Recovery Lab [Placeholder Slot]",
      whatWeDid: "Member booking, recovery protocol tracking, and session check-in UI",
      time: "5 weeks [Placeholder]",
      result: "Pending verified retention metric",
    },
    situation:
      "Recovery clinics using clunky third-party booking widgets see high drop-off on repeat session bookings and membership upgrades.",
    decisions: [
      "Designed a 2-tap session rebooking flow tailored for one-handed mobile use.",
      "Structured visual recovery logs so members see clear consistency over time.",
    ],
    whatWeMade: [
      { label: "Mobile Member App UI", description: "Booking, protocol tracker, and credit balance views." },
      { label: "Component Library", description: "Dark-mode native-ready UI tokens and touch-safe controls." },
    ],
    resultDetail: "Verified repeat-booking metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Co-Founder",
      company: "Recovery Wellness Client",
      credibilityLine: "Product & App Design · Fitness & Wellness",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["React Native / Web UI Spec", "Design Tokens", "Interactive Prototype"],
      architectureNotes: ["44px+ minimum touch targets across every booking and calendar control."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#111214", layout: "mobile" },
  },
  {
    slug: "meridian-gear",
    title: "Meridian Gear",
    outcomeTitle: "High-contrast D2C product launch & AI-led editorial shoot",
    clientLabel: "Case Study Slot 06 — D2C & Product Brands",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "content-social",
    serviceName: "Content & Social",
    industrySlug: "d2c-brands",
    industryLabel: "D2C & Product Brands",
    tags: ["Content & Social", "D2C & Product Brands", "Launch Campaign"],
    role: "Art Direction, AI-Led Product Shoots & Social Launch Kit",
    timeline: "2 weeks [Placeholder]",
    atAGlance: {
      client: "Meridian Gear [Placeholder Slot]",
      whatWeDid: "Product campaign scenes, web hero visuals, and social launch formats",
      time: "2 weeks [Placeholder]",
      result: "Pending verified campaign metric",
    },
    situation:
      "Launching multiple SKUs across environments traditionally requires costly location shoots that delay product drops by months.",
    decisions: [
      "Established a strict dark-studio lighting grammar so every SKU feels photographed on the same set.",
      "Delivered web hero crops, 4:5 social carousels, and 9:16 vertical launch frames in one coordinated kit.",
    ],
    whatWeMade: [
      { label: "Product Campaign Scenes", description: "Art-directed architectural environments for 8 hero SKUs." },
      { label: "Social Launch System", description: "Reusable Instagram and LinkedIn visual templates." },
    ],
    resultDetail: "Verified launch engagement and conversion metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Brand Lead",
      company: "D2C Hardware Client",
      credibilityLine: "Content & Social · D2C & Product Brands",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Art Direction Pipeline", "Color Grading", "Multi-Aspect Export System"],
      architectureNotes: ["Consistent color grading and grain calibration across all campaign deliverables."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#12100F", layout: "product" },
  },
  {
    slug: "velour-roast",
    title: "Velour Roast",
    outcomeTitle: "Brand identity & packaging visual system for a specialty D2C coffee brand",
    clientLabel: "Case Study Slot 07 — D2C & Product Brands",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "brand-identity",
    serviceName: "Brand Identity",
    industrySlug: "d2c-brands",
    industryLabel: "D2C & Product Brands",
    tags: ["Brand Identity", "D2C & Product Brands", "Packaging"],
    role: "Identity System, Packaging Direction & Launch Visuals",
    timeline: "3 weeks [Placeholder]",
    atAGlance: {
      client: "Velour Roast [Placeholder Slot]",
      whatWeDid: "Logo system, roast tier visual coding, and D2C brand guidelines",
      time: "3 weeks [Placeholder]",
      result: "Pending verified retail/D2C launch metric",
    },
    situation:
      "Specialty consumer goods fight for instant shelf and feed recognition; crowded labels fail to communicate craft at thumbnail size.",
    decisions: [
      "Built a clean typographic grid system that scales from 250g bags to mobile product cards.",
      "Paired restrained color coding with bold contrast for instant roast differentiation.",
    ],
    whatWeMade: [
      { label: "Core Brand Identity", description: "Wordmark, label architecture, and typographic rules." },
      { label: "Digital & Packaging Mockups", description: "Cohesive visual assets ready for e-commerce launch." },
    ],
    resultDetail: "Verified launch metrics pending client confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Founder",
      company: "D2C Consumer Brand",
      credibilityLine: "Brand Identity · D2C & Product Brands",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Brand System", "Vector Assets", "Digital Style Guide"],
      architectureNotes: ["Tested at both physical packaging scale and 390px mobile e-commerce grid scale."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#161311", layout: "editorial" },
  },
  {
    slug: "northline-advisory",
    title: "Northline Advisory",
    outcomeTitle: "Authority business website & lead-qualification architecture",
    clientLabel: "Case Study Slot 08 — Professional Services",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "website-design",
    serviceName: "Website Design & Build",
    industrySlug: "professional-services",
    industryLabel: "Professional Services",
    tags: ["Business Website", "Professional Services", "Lead Gen"],
    role: "Positioning, UX Architecture & Full-Stack Build",
    timeline: "4 weeks [Placeholder]",
    atAGlance: {
      client: "Northline Advisory [Placeholder Slot]",
      whatWeDid: "Service architecture, case study templates, and discovery booking flow",
      time: "4 weeks [Placeholder]",
      result: "Pending verified inbound lead metric",
    },
    situation:
      "High-trust advisory firms rely on referrals, yet referred prospects always inspect the website before booking — an outdated site quietly erodes fee authority.",
    decisions: [
      "Replaced corporate jargon with direct service outcomes and transparent engagement structure.",
      "Structured individual case studies with clear situation-decision-result storytelling.",
    ],
    whatWeMade: [
      { label: "Multi-Page Service Architecture", description: "Dedicated pages for each advisory pillar." },
      { label: "Brief Qualification Flow", description: "Streamlined enquiry form paired with calendar handoff." },
    ],
    resultDetail: "Verified enquiry quality and conversion metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Managing Partner",
      company: "Advisory Client",
      credibilityLine: "Website Design & Build · Professional Services",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      architectureNotes: ["Individual canonical URLs, clean heading hierarchy, and fast static delivery."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#111111", layout: "browser" },
  },
  {
    slug: "strata-realty",
    title: "Strata Living",
    outcomeTitle: "Architectural web presence & editorial content system for a lifestyle property brand",
    clientLabel: "Case Study Slot 09 — Real Estate & Lifestyle",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "website-design",
    serviceName: "Website Design & Build",
    industrySlug: "professional-services",
    industryLabel: "Real Estate & Lifestyle",
    tags: ["Website Design & Build", "Real Estate", "Editorial"],
    role: "Visual Direction, Property Showcase UX & Frontend Build",
    timeline: "5 weeks [Placeholder]",
    atAGlance: {
      client: "Strata Living [Placeholder Slot]",
      whatWeDid: "Property showcase architecture, private viewing booking, editorial system",
      time: "5 weeks [Placeholder]",
      result: "Pending verified viewing request metric",
    },
    situation:
      "Luxury and lifestyle developments often bury architectural photography inside bloated portals that feel generic and sluggish on mobile.",
    decisions: [
      "Built full-bleed architectural galleries paired with concise specification tables.",
      "Simplified private viewing requests into a single clean flow.",
    ],
    whatWeMade: [
      { label: "Editorial Property Showcase", description: "Image-forward layout with controlled dark contrast." },
      { label: "Private Inquiry System", description: "Direct lead capture with instant response expectations." },
    ],
    resultDetail: "Verified viewing request metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Director",
      company: "Lifestyle Property Client",
      credibilityLine: "Website Design & Build · Real Estate & Lifestyle",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Next.js", "Responsive Image Pipeline", "Framer Motion"],
      architectureNotes: ["Lazy-loaded below-fold galleries with explicit aspect ratios for zero layout shift."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#121212", layout: "editorial" },
  },
  {
    slug: "vector-ledger",
    title: "Vector Ledger",
    outcomeTitle: "Dashboard UX overhaul & brand refresh for a B2B SaaS startup",
    clientLabel: "Case Study Slot 10 — Startups & SaaS",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "product-design",
    serviceName: "Product & App Design",
    industrySlug: "startups-saas",
    industryLabel: "Startups & SaaS",
    tags: ["Product & App Design", "SaaS", "Dashboard UX"],
    role: "UX Audit, Interface Redesign & Component Specs",
    timeline: "5 weeks [Placeholder]",
    atAGlance: {
      client: "Vector Ledger [Placeholder Slot]",
      whatWeDid: "Core financial workflow redesign and unified component library",
      time: "5 weeks [Placeholder]",
      result: "Pending verified task-completion metric",
    },
    situation:
      "Dense B2B dashboards accumulate visual noise over rapid sprint cycles, making daily workflows tiring and error-prone.",
    decisions: [
      "Standardized tabular numeric hierarchy and subtle elevation contrast to surface key actions.",
      "Reduced primary navigation complexity and added keyboard-accessible command flows.",
    ],
    whatWeMade: [
      { label: "Redesigned Core Views", description: "Overview, ledger tables, and approval drawers." },
      { label: "Engineering-Ready Specs", description: "Documented interactive states and spacing tokens." },
    ],
    resultDetail: "Verified usability and adoption metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Head of Product",
      company: "B2B SaaS Client",
      credibilityLine: "Product & App Design · Startups & SaaS",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["React", "TypeScript", "Design Tokens"],
      architectureNotes: ["Accessible table semantics, focus management, and high-contrast status tokens."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#0E0F12", layout: "browser" },
  },
  {
    slug: "atelier-monolith",
    title: "Atelier Monolith",
    outcomeTitle: "Visual campaign & social design system for an independent creator brand",
    clientLabel: "Case Study Slot 11 — Creators & Entrepreneurs",
    isPlaceholder: true,
    featured: false,
    serviceSlug: "content-social",
    serviceName: "Content & Social",
    industrySlug: "startups-saas",
    industryLabel: "Creators & Entrepreneurs",
    tags: ["Content & Social", "Brand System", "Creator"],
    role: "Visual Direction, Social System & Content Production",
    timeline: "2 weeks [Placeholder]",
    atAGlance: {
      client: "Atelier Monolith [Placeholder Slot]",
      whatWeDid: "Repeatable social carousel architecture and launch visual kit",
      time: "2 weeks [Placeholder]",
      result: "Pending verified audience growth metric",
    },
    situation:
      "Independent creators and founder-led brands need a distinctive, repeatable visual format so every post builds recognition rather than looking improvised.",
    decisions: [
      "Created a disciplined dark/light carousel rhythm with clear typography and minimal clutter.",
      "Delivered modular templates that cut weekly content production time significantly.",
    ],
    whatWeMade: [
      { label: "Social Carousel System", description: "Structured 4:5 and 9:16 editorial layouts." },
      { label: "Launch Visual Kit", description: "Cohesive announcement graphics and art-directed backgrounds." },
    ],
    resultDetail: "Verified engagement and inbound enquiry metrics pending confirmation.",
    clientQuote: {
      quote: "Client quote placeholder — pending verified testimonial.",
      name: "Verified Client Name [Pending]",
      role: "Founder",
      company: "Creator Brand Client",
      credibilityLine: "Content & Social · Creators & Entrepreneurs",
      isPlaceholder: true,
    },
    underTheHood: {
      stack: ["Visual System", "Figma Templates", "Brand Guidelines"],
      architectureNotes: ["Strict 14px minimum legibility rules and safe-zone margins across mobile feeds."],
    },
    visualTheme: { accent: "#F24E1E", surface: "#131110", layout: "editorial" },
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectsByService(serviceSlug: ServiceSlug): ProjectCaseStudy[] {
  return PROJECTS.filter((p) => p.serviceSlug === serviceSlug);
}

export function getProjectsByIndustry(industrySlug: IndustrySlug): ProjectCaseStudy[] {
  return PROJECTS.filter((p) => p.industrySlug === industrySlug);
}
