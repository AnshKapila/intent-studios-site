"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Compass, Sparkles } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

function ServicePreviewVisual({ type }: { type: "website" | "product" | "brand" | "content" }) {
  if (type === "website") {
    return (
      <div className="relative flex h-full min-h-[240px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1C120F] via-[#111111] to-[#080808] p-5">
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
            <Globe className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
            Conversion Architecture
          </span>
          <span className="tabular-nums text-[#FFD1C2]">Next.js · Shopify</span>
        </div>
        <div className="my-4 rounded-xl border border-white/10 bg-[#0A0A0A] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="h-2 w-20 rounded-full bg-white/20" />
            <span className="h-5 w-20 rounded-full bg-[#F24E1E]" />
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="h-3 w-3/4 rounded bg-white/80" />
            <div className="h-2 w-1/2 rounded bg-white/25" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-12 rounded-lg border border-white/10 bg-white/[0.03]" />
            <div className="h-12 rounded-lg border border-white/10 bg-white/[0.03]" />
            <div className="h-12 rounded-lg border border-[#F24E1E]/30 bg-[#F24E1E]/10" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span>Responsive 360px → 1440px</span>
          <span className="text-[#F5F5F5]">SEO &amp; Speed Ready</span>
        </div>
      </div>
    );
  }

  if (type === "product") {
    return (
      <div className="relative flex h-full min-h-[240px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#12151C] via-[#111111] to-[#080808] p-5">
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
            <Layers className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
            Product UI &amp; Tokens
          </span>
          <span className="text-[#FFD1C2]">Web &amp; Mobile</span>
        </div>
        <div className="my-4 grid grid-cols-12 gap-2.5">
          <div className="col-span-4 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 space-y-2">
            <div className="h-2 w-10 rounded bg-[#F24E1E]" />
            <div className="h-2 w-full rounded bg-white/15" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
          </div>
          <div className="col-span-8 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#F5F5F5]">Active Flow</span>
              <span className="rounded-full bg-[#F24E1E]/15 px-2 py-0.5 text-[10px] text-[#FFD1C2]">Interactive</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="h-1.5 w-8 rounded bg-white/25" />
                <div className="mt-3 h-2.5 w-12 rounded bg-white/75" />
              </div>
              <div className="h-14 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="h-1.5 w-10 rounded bg-[#F24E1E]/80" />
                <div className="mt-3 h-2.5 w-14 rounded bg-white/75" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span>Flows · Prototypes · Systems</span>
          <span className="text-[#F5F5F5]">Engineering-ready</span>
        </div>
      </div>
    );
  }

  if (type === "brand") {
    return (
      <div className="relative flex h-full min-h-[240px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#191513] via-[#111111] to-[#080808] p-5">
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
            <Compass className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
            Identity &amp; Visual Brain
          </span>
          <span className="text-[#FFD1C2]">System Guide</span>
        </div>
        <div className="my-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#F7F4F1] p-4 text-[#111111] flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#52504C]">Typeface</span>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Aa</p>
            <span className="text-[10px] text-[#52504C]">Grid &amp; Hierarchy</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-4 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#A0A0A0]">Palette</span>
            <div className="my-3 flex gap-2">
              <span className="h-6 w-6 rounded-full bg-[#111111] border border-white/25" />
              <span className="h-6 w-6 rounded-full bg-[#F24E1E]" />
              <span className="h-6 w-6 rounded-full bg-[#F7F4F1]" />
            </div>
            <span className="text-[10px] text-[#A0A0A0]">WCAG AA Verified</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
          <span>Wordmark · Tokens · Rules</span>
          <span className="text-[#F5F5F5]">Digital-first</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[240px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E120D] via-[#111111] to-[#080808] p-5">
      <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
        <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
          <Sparkles className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
          Art-Directed AI Content
        </span>
        <span className="text-[#FFD1C2]">1:1 · 4:5 · 9:16</span>
      </div>
      <div className="my-4 grid grid-cols-3 gap-2.5">
        <div className="aspect-[4/5] rounded-xl border border-white/10 bg-[#0A0A0A] p-2.5 flex flex-col justify-between">
          <span className="h-1.5 w-6 rounded-full bg-[#F24E1E]" />
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded bg-white/30" />
            <div className="h-1.5 w-2/3 rounded bg-white/15" />
          </div>
        </div>
        <div className="aspect-[4/5] rounded-xl border border-[#F24E1E]/35 bg-gradient-to-b from-[#2A150E] to-[#0A0A0A] p-2.5 flex flex-col justify-between">
          <span className="text-[9px] uppercase tracking-[0.12em] text-[#FFD1C2]">Shoot</span>
          <div className="mx-auto h-10 w-8 rounded-md bg-white/15 border border-white/20" />
          <span className="h-1.5 w-8 rounded-full bg-white/35" />
        </div>
        <div className="aspect-[4/5] rounded-xl bg-[#F7F4F1] p-2.5 flex flex-col justify-between text-[#111111]">
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em]">Slide</span>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded bg-[#111111]/70" />
            <div className="h-1.5 w-1/2 rounded bg-[#111111]/30" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[11px] text-[#A0A0A0]">
        <span>Product Shoots &amp; Social Systems</span>
        <span className="text-[#F5F5F5]">Brand-locked</span>
      </div>
    </div>
  );
}

export function ServicesDeckSection() {
  const [selectedGoal, setSelectedGoal] = useState<ServiceSlug | "all">("all");

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#000000] py-20 sm:py-28">
      <div className="intent-container space-y-12">
        {/* Heading + Interactive Goal Chips (Sitemap Section 7) */}
        <div className="space-y-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 max-w-2xl">
              <SectionEyebrow>Services</SectionEyebrow>
              <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
                Four focused disciplines — pick what moves your{" "}
                <span className="font-editorial font-normal text-[#FFD1C2]">
                  business next.
                </span>
              </h2>
            </div>
            <Link
              href="/services/"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#F5F5F5] hover:text-[#FFD1C2] transition-colors duration-200"
            >
              Explore Services Overview
              <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
            </Link>
          </div>

          {/* Goal Chips */}
          <div
            role="group"
            aria-label="Filter services by business goal"
            className="flex flex-wrap items-center gap-2.5"
          >
            <button
              type="button"
              onClick={() => setSelectedGoal("all")}
              aria-pressed={selectedGoal === "all"}
              className={cn(
                "min-h-[44px] rounded-full px-4 py-2 text-xs sm:text-sm font-medium border cursor-pointer transition-[background-color,border-color,color] duration-200",
                selectedGoal === "all"
                  ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                  : "border-white/12 bg-[#0A0A0A] text-[#A0A0A0] hover:border-white/25 hover:text-[#F5F5F5]"
              )}
            >
              All Goals
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
                    "min-h-[44px] rounded-full px-4 py-2 text-xs sm:text-sm font-medium border cursor-pointer transition-[background-color,border-color,color] duration-200",
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

        {/* Wireframe Block 4: Stacked horizontal split cards */}
        <div className="space-y-5">
          {SERVICES.map((service) => {
            const isDimmed = selectedGoal !== "all" && selectedGoal !== service.slug;
            const isHighlighted = selectedGoal === service.slug;
            return (
              <div
                key={service.slug}
                className={cn(
                  "group relative overflow-hidden rounded-[26px] border bg-[#0A0A0A] p-5 sm:p-8 lg:p-9",
                  "transition-[border-color,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isHighlighted
                    ? "border-[#F24E1E]/60 shadow-[0_24px_70px_rgba(242,78,30,0.12)]"
                    : "border-white/10 hover:border-white/25",
                  isDimmed ? "opacity-45" : "opacity-100"
                )}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Index, Title, Outcome, Proof, Link */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="tabular-nums text-2xl font-semibold tracking-[-0.04em] text-[#F24E1E]">
                          {service.index}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#A0A0A0]">
                          {service.timeline}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                        {service.name}
                      </h3>

                      <p className="text-base leading-relaxed text-[#A0A0A0]">
                        {service.outcomeLine}
                      </p>

                      <p className="text-sm text-[#FFD1C2]/90 border-l-2 border-[#F24E1E] pl-3.5">
                        {service.proofLine}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F5F5F5] px-5 py-2.5 text-sm font-semibold text-[#111111] transition-[background-color,color] duration-200 hover:bg-[#F24E1E] hover:text-white"
                      >
                        Explore {service.shortName}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      {service.hasTypePages && (
                        <>
                          <Link
                            href="/services/website-design/ecommerce/"
                            className="inline-flex min-h-[44px] items-center rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-[#A0A0A0] hover:border-white/30 hover:text-[#F5F5F5] transition-colors duration-200"
                          >
                            E-commerce
                          </Link>
                          <Link
                            href="/services/website-design/business/"
                            className="inline-flex min-h-[44px] items-center rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-[#A0A0A0] hover:border-white/30 hover:text-[#F5F5F5] transition-colors duration-200"
                          >
                            Business Sites
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Bespoke visual preview surface */}
                  <div className="lg:col-span-6">
                    <ServicePreviewVisual type={service.previewType} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Line (Sitemap Section 7 requirement) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
              Dedicated Industry Playbooks
            </p>
            <p className="text-sm text-[#F5F5F5]">
              Deepest recent work in Fitness &amp; Wellness and D2C &amp; Product Brands — plus startups and service businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={ind.href}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-[#F5F5F5] transition-[border-color,background-color] duration-200 hover:border-[#F24E1E]/50 hover:bg-[#F24E1E]/10"
              >
                {ind.name}
                <ArrowUpRight className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
