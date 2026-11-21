"use client";

import { useState } from "react";
import { Compass, Layers, PenTool, Code2, Rocket } from "lucide-react";
import { PROCESS_STAGES, SITE } from "@/data/site";
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
  eyebrow = "How We Work",
  heading = "Five clear stages from strategy to launch.",
  intro = "Direct senior execution at every checkpoint. No account-manager telephone, no vague timelines, and no handoff surprises.",
  stageTimelines,
  fitList,
  fitHeading,
}: HowWeWorkSectionProps) {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative border-t border-white/10 bg-[#111111] py-20 sm:py-28">
      <div className="intent-container">
        {/* Wireframe Block 6: 2-column architectural split (left tall visual, right stacked step cards) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left sticky architectural visual frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0A0A0A] p-7 sm:p-9 min-h-[420px] lg:min-h-[580px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
              <div className="absolute inset-0 glow-edge-bottom-left opacity-80" aria-hidden="true" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A0A0A0]">
                  Studio Architecture
                </span>
                <span className="tabular-nums rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold text-[#FFD1C2]">
                  Stage {PROCESS_STAGES[activeStage].step} / 05
                </span>
              </div>

              {/* Architectural geometric diagram responding to active stage */}
              <div className="relative z-10 my-10 flex flex-col items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10">
                  <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-[#F24E1E]/40 bg-[#111111] shadow-2xl">
                    <span className="tabular-nums text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                      {PROCESS_STAGES[activeStage].step}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F24E1E]">
                      {PROCESS_STAGES[activeStage].title}
                    </span>
                  </div>
                </div>
                <p className="mt-6 max-w-xs text-center text-sm leading-relaxed text-[#A0A0A0]">
                  {PROCESS_STAGES[activeStage].summary}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-[#A0A0A0]">
                <span>Direct senior team</span>
                <span className="tabular-nums text-[#F5F5F5] font-medium">
                  {stageTimelines?.[activeStage] ?? PROCESS_STAGES[activeStage].timeline}
                </span>
              </div>
            </div>
          </div>

          {/* Right heading + stacked dark elevated stage cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h2 className="text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
                {heading}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#A0A0A0]">
                {intro}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow>
                  {SITE.primaryCta.label}
                </Button>
                <Button href="/services/" variant="secondary" size="md">
                  View Services
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
                      "w-full text-left rounded-2xl border p-5 sm:p-6 cursor-pointer",
                      "transition-[border-color,background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "border-[#F24E1E]/45 bg-[#0A0A0A]"
                        : "border-white/10 bg-[#0A0A0A]/70 hover:border-white/20 hover:bg-[#0A0A0A]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            "mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-[background-color,border-color,color] duration-200",
                            isActive
                              ? "border-[#F24E1E]/40 bg-[#F24E1E]/15 text-[#F24E1E]"
                              : "border-white/10 bg-white/[0.03] text-[#A0A0A0]"
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                              {stage.step}
                            </span>
                            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed text-[#A0A0A0]">
                            {stage.summary}
                          </p>
                        </div>
                      </div>
                      <span className="tabular-nums shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#A0A0A0]">
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
          <div className="mt-16 border-t border-white/10 pt-14">
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
