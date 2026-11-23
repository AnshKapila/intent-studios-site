export const SITE = {
  name: "Intent Studios",
  tagline: "We design for conversion, not just for looks.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://intentstudios.in",
  primaryCta: {
    label: "Book a 15-minute discovery call",
    href: "/contact/",
  },
  secondaryCta: {
    label: "See Our Work",
    href: "/work/",
  },
  contact: {
    email: "hello@intentstudios.example",
    whatsappLabel: "Message on WhatsApp",
    whatsappHref: "https://wa.me/",
    location: "India — Working with teams globally",
  },
  founder: {
    name: "Ansh Kapila",
    role: "Founder & Creative Director, Intent Studios",
    instagram: "https://instagram.com/anshkapila.ux",
    instagramHandle: "@anshkapila.ux",
    linkedin: "https://linkedin.com/in/anshkapila",
    linkedinHandle: "linkedin.com/in/anshkapila",
    shortNote:
      "Most studios hand you a deck and disappear, or build something pretty that never moves revenue. I started Intent Studios to be the thinking partner growing businesses actually need — combining sharp design taste, full-stack execution, and practical AI speed without cutting corners.",
    longStory: [
      "Intent Studios grew out of a gap we kept seeing with ambitious founders: freelancers lacked strategic depth and systems thinking, while traditional agencies moved slowly, inflated retainers, and buried simple decisions under layers of account management.",
      "We built a studio that sits squarely in the middle — senior design and engineering taste, direct founder-level communication, and practical AI workflows that accelerate production without ever replacing human judgement.",
      "Whether we are designing a conversion-focused website, a full product interface, a brand identity, or studio-grade visual content, the standard never shifts: every decision serves your business goal. If an idea works against your own conversion or positioning, we will tell you once, clearly, and show you the better path.",
    ],
  },
  navLinks: [
    { label: "Work", href: "/work/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;

export interface ProofItem {
  value: string;
  label: string;
  context: string;
  isPlaceholder?: boolean;
}

export const HOME_PROOF_BAR: ProofItem[] = [
  {
    value: "4",
    label: "Core disciplines",
    context: "Websites, digital products, brand systems, and AI-led content.",
  },
  {
    value: "11",
    label: "Published case studies",
    context: "Spanning fitness, D2C, startups, and service businesses.",
  },
  {
    value: "5 stages",
    label: "Structured delivery",
    context: "Discovery through Launch with direct senior execution.",
  },
  {
    value: "15 min",
    label: "Discovery call",
    context: "Honest fit check and a practical next step before you commit.",
  },
];

export const BUYER_FRUSTRATIONS = [
  {
    quote: "“I want something different from what’s already out there.”",
    context: "Tired of cookie-cutter templates that look identical to every competitor in the category.",
  },
  {
    quote: "“I need this to look as good as a real photo shoot.”",
    context: "Needing studio-grade product and brand visuals without five-figure production delays.",
  },
  {
    quote: "“I just want someone who gets it without me having to explain everything twice.”",
    context: "Done managing unreliable freelancers or chasing endless revision threads.",
  },
  {
    quote: "“I don’t know how to build trust with my audience.”",
    context: "Having a strong offer offline, while an outdated website quietly loses buyers online.",
  },
] as const;

export const WHAT_WE_ARE_NOT = [
  {
    title: "Not a cheap solution",
    body: "Our pricing reflects the strategy, design craft, and engineering behind the work. We do not race to the bottom.",
  },
  {
    title: "Not a shortcut factory",
    body: "We use AI where it genuinely elevates quality and speed — never to force your brand into compromises.",
  },
  {
    title: "Not order-takers",
    body: "If a requested direction works against your conversion or positioning, we say so clearly and propose the better path.",
  },
] as const;

export const PROCESS_STAGES = [
  {
    step: "01",
    title: "Discovery & audit",
    summary:
      "We audit your positioning, buyer objections, offer clarity, and technical baseline so nothing is built on guesswork.",
    timeline: "Days 1–3",
    milestone: "Scope & positioning locked",
  },
  {
    step: "02",
    title: "Strategy & architecture",
    summary:
      "We lock site structure, conversion hierarchy, messaging flow, and visual direction before a single pixel moves.",
    timeline: "Week 1",
    milestone: "Wireframes & conversion map",
  },
  {
    step: "03",
    title: "Design & craft",
    summary:
      "We craft high-contrast interfaces, interactive prototypes, brand systems, and art-directed AI visuals built for desktop and mobile.",
    timeline: "Weeks 1–3",
    milestone: "Interactive design system",
  },
  {
    step: "04",
    title: "Build & launch",
    summary:
      "We engineer production code, refine motion and performance, configure SEO, and hand over a system your team can grow.",
    timeline: "Weeks 3–5",
    milestone: "Live production launch",
  },
] as const;

export const HOME_FIT_LIST = {
  bestFit: [
    "Early-stage startups and growing businesses ready to be taken seriously in their market.",
    "Founders who want a thinking partner rather than a vendor waiting for instructions.",
    "D2C, fitness, wellness, and service brands whose digital presence lags behind their actual quality.",
    "Teams that value direct communication, clear milestones, and conversion-focused craft.",
  ],
  notAFit: [
    "Businesses shopping strictly for the cheapest template or fastest overnight turnaround.",
    "Projects looking for blind execution without questioning messaging, UX, or positioning.",
    "Teams expecting generic AI-generated fluff instead of art-directed, business-ready work.",
    "Engagements without a clear decision-maker available during strategy and review checkpoints.",
  ],
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: "What can Intent Studios help me with?",
    answer:
      "We bring together Website Design & Build, Product & App Design, Brand Identity, and Content & Social. Start with one focused need, or connect the pieces into a more considered whole.",
  },
  {
    question: "Who do you work best with?",
    answer:
      "Early-stage startups, growing businesses, D2C and product brands, fitness studios, and service founders who sit between generic freelancers and slow traditional agencies — and want a capable creative and technical partner.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project starts with the scope. We define the priorities, page depth, and technical requirements during our 15-minute discovery call, then send a clear fixed-scope proposal with milestones and timeline.",
  },
  {
    question: "How do you use AI in your work?",
    answer:
      "AI supports exploration and execution — accelerating research synthesis, prototyping, and art-directed visual production. Strategy, creative direction, UX architecture, and frontend engineering stay human-led.",
  },
  {
    question: "What happens after the discovery call?",
    answer:
      "We clarify your goals, discuss the core conversion or positioning problem, and decide honestly whether Intent Studios is the right fit. If we move forward, you receive a structured scope and timeline within 48 hours.",
  },
];

export const STUDIO_PRINCIPLES = [
  {
    number: "01",
    title: "Conversion before decoration",
    body: "A memorable visual language only works when a first-time visitor understands what you do, trusts your credibility, and knows what action to take in seconds.",
  },
  {
    number: "02",
    title: "Practical innovation over hype",
    body: "We adopt modern engineering and AI workflows because they let small, focused teams ship sharper work faster — never as buzzwords.",
  },
  {
    number: "03",
    title: "Honest partnership",
    body: "We listen first, then lead. If a feature, layout, or campaign idea works against your goals, we say it directly and offer a stronger alternative.",
  },
] as const;
