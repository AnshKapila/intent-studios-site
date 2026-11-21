"use client";

import Link from "next/link";
import { ArrowUpRight, User, Compass, Sparkles } from "lucide-react";
import { SITE } from "@/data/site";
import { INTENT_CIRCLE } from "@/data/intent-circle";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

export function FounderCircleBentoSection() {
  return (
    <section className="relative bg-[#F7F4F1] text-[#111111] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="intent-container relative z-10 space-y-12">
        {/* Wireframe Block 7 Header: Top-left micro-intro + large bold sans-serif heading */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4 space-y-3">
            <SectionEyebrow tone="light">Founder &amp; Community</SectionEyebrow>
            <p className="text-sm leading-relaxed text-[#52504C]">
              Direct creative leadership from Ansh Kapila — plus Intent Circle for founders and builders who care about craft.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#111111]">
              Built by a founder,{" "}
              <span className="font-editorial font-normal">for founders.</span>
            </h2>
          </div>
        </div>

        {/* Wireframe Block 7: Asymmetric 3-column × 2-row 6-cell editorial bento */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Cell 1: Founder Note */}
          <div className="flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-7 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#52504C]">
                Founder’s Note
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111]">
                {SITE.founder.name}
              </h3>
              <p className="text-sm leading-relaxed text-[#52504C]">
                {SITE.founder.shortNote}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-[#111111]/10 pt-4">
              <Link
                href="/about/"
                className="inline-flex min-h-[36px] items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#F24E1E] transition-colors duration-200"
              >
                Read the full story
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Cell 2: Real Founder Portrait Slot (Explicitly NO AI-generated face) */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#111111]/10 bg-[#1A1918] p-7 text-[#F5F5F5] flex flex-col justify-between min-h-[300px]">
            <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-[#FFD1C2]">
                Real Photography Slot
              </span>
              <User className="h-4 w-4 text-[#A0A0A0]" aria-hidden="true" />
            </div>

            <div className="relative z-10 my-auto flex flex-col items-center text-center py-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                AK
              </div>
              <p className="mt-4 text-sm font-semibold text-[#F5F5F5]">
                {SITE.founder.name}
              </p>
              <p className="mt-1 text-xs text-[#A0A0A0]">
                {SITE.founder.role}
              </p>
              <p className="mt-3 max-w-[220px] text-[11px] leading-relaxed text-[#A0A0A0]">
                Reserved for real founder portrait (natural light, dark background — never AI-generated).
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-[#A0A0A0]">
              <a
                href={SITE.founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F5F5] transition-colors"
              >
                {SITE.founder.instagramHandle}
              </a>
              <a
                href={SITE.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F5F5] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Cell 3: Signature #F24E1E Accent Card — Intent Circle Teaser */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#F24E1E] p-7 text-white flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                {INTENT_CIRCLE.name}
              </span>
              <Sparkles className="h-4 w-4 text-white/90" aria-hidden="true" />
            </div>

            <div className="my-6 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.03em]">
                Stay close to how we build.
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {INTENT_CIRCLE.teaserSentence}
              </p>
            </div>

            <div>
              <Link
                href={INTENT_CIRCLE.href}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-black active:scale-[0.98]"
              >
                {INTENT_CIRCLE.teaserCta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Cell 4: Studio Standard Light Card */}
          <div className="flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-7 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#52504C]">
                Design Philosophy
              </span>
              <Compass className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
            </div>
            <div className="my-6 space-y-2">
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111]">
                Intent is in the Details.
              </h3>
              <p className="text-sm leading-relaxed text-[#52504C]">
                Spacing rhythm, typographic contrast, micro-interactions, and load speed are not polish — they are why visitors trust you.
              </p>
            </div>
            <div className="h-1.5 w-16 rounded-full bg-[#F24E1E]" aria-hidden="true" />
          </div>

          {/* Cell 5: High-Contrast Dark Card — Direct Partnership */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#0A0A0A] p-7 text-[#F5F5F5] flex flex-col justify-between">
            <div className="absolute inset-0 glow-edge-bottom-right opacity-70" aria-hidden="true" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                Direct Access
              </span>
              <span className="h-2 w-2 rounded-full bg-[#F24E1E]" aria-hidden="true" />
            </div>
            <div className="relative z-10 my-6 space-y-2">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                No account managers.
              </p>
              <p className="text-sm leading-relaxed text-[#A0A0A0]">
                You speak directly with the people designing your system and writing your production code.
              </p>
            </div>
            <p className="relative z-10 text-xs font-medium text-[#FFD1C2]">
              Practical innovation · Honest pushback
            </p>
          </div>

          {/* Cell 6: Action Card */}
          <div className="flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-7 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#52504C]">
                Next Step
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111]">
                Have a project in mind?
              </h3>
              <p className="text-sm leading-relaxed text-[#52504C]">
                Bring your current site, product idea, or launch goal to a 15-minute call.
              </p>
            </div>
            <div className="mt-6">
              <Button
                href={SITE.primaryCta.href}
                variant="light-primary"
                size="md"
                showArrow
                className="w-full"
              >
                {SITE.primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
