"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemMessage {
  id: string;
  align: "left" | "right";
  initials: string;
  avatarBg: string;
  avatarText: string;
  role: string;
  topic: string;
  quotePrefix: string;
  highlight: string;
  highlightBg: string;
  quoteSuffix: string;
  reactions: {
    id: string;
    symbol: string;
    count: number;
  }[];
}

const PROBLEM_MESSAGES: ProblemMessage[] = [
  {
    id: "website-conversion",
    align: "left",
    initials: "B2",
    avatarBg: "#E6EEF7",
    avatarText: "#1E3A5F",
    role: "Founder, B2B SaaS",
    topic: "Website & Conversion",
    quotePrefix: "“People only get what we do once they get on a call. Our site looks fine, ",
    highlight: "it just doesn’t turn visitors into booked demos.",
    highlightBg: "#DDEEFF",
    quoteSuffix: "”",
    reactions: [
      { id: "r1", symbol: "+", count: 14 },
      { id: "r2", symbol: "↑", count: 6 },
    ],
  },
  {
    id: "funnel-architecture",
    align: "right",
    initials: "D2",
    avatarBg: "#FCEBE5",
    avatarText: "#8C2B0E",
    role: "Growth Lead, D2C Brand",
    topic: "Funnel Architecture",
    quotePrefix: "“We’re paying for traffic that lands, scrolls five seconds, and bounces. ",
    highlight: "There’s no clear story guiding them from click to checkout.",
    highlightBg: "#FFD8CB",
    quoteSuffix: "”",
    reactions: [
      { id: "r3", symbol: "+", count: 11 },
      { id: "r4", symbol: "↑", count: 8 },
    ],
  },
  {
    id: "product-app",
    align: "left",
    initials: "PA",
    avatarBg: "#EBF4E2",
    avatarText: "#2D4F18",
    role: "Product Lead, Wellness App",
    topic: "Product & App Design",
    quotePrefix: "“Users sign up, poke around onboarding, and ",
    highlight: "drop off before they ever see what the product can do.",
    highlightBg: "#DFF0C8",
    quoteSuffix: "”",
    reactions: [
      { id: "r5", symbol: "+", count: 12 },
      { id: "r6", symbol: "↑", count: 5 },
    ],
  },
  {
    id: "brand-identity",
    align: "right",
    initials: "BR",
    avatarBg: "#FAF2DA",
    avatarText: "#6B4E0B",
    role: "Co-founder, Consumer Brand",
    topic: "Brand Identity",
    quotePrefix: "“Put us next to five competitors and you couldn’t tell us apart. Our logo, site, and decks ",
    highlight: "feel like three completely different companies.",
    highlightBg: "#FFF0BA",
    quoteSuffix: "”",
    reactions: [
      { id: "r7", symbol: "+", count: 10 },
      { id: "r8", symbol: "↑", count: 7 },
    ],
  },
  {
    id: "ai-content",
    align: "left",
    initials: "AI",
    avatarBg: "#EFE9FB",
    avatarText: "#472A7A",
    role: "Marketing Head, Fitness Brand",
    topic: "AI Content & Visuals",
    quotePrefix: "“Studio shoots take six weeks and five figures — but ",
    highlight: "generic AI visuals look synthetic and hurt our credibility.",
    highlightBg: "#EAE2FF",
    quoteSuffix: "”",
    reactions: [
      { id: "r9", symbol: "+", count: 13 },
      { id: "r10", symbol: "↑", count: 6 },
    ],
  },
  {
    id: "social-content",
    align: "right",
    initials: "SM",
    avatarBg: "#E5F3F1",
    avatarText: "#165049",
    role: "Founder, Coaching & Media",
    topic: "Social & Content Systems",
    quotePrefix: "“We post every week, yet ",
    highlight: "nothing connects our social attention back to our actual offer.",
    highlightBg: "#D6F2EE",
    quoteSuffix: "”",
    reactions: [
      { id: "r11", symbol: "+", count: 9 },
      { id: "r12", symbol: "↑", count: 5 },
    ],
  },
  {
    id: "studio-execution",
    align: "left",
    initials: "EX",
    avatarBg: "#F3EFEA",
    avatarText: "#3D3832",
    role: "COO, Series A Startup",
    topic: "Design Studio vs. Agencies",
    quotePrefix: "“Freelancers need constant hand-holding and agencies take three months to ship a page. We need ",
    highlight: "senior craft and strategy at startup speed.",
    highlightBg: "#FFD8CB",
    quoteSuffix: "”",
    reactions: [
      { id: "r13", symbol: "+", count: 15 },
      { id: "r14", symbol: "↑", count: 9 },
    ],
  },
];

function MessageRow({
  item,
  likedMap,
  onToggleReaction,
}: {
  item: ProblemMessage;
  likedMap: Record<string, boolean>;
  onToggleReaction: (reactionId: string) => void;
}) {
  const isRight = item.align === "right";

  return (
    <div
      className={cn(
        "flex items-start gap-3",
        isRight ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Minimalist circular avatar */}
      <div
        aria-hidden="true"
        style={{ backgroundColor: item.avatarBg, color: item.avatarText }}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#111111]/10 text-[11px] font-semibold tracking-[-0.02em] select-none"
      >
        {item.initials}
      </div>

      {/* Bubble + Reaction bar */}
      <div
        className={cn(
          "flex max-w-[500px] flex-col",
          isRight ? "items-end" : "items-start"
        )}
      >
        <div className="w-full rounded-[4px] border border-[#111111]/12 bg-white px-5 py-4 transition-colors duration-200 hover:border-[#111111]/25">
          {/* Top metadata line (Studio Maydit exact square-dot separator) */}
          <div className="flex flex-wrap items-center gap-2 text-[12.5px] leading-none tracking-[-0.01em]">
            <span className="font-medium text-[#52504C]">{item.role}</span>
            <span
              aria-hidden="true"
              className="h-1 w-1 shrink-0 bg-[#111111]/70"
            />
            <span className="font-semibold text-[#111111]">{item.topic}</span>
          </div>

          {/* Quote with inline tinted highlight mark */}
          <p className="mt-2.5 text-[15px] font-medium leading-[1.45] tracking-[-0.012em] text-[#111111]">
            {item.quotePrefix}
            <mark
              style={{ backgroundColor: item.highlightBg }}
              className="rounded-[2px] px-1 py-0.5 text-[#111111]"
            >
              {item.highlight}
            </mark>
            {item.quoteSuffix}
          </p>
        </div>

        {/* Interactive reaction pills */}
        <div className="mt-2 flex items-center gap-1.5">
          {item.reactions.map((r) => {
            const active = Boolean(likedMap[r.id]);
            return (
              <button
                key={r.id}
                type="button"
                aria-pressed={active}
                onClick={() => onToggleReaction(r.id)}
                className={cn(
                  "inline-flex h-[28px] cursor-pointer items-center gap-1.5 rounded-full border px-2.5 text-[12.5px] font-medium tabular-nums transition-all duration-150",
                  active
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#111111]/12 bg-white text-[#52504C] hover:border-[#111111]/35 hover:text-[#111111]"
                )}
              >
                <span className="text-[12px] leading-none">
                  {r.symbol === "+" ? (
                    <Plus className="h-3 w-3" aria-hidden="true" />
                  ) : (
                    r.symbol
                  )}
                </span>
                <span>{r.count + (active ? 1 : 0)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StudioReplyRow() {
  return (
    <div className="flex flex-row-reverse items-start gap-3">
      {/* Dark Intent Studios circular mark */}
      <div
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white"
      >
        <Sparkles className="h-4 w-4 text-[#F24E1E]" />
      </div>

      {/* High-contrast studio wrap-up card */}
      <div className="w-full max-w-[360px] rounded-[4px] border border-[#111111] bg-white px-5 py-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#52504C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F24E1E]" aria-hidden="true" />
          Intent Studios
        </div>
        <p className="mt-2 text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#111111]">
          We hear this every week.
        </p>
        <a
          href="#services-deck"
          className="mt-2 inline-flex items-center gap-1 text-[14px] font-medium text-[#111111] underline decoration-[#111111]/80 underline-offset-4 transition-colors hover:text-[#F24E1E] hover:decoration-[#F24E1E]"
        >
          Here’s how we fix it ↓
        </a>
      </div>
    </div>
  );
}

export function ProblemBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  // Track user manual wheel/touch interaction so auto-scroll yields immediately
  const manualInteractionTimeoutRef = useRef<number | null>(null);
  const isUserScrollingRef = useRef(false);

  const toggleReaction = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Observe whether the section is in the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Video-style smooth downward auto-scroll when in view + seamless infinite loop
  useEffect(() => {
    if (!isInView || isHovered || isManuallyPaused) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let rafId = 0;
    let lastTime = performance.now();
    const speedPxPerSec = 34; // Calm, readable video-like scroll cadence

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const scroller = scrollerRef.current;
      const firstSet = firstSetRef.current;

      if (scroller && firstSet && !isUserScrollingRef.current) {
        const loopHeight = firstSet.offsetHeight;
        if (loopHeight > 0) {
          scroller.scrollTop += speedPxPerSec * dt;
          if (scroller.scrollTop >= loopHeight) {
            scroller.scrollTop -= loopHeight;
          }
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [isInView, isHovered, isManuallyPaused]);

  // Keep seamless wrapping when the user manually scrolls up or down
  const handleManualScroll = () => {
    const scroller = scrollerRef.current;
    const firstSet = firstSetRef.current;
    if (!scroller || !firstSet) return;

    const loopHeight = firstSet.offsetHeight;
    if (loopHeight <= 0) return;

    if (scroller.scrollTop >= loopHeight * 1.5) {
      scroller.scrollTop -= loopHeight;
    }
  };

  const pauseBrieflyForUserInput = () => {
    isUserScrollingRef.current = true;
    if (manualInteractionTimeoutRef.current) {
      window.clearTimeout(manualInteractionTimeoutRef.current);
    }
    manualInteractionTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (manualInteractionTimeoutRef.current) {
        window.clearTimeout(manualInteractionTimeoutRef.current);
      }
    };
  }, []);

  const isPlaying = isInView && !isHovered && !isManuallyPaused;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="problem-section-heading"
      className="relative border-t border-[#111111]/10 bg-white text-[#111111] py-12 lg:py-0 lg:h-[100svh] lg:max-h-[100svh] lg:flex lg:items-center"
    >
      <div className="intent-container w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (5 cols): Editorial Header */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-[1px] w-6 bg-[#F24E1E]"
              />
              <span className="text-[13px] font-medium tracking-[0.01em] text-[#52504C]">
                Sound familiar?
              </span>
            </div>

            <h2
              id="problem-section-heading"
              className="mt-5 max-w-[440px] text-[clamp(2rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.035em] text-[#111111]"
            >
              Hard to trust
              <br />
              is hard to{" "}
              <span className="font-editorial font-normal">buy.</span>
            </h2>

            <p className="mt-5 max-w-[430px] text-[16px] leading-[1.5] text-[#52504C]">
              Buyers judge in seconds. If your website, app, brand identity, or
              content doesn’t signal quality on sight, most never make it to a
              conversation.
            </p>

            {/* Video-feed status + manual playback toggle */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsManuallyPaused((p) => !p)}
                className="inline-flex h-[36px] cursor-pointer items-center gap-2 rounded-full border border-[#111111]/15 bg-[#FAF9F7] px-3.5 text-[12.5px] font-medium text-[#111111] transition-colors hover:border-[#111111]/35"
              >
                {isManuallyPaused ? (
                  <Play className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                ) : (
                  <Pause className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                )}
                <span>{isManuallyPaused ? "Resume feed" : "Pause feed"}</span>
              </button>

              <span className="inline-flex items-center gap-2 text-[12.5px] text-[#7C756D]">
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isPlaying ? "bg-[#F24E1E] animate-pulse" : "bg-[#111111]/25"
                  )}
                />
                Scroll up or down anytime
              </span>
            </div>

            <a
              href="#services-deck"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] underline decoration-[#111111]/30 underline-offset-4 transition-colors hover:text-[#F24E1E] hover:decoration-[#F24E1E]"
            >
              See how we solve all four
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Right Column (7 cols): Video-style auto-scrolling + manually scrollable problem thread */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top fade mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-white via-white/85 to-transparent"
            />
            {/* Bottom fade mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-white via-white/90 to-transparent"
            />

            <div
              ref={scrollerRef}
              onScroll={handleManualScroll}
              onWheel={pauseBrieflyForUserInput}
              onTouchStart={pauseBrieflyForUserInput}
              aria-label="Common client challenges across websites, funnels, products, branding, AI visuals, and social media"
              className="relative h-[540px] lg:h-[min(78svh,700px)] overflow-y-auto overscroll-contain pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* First pass */}
              <div ref={firstSetRef} className="space-y-5 pt-8 pb-5">
                {PROBLEM_MESSAGES.map((item) => (
                  <MessageRow
                    key={item.id}
                    item={item}
                    likedMap={likedMap}
                    onToggleReaction={toggleReaction}
                  />
                ))}
                <StudioReplyRow />
              </div>

              {/* Seamless duplicate pass for continuous video-style downward scroll */}
              <div aria-hidden="true" className="space-y-5 pb-12">
                {PROBLEM_MESSAGES.map((item) => (
                  <MessageRow
                    key={`dup-${item.id}`}
                    item={item}
                    likedMap={likedMap}
                    onToggleReaction={toggleReaction}
                  />
                ))}
                <StudioReplyRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
