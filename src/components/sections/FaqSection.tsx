"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, type FaqItem } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
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
    <section className="relative border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#181817] text-[#111111] dark:text-white py-16 lg:py-24 lg:min-h-[780px] flex items-center transition-colors duration-200">
      <div className="intent-container w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Heading, Intro & Quick Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>

              <h2 className="type-h2 whitespace-pre-line text-[#111111] dark:text-white">
                {heading}
              </h2>

              <p className="type-p2 max-w-[440px] text-[#52504C] dark:text-[#A3A09A]">
                {intro}
              </p>
            </div>

            {/* Quick Contact Card (16px Balanced Modern radius) */}
            <div className="max-w-[465px] rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#1F1E1C] p-6 space-y-5">
              <div className="space-y-2.5">
                <h3 className="type-h3 text-[#111111] dark:text-white">
                  Still have a question?
                </h3>
                <p className="type-p2 text-[#52504C] dark:text-[#A3A09A]">
                  Let’s talk about what you’re building.
                  <br />A short conversation is a good place to start.
                </p>
              </div>

              <div className="pt-2">
                <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
                  {SITE.primaryCta.label}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Hairline Accordion — opens on hover & snaps back on hover-out (+ click/keyboard accessible) */}
          <div
            className="lg:col-span-7 border-y border-[#DCD9D5] dark:border-white/12 divide-y divide-[#DCD9D5] dark:divide-white/12"
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
                  className="bg-white dark:bg-[#181817] transition-colors duration-200"
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
                        <span className="tabular-nums w-9 sm:w-[55px] shrink-0 text-[13px] font-normal leading-[18px] text-[#7C756D] dark:text-[#8A8A8A]">
                          {indexLabel}
                        </span>
                        <span className="text-[18px] sm:text-[20px] font-medium leading-[1.3] tracking-[-0.015em] text-[#111111] dark:text-[#F5F5F5]">
                          {item.question}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 w-[30px] text-right text-[25px] font-normal leading-[26px] text-[#111111] dark:text-[#F5F5F5] select-none transition-transform duration-200"
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
                        <div className="pl-9 sm:pl-[55px] pr-8 pb-7 pt-1 text-[16px] font-normal leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
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
