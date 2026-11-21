"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FaqItem } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  items: FaqItem[];
  surface?: "dark" | "deep";
}

export function FaqSection({
  eyebrow = "Questions",
  heading = "Straight answers before we talk.",
  intro = "Clear expectations on how we work, how we use AI, and what happens next.",
  items,
  surface = "dark",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={cn(
        "relative border-t border-white/10 py-20 sm:py-24",
        surface === "deep" ? "bg-[#000000]" : "bg-[#111111]"
      )}
    >
      <div className="intent-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#F5F5F5]">
              {heading}
            </h2>
            <p className="text-base leading-[1.6] text-[#A0A0A0]">
              {intro}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const btnId = `faq-trigger-${idx}`;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "rounded-[12px] border transition-[border-color,background-color] duration-150",
                    isOpen
                      ? "border-[#F24E1E]/40 bg-[#0A0A0A]"
                      : "border-white/10 bg-[#0A0A0A]/80 hover:border-white/20"
                  )}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full min-h-[56px] items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="text-[16px] sm:text-[17px] font-medium tracking-[-0.01em] text-[#F5F5F5]">
                        {item.question}
                      </span>
                      <span
                        className={cn(
                          "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border transition-[background-color,border-color,color] duration-150",
                          isOpen
                            ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                            : "border-white/15 bg-white/[0.04] text-[#A0A0A0]"
                        )}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="px-6 pb-6 pt-0 text-[15px] sm:text-base leading-[1.6] text-[#A0A0A0]"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
