"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { SERVICE_PHOTOS } from "@/data/media";
import { INDUSTRIES } from "@/data/industries";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ServicesDeckSection() {
  const [selectedGoal, setSelectedGoal] = useState<ServiceSlug | "all">("all");

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#000000] py-20 sm:py-24">
      <div className="intent-container space-y-10">
        {/* Heading + Interactive Goal Chips */}
        <div className="space-y-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 max-w-2xl">
              <SectionEyebrow>Services</SectionEyebrow>
              <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#F5F5F5]">
                Four focused disciplines built to move your business forward.
              </h2>
            </div>
            <Link
              href="/services/"
              className="group inline-flex h-[44px] items-center gap-2 text-[15px] font-medium text-[#F5F5F5] hover:text-[#FFD1C2] transition-colors duration-150"
            >
              Explore services overview
              <ArrowRight
                className="h-4 w-4 text-[#F24E1E] transition-transform duration-150 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Unified Architectural Goal Chips */}
          <div
            role="group"
            aria-label="Filter services by business goal"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              onClick={() => setSelectedGoal("all")}
              aria-pressed={selectedGoal === "all"}
              className={cn(
                "h-[44px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                selectedGoal === "all"
                  ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                  : "border-white/12 bg-[#0A0A0A] text-[#A0A0A0] hover:border-white/25 hover:text-[#F5F5F5]"
              )}
            >
              All goals
            </button>
            {SERVICES.map((service) => {
              const active = selectedGoal === service.slug;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setSelectedGoal(active ? "all" : service.slug)}
                  aria-pressed={active}
                  className={cn(
                    "h-[44px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                    active
                      ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                      : "border-white/12 bg-[#0A0A0A] text-[#A0A0A0] hover:border-white/25 hover:text-[#F5F5F5]"
                  )}
                >
                  {service.goalLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Wireframe Block 4: Stacked horizontal split cards with real local WebP photography */}
        <div className="space-y-5">
          {SERVICES.map((service) => {
            const isDimmed = selectedGoal !== "all" && selectedGoal !== service.slug;
            const isHighlighted = selectedGoal === service.slug;
            const photo = SERVICE_PHOTOS[service.slug];

            return (
              <div
                key={service.slug}
                className={cn(
                  "group relative overflow-hidden rounded-[16px] border bg-[#0A0A0A] p-6 sm:p-8",
                  "transition-[border-color,opacity] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                  isHighlighted
                    ? "border-[#F24E1E]/60"
                    : "border-white/10 hover:border-white/25",
                  isDimmed ? "opacity-45" : "opacity-100"
                )}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Index, Title, Outcome, Proof, Unified Button */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="tabular-nums text-[15px] font-semibold text-[#F24E1E]">
                          {service.index}
                        </span>
                        <span className="text-[13px] font-medium text-[#A0A0A0]">
                          {service.timeline}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
                        {service.name}
                      </h3>

                      <p className="text-base leading-[1.6] text-[#A0A0A0]">
                        {service.outcomeLine}
                      </p>

                      <p className="text-[15px] leading-relaxed text-[#F5F5F5]/85 border-l-2 border-[#F24E1E] pl-3.5">
                        {service.proofLine}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button href={service.href} variant="secondary" size="md" showArrow>
                        Explore {service.shortName}
                      </Button>
                      {service.hasTypePages && (
                        <div className="flex flex-wrap items-center gap-4 pl-1 text-[14px] text-[#A0A0A0]">
                          <Link
                            href="/services/website-design/ecommerce/"
                            className="underline decoration-white/20 underline-offset-4 hover:text-[#F5F5F5] hover:decoration-[#F24E1E] transition-colors"
                          >
                            E-commerce
                          </Link>
                          <Link
                            href="/services/website-design/business/"
                            className="underline decoration-white/20 underline-offset-4 hover:text-[#F5F5F5] hover:decoration-[#F24E1E] transition-colors"
                          >
                            Business sites
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Real local WebP photography */}
                  <div className="lg:col-span-6">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[#111111]">
                      <img
                        src={photo.src}
                        srcSet={photo.srcSet}
                        sizes="(max-width: 1023px) 100vw, 45vw"
                        width={photo.width}
                        height={photo.height}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        data-source={photo.source}
                        data-subject={photo.subject}
                        style={{ objectPosition: photo.objectPosition || "50% 50%" }}
                        className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Line */}
        <div className="flex flex-col gap-4 rounded-[12px] border border-white/10 bg-[#0A0A0A] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-[13px] font-medium text-[#A0A0A0]">
              Dedicated industry playbooks
            </p>
            <p className="text-[15px] text-[#F5F5F5]">
              Deepest recent work in Fitness &amp; Wellness and D2C &amp; Product Brands — plus startups and service businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            {INDUSTRIES.map((ind) => (
              <Button key={ind.slug} href={ind.href} variant="secondary" size="md" showArrow>
                {ind.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
