"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, type FaqItem } from "@/data/site";
import { INTENT_EASE } from "@/lib/motion";

interface FaqSectionProps {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  items: FaqItem[];
  surface?: "dark" | "deep" | "light";
}

export function FaqSection({
  eyebrow = "A little clarity",
  heading = "Good questions.\nStraight answers.",
  intro = "A few things worth knowing before we start a conversation.",
  items,
}: FaqSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#FFFFFF] text-[#111111] py-16 sm:py-20 lg:min-h-[780px] flex items-center">
      <div className="intent-container w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Heading, Intro & Quick Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              {/* Orange 24px hairline dash + 13px label */}
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#F24E1E] shrink-0" aria-hidden="true" />
                <span className="text-[13px] font-normal leading-[18px] text-[#52504C]">
                  {eyebrow}
                </span>
              </div>

              <h2 className="whitespace-pre-line text-[clamp(2rem,3.1vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.035em] text-[#111111]">
                {heading}
              </h2>

              <p className="max-w-[440px] text-[16px] font-normal leading-[1.4] text-[#52504C]">
                {intro}
              </p>
            </div>

            {/* Quick Contact Card (#F7F4F1, 16px radius, 26px padding) */}
            <div className="max-w-[465px] rounded-[16px] bg-[#F7F4F1] p-[26px] space-y-5">
              <div className="space-y-2.5">
                <h3 className="text-[24px] font-medium leading-[1.4] tracking-[-0.02em] text-[#111111]">
                  Still have a question?
                </h3>
                <p className="text-[15px] font-normal leading-[1.45] text-[#52504C]">
                  Let’s talk about what you’re building.
                  <br />A short conversation is a good place to start.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={SITE.primaryCta.href}
                  className="inline-flex h-[48px] items-center justify-center rounded-[24px] bg-[#F24E1E] px-7 text-[14px] font-medium text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[#D94114] hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.985]"
                >
                  {SITE.primaryCta.label}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hairline Accordion — opens on hover & snaps back on hover-out (+ click/keyboard accessible) */}
          <div
            className="lg:col-span-7 border-y border-[#DCD9D5] divide-y divide-[#DCD9D5]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {items.map((item, idx) => {
              const isOpen = hoveredIndex === idx || clickedIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const btnId = `faq-trigger-${idx}`;
              const indexLabel = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={item.question}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() =>
                    setHoveredIndex((prev) => (prev === idx ? null : prev))
                  }
                  className="bg-[#FFFFFF]"
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setClickedIndex((prev) => (prev === idx ? null : idx))
                      }
                      className="flex w-full items-start justify-between gap-4 py-6 text-left cursor-pointer"
                    >
                      <span className="flex items-baseline gap-4 sm:gap-0 min-w-0">
                        <span className="tabular-nums w-9 sm:w-[55px] shrink-0 text-[13px] font-normal leading-[18px] text-[#7C756D]">
                          {indexLabel}
                        </span>
                        <span className="text-[18px] sm:text-[20px] font-medium leading-[1.3] tracking-[-0.015em] text-[#111111]">
                          {item.question}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 w-[30px] text-right text-[25px] font-normal leading-[26px] text-[#111111] select-none transition-transform duration-200"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: INTENT_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pl-9 sm:pl-[55px] pr-8 pb-7 pt-1 text-[16px] font-normal leading-[1.6] text-[#52504C]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
