"use client";

import { useState } from "react";
import { Compass, Layers, PenTool, Code2, Rocket } from "lucide-react";
import { PROCESS_STAGES, SITE } from "@/data/site";
import { PHOTOS } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { FitListSection } from "./FitListSection";
import { cn } from "@/lib/utils";

const STAGE_ICONS = [Compass, Layers, PenTool, Code2, Rocket];

interface HowWeWorkSectionProps {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  stageTimelines?: string[];
  fitList?: { bestFit: readonly string[]; notAFit: readonly string[] };
  fitHeading?: string;
}

export function HowWeWorkSection({
  eyebrow = "How we work",
  heading = "Five clear stages from strategy to launch.",
  intro = "Direct senior execution at every checkpoint. No account-manager telephone, no vague timelines, and no handoff surprises.",
  stageTimelines,
  fitList,
  fitHeading,
}: HowWeWorkSectionProps) {
  const [activeStage, setActiveStage] = useState(0);
  const photo = PHOTOS.sunlitLamp;

  return (
    <section className="relative border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#111111] py-20 sm:py-24 transition-colors duration-200">
      <div className="intent-container">
        {/* Wireframe Block 6: 2-column architectural split (left sticky tall photograph, right stacked stage cards) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left sticky architectural photograph */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-[#0A0A0A] aspect-[4/5]">
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 1023px) 100vw, 40vw"
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                data-source={photo.source}
                data-subject={photo.subject}
                className="h-full w-full object-cover grayscale contrast-110"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 space-y-2">
                <div className="flex items-center justify-between text-[13px] font-medium">
                  <span className="tabular-nums text-[#FFD1C2]">
                    Stage {PROCESS_STAGES[activeStage].step} / 05
                  </span>
                  <span className="tabular-nums text-[#A0A0A0]">
                    {stageTimelines?.[activeStage] ?? PROCESS_STAGES[activeStage].timeline}
                  </span>
                </div>
                <p className="text-lg font-semibold text-[#F5F5F5]">
                  {PROCESS_STAGES[activeStage].title}
                </p>
                <p className="text-[14px] leading-relaxed text-[#F5F5F5]/80">
                  {PROCESS_STAGES[activeStage].summary}
                </p>
              </div>
            </div>
          </div>

          {/* Right heading + stacked elevated stage cards */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
                {heading}
              </h2>
              <p className="max-w-xl text-base leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
                {intro}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow>
                  {SITE.primaryCta.label}
                </Button>
                <Button href="/services/" variant="secondary" size="md">
                  View services
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {PROCESS_STAGES.map((stage, idx) => {
                const Icon = STAGE_ICONS[idx];
                const isActive = activeStage === idx;
                const displayTimeline = stageTimelines?.[idx] ?? stage.timeline;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    onMouseEnter={() => setActiveStage(idx)}
                    aria-pressed={isActive}
                    className={cn(
                      "w-full text-left rounded-[12px] border p-5 sm:p-6 cursor-pointer",
                      "transition-[border-color,background-color] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                      isActive
                        ? "border-[#F24E1E]/50 bg-[#FAF9F7] dark:bg-[#0A0A0A]"
                        : "border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A]/65 hover:border-[#111111]/25 dark:hover:border-white/25 hover:bg-[#FAF9F7] dark:hover:bg-[#0A0A0A]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border transition-[background-color,border-color,color] duration-150",
                            isActive
                              ? "border-[#F24E1E]/40 bg-[#F24E1E]/15 text-[#F24E1E]"
                              : "border-[#111111]/10 dark:border-white/10 bg-[#111111]/[0.03] dark:bg-white/[0.03] text-[#52504C] dark:text-[#A0A0A0]"
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="tabular-nums text-[13px] font-semibold text-[#F24E1E]">
                              {stage.step}
                            </span>
                            <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[#111111] dark:text-[#F5F5F5]">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="text-[15px] leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
                            {stage.summary}
                          </p>
                        </div>
                      </div>
                      <span className="tabular-nums shrink-0 text-[13px] font-medium text-[#52504C] dark:text-[#A0A0A0]">
                        {displayTimeline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Coordinated Best Fit / Not a Fit lists */}
        {fitList && (
          <div className="mt-16 border-t border-[#111111]/10 dark:border-white/10 pt-14">
            <FitListSection
              bestFit={fitList.bestFit}
              notAFit={fitList.notAFit}
              heading={fitHeading}
            />
          </div>
        )}
      </div>
    </section>
  );
}
