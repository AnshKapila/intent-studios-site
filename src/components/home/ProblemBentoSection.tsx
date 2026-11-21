"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";
import { BUYER_FRUSTRATIONS, WHAT_WE_ARE_NOT } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const STATEMENT_WORDS = [
  "Most",
  "ambitious",
  "founders",
  "sit",
  "in",
  "an",
  "awkward",
  "middle:",
  "too",
  "serious",
  "for",
  "generic",
  "freelancers,",
  "not",
  "interested",
  "in",
  "slow",
  "agencies.",
];

function WordHighlightStatement() {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <p
      ref={containerRef}
      className="mx-auto mt-5 max-w-2xl text-[18px] sm:text-[21px] font-medium leading-[1.45] tracking-[-0.02em]"
    >
      {STATEMENT_WORDS.map((word, idx) => {
        const start = idx / STATEMENT_WORDS.length;
        const end = Math.min(1, start + 0.14);
        const isAccent = word === "generic" || word === "slow";
        return (
          <HighlightWord
            key={`${word}-${idx}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            isAccent={isAccent}
          />
        );
      })}
    </p>
  );
}

function HighlightWord({
  word,
  progress,
  range,
  isAccent,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  isAccent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.35, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={
        isAccent
          ? "inline-block mr-[0.28em] text-[#F24E1E]"
          : "inline-block mr-[0.28em] text-[#111111]"
      }
    >
      {word}
    </motion.span>
  );
}

export function ProblemBentoSection() {
  return (
    <section className="relative bg-[#F7F4F1] text-[#111111] py-20 sm:py-24">
      <div className="intent-container relative z-10">
        {/* Clean editorial header + Taste Skill dealt word-highlight statement */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow tone="light">The problem</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#111111]">
            Why growing teams outgrow templates and skip slow agencies.
          </h2>
          <WordHighlightStatement />
        </div>

        {/* Flattened 2x2 Architectural Bento Grid — single-level surfaces, zero box-in-box nesting */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Card 1 (7 cols): Verbatim Buyer Frustrations */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7 sm:p-8">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {BUYER_FRUSTRATIONS.map((item) => (
                <div
                  key={item.quote}
                  className="border-t border-[#111111]/10 pt-4 space-y-1.5"
                >
                  <p className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#111111]">
                    {item.quote}
                  </p>
                  <p className="text-[14px] leading-relaxed text-[#52504C]">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#111111]/10 pt-5">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">
                What founders tell us on day one
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#52504C]">
                Underneath every website, app, or visual request is one goal: your brand needs to be taken seriously the moment someone lands on it.
              </p>
            </div>
          </div>

          {/* Card 2 (5 cols): Market Positioning */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[13px] font-medium text-[#52504C]">
                <span>Market positioning</span>
                <span className="text-[#F24E1E]">Where we sit</span>
              </div>

              <div className="divide-y divide-[#111111]/10 border-y border-[#111111]/10">
                <div className="flex items-center justify-between py-3.5 text-[14px]">
                  <span className="font-medium text-[#52504C]">Generic freelancers</span>
                  <span className="text-[#52504C]">Low cost · High hand-holding</span>
                </div>
                <div className="flex items-center justify-between -mx-3 rounded-[10px] bg-[#111111] px-3 py-3.5 text-[14px] text-[#F5F5F5]">
                  <span className="font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F24E1E]" aria-hidden="true" />
                    Intent Studios
                  </span>
                  <span className="text-[#FFD1C2]">Senior craft · Practical AI</span>
                </div>
                <div className="flex items-center justify-between py-3.5 text-[14px]">
                  <span className="font-medium text-[#52504C]">Traditional agencies</span>
                  <span className="text-[#52504C]">Slow timelines · Overhead</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#111111]/10 pt-5">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">
                Built for speed without compromise
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#52504C]">
                Direct access to creative direction and engineering — zero account-manager relay or padded timelines.
              </p>
            </div>
          </div>

          {/* Card 3 (5 cols): What We Refuse To Be */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7 sm:p-8">
            <ul className="divide-y divide-[#111111]/10">
              {WHAT_WE_ARE_NOT.map((item) => (
                <li
                  key={item.title}
                  className="py-4 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#52504C]" aria-hidden="true" />
                  <div>
                    <div className="text-[15px] font-semibold text-[#111111]">{item.title}</div>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-[#52504C]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#111111]/10 pt-5">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">
                What we refuse to be
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#52504C]">
                We are a thinking partner, not an order-taking vendor.
              </p>
            </div>
          </div>

          {/* Card 4 (7 cols): How We Operate */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7 sm:p-8">
            <ul className="divide-y divide-[#111111]/10">
              {[
                {
                  label: "Positioning and buyer messaging locked before visual design starts",
                  tag: "Clarity",
                },
                {
                  label: "Bespoke dark- or light-led systems engineered cleanly in production code",
                  tag: "Craft",
                },
                {
                  label: "Practical AI workflows for rapid art-directed visuals and prototyping",
                  tag: "Leverage",
                },
                {
                  label: "Candid pushback whenever an idea works against your own conversion",
                  tag: "Partnership",
                },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-[#111111]">
                      {row.label}
                    </span>
                  </div>
                  <span className="shrink-0 text-[13px] font-medium text-[#52504C]">
                    {row.tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#111111]/10 pt-5">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">
                Design, engineering &amp; practical AI working together
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#52504C]">
                Every website, product interface, identity, and visual campaign is structured around measurable credibility and conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
