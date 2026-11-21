export const SITE = {
  name: "Intent Studios",
  tagline: "We design for conversion, not just for looks.",
  signOff: "Intent is in the Details",
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
    context: "Websites, digital products, brand systems, and AI-led content under one roof.",
  },
  {
    value: "11",
    label: "Case study slots",
    context: "Across fitness, D2C, startups, and service businesses (verified metrics pending).",
    isPlaceholder: true,
  },
  {
    value: "5-stage",
    label: "Structured delivery",
    context: "Discovery through Launch — direct senior execution, zero account-manager relay.",
  },
  {
    value: "15 min",
    label: "Discovery call",
    context: "Clear scope, honest fit check, and a practical next step before you commit.",
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
    title: "Discovery",
    summary: "Audit your current positioning, buyer objections, offer clarity, and technical baseline.",
    timeline: "Days 1–3",
  },
  {
    step: "02",
    title: "Strategy",
    summary: "Lock the site architecture, conversion flow, messaging hierarchy, and visual direction before pixels move.",
    timeline: "Week 1",
  },
  {
    step: "03",
    title: "Design",
    summary: "Craft the visual system, interactive prototypes, and high-contrast compositions built for desktop and mobile.",
    timeline: "Weeks 1–3",
  },
  {
    step: "04",
    title: "Execution",
    summary: "Build production code, refine motion and responsiveness, optimize performance, and produce supporting brand assets.",
    timeline: "Weeks 3–5",
  },
  {
    step: "05",
    title: "Launch",
    summary: "QA across viewports, configure SEO metadata and redirects, deploy cleanly, and hand over a system your team can grow.",
    timeline: "Final week",
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
    question: "What makes Intent Studios different from a freelancer or traditional agency?",
    answer:
      "Freelancers often execute isolated tasks without strategic ownership, while traditional agencies add layers of overhead and slow timelines. Intent Studios gives you senior creative direction, full-stack engineering, and practical AI production workflows in one focused team.",
  },
  {
    question: "How do you use AI in your creative and product workflow?",
    answer:
      "We treat AI as a practical studio instrument — accelerating research synthesis, visual prototyping, and studio-grade content production — while keeping strategy, brand taste, UX architecture, and frontend code firmly human-directed.",
  },
  {
    question: "How long does a typical website or product engagement take?",
    answer:
      "Most focused brand or business websites ship in 3 to 6 weeks from Discovery to Launch. Multi-page e-commerce builds or end-to-end digital products typically run 6 to 10 weeks depending on scope and integrations.",
  },
  {
    question: "Do we need all our copy and photography ready before starting?",
    answer:
      "No. During Discovery and Strategy we map your messaging structure and identify exactly what real assets are needed. Where product or editorial visuals are missing, we can produce art-directed brand imagery as part of the engagement.",
  },
  {
    question: "What happens on the 15-minute discovery call?",
    answer:
      "We listen to where your business is right now, diagnose the biggest conversion or positioning bottleneck, and tell you candidly whether Intent Studios is the right fit — with a clear recommended next step and no hard pitch.",
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
