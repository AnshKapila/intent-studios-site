"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SITE, HOME_PROOF_BAR } from "@/data/site";
import { PHOTOS } from "@/data/media";
import { INTENT_EASE } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] text-[#111111] pt-[72px]">
      {/* Warm corner haze (top-right, exact Figma radial glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[70px] right-[-80px] h-[580px] w-[560px]"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, rgba(255, 209, 194, 0.45) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <div className="intent-container relative z-10 flex flex-col items-center pt-10 pb-8 sm:pt-14 sm:pb-10">
        {/* Eyebrow: 22px orange dash + Independent by design. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: INTENT_EASE }}
          className="inline-flex items-center gap-3"
        >
          <span className="h-[1px] w-[22px] bg-[#F24E1E] shrink-0" aria-hidden="true" />
          <span className="text-[13px] font-normal leading-[18px] text-[#52504C]">
            Independent by design.
          </span>
        </motion.div>

        {/* Display H1: Inter Medium 64px + Instrument Serif Italic on conversion, */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: INTENT_EASE }}
          className="mt-6 max-w-[920px] text-center text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[#111111]"
        >
          Websites &amp; digital products
          <br className="hidden sm:inline" /> designed for{" "}
          <span className="font-editorial font-normal">conversion,</span>
          <br className="hidden sm:inline" /> not just looks.
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: INTENT_EASE }}
          className="mt-6 max-w-[660px] text-center text-[16px] sm:text-[17px] font-normal leading-[1.45] text-[#52504C]"
        >
          Strategy, design and AI-powered execution.
          <br className="hidden sm:inline" /> Built around your business. Focused on what happens next.
        </motion.p>

        {/* Pill CTA Buttons matching Figma spec */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: INTENT_EASE }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row"
        >
          <Link
            href={SITE.primaryCta.href}
            className="inline-flex h-[48px] w-full sm:w-auto items-center justify-center rounded-[24px] bg-[#F24E1E] px-8 text-[14px] font-medium text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[#D94114] hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.985]"
          >
            {SITE.primaryCta.label}
          </Link>
          <Link
            href={SITE.secondaryCta.href}
            className="group inline-flex h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-[24px] border border-[#E4E1DD] bg-[#FFFFFF] px-7 text-[14px] font-medium text-[#111111] transition-[border-color,background-color,transform] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#111111]/35 hover:bg-[#FAFAF8] hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.985]"
          >
            <span>{SITE.secondaryCta.label}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Micro-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.26, ease: INTENT_EASE }}
          className="mt-6 text-center text-[13px] font-normal leading-[18px] text-[#52504C]"
        >
          A considered approach. From first impression to next action.
        </motion.p>

        {/* 5 Fanned Concept Preview Cards (-7deg, -3deg, 0deg, +3deg, +7deg) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: INTENT_EASE }}
          className="mt-10 sm:mt-12 w-full"
        >
          <div className="flex items-end justify-center gap-3 overflow-x-auto pb-6 pt-4 px-2 lg:overflow-visible lg:gap-0">
            {/* Card 1: 01 / Web (-7deg, #D7D4CD) */}
            <div className="shrink-0 w-[215px] sm:w-[235px] h-[290px] rounded-[12px] bg-[#D7D4CD] p-4 flex flex-col justify-between shadow-[0_14px_34px_rgba(17,17,17,0.08)] lg:-mr-6 lg:mb-4 lg:-rotate-[7deg] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <span className="text-[10px] font-normal text-[#111111]">01 / Web</span>
              <div className="my-2.5 flex-1 overflow-hidden rounded-[6px] bg-[#111111]">
                <img
                  src={PHOTOS.studioNotebook.src}
                  srcSet={PHOTOS.studioNotebook.srcSet}
                  sizes="240px"
                  width={PHOTOS.studioNotebook.width}
                  height={PHOTOS.studioNotebook.height}
                  alt={PHOTOS.studioNotebook.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[17px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111111]">
                Built for your next chapter.
              </p>
            </div>

            {/* Card 2: Product Dashboard (-3deg, #E9E6E1) */}
            <div className="shrink-0 w-[235px] sm:w-[260px] h-[335px] rounded-[12px] bg-[#E9E6E1] p-5 flex items-center justify-center shadow-[0_16px_38px_rgba(17,17,17,0.09)] lg:-mr-5 lg:mb-2 lg:-rotate-[3deg] z-[5] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="h-full w-[178px] rounded-[18px] bg-[#FAFAF8] p-4 flex flex-col justify-between shadow-sm">
                <div>
                  <p className="text-[18px] font-medium leading-[1.1] tracking-[-0.02em] text-[#111111]">
                    Your day, in focus.
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.06em] text-[#52504C]">
                    MONDAY, 24 AUG
                  </p>
                  <div className="mt-3 rounded-[9px] bg-[#111111] p-3">
                    <p className="text-[15px] font-medium leading-[1.2] text-white">
                      Make room
                      <br />
                      for progress.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-[#E4E1DD] border-t border-[#E4E1DD] text-[9px] text-[#111111]">
                  <div className="py-1.5">Morning flow</div>
                  <div className="py-1.5">Strength session</div>
                  <div className="pt-1.5">A little reflection</div>
                </div>
              </div>
            </div>

            {/* Card 3: Centerpiece Brand Concept (0deg, #111111) */}
            <div className="shrink-0 w-[280px] sm:w-[325px] h-[390px] rounded-[14px] bg-[#111111] p-3 flex flex-col justify-between shadow-[0_24px_56px_rgba(17,17,17,0.22)] z-20 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="h-[258px] w-full overflow-hidden rounded-[8px] bg-[#1D1D1D]">
                <img
                  src={PHOTOS.sunlitLamp.src}
                  srcSet={PHOTOS.sunlitLamp.srcSet}
                  sizes="325px"
                  width={PHOTOS.sunlitLamp.width}
                  height={PHOTOS.sunlitLamp.height}
                  alt={PHOTOS.sunlitLamp.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-3 pb-2 pt-3 space-y-2">
                <p className="text-[26px] sm:text-[28px] font-medium leading-[1.08] tracking-[-0.03em] text-white">
                  Ideas with
                  <br />a point of view.
                </p>
                <p className="text-[9px] uppercase tracking-[0.08em] text-[#A0A0A0]">
                  INTENT STUDIOS / CONCEPT STUDY
                </p>
              </div>
            </div>

            {/* Card 4: D2C Concept (+3deg, #E5D3C3) */}
            <div className="shrink-0 w-[235px] sm:w-[260px] h-[335px] rounded-[12px] bg-[#E5D3C3] p-3 flex flex-col justify-between shadow-[0_16px_38px_rgba(17,17,17,0.09)] lg:-ml-5 lg:mb-2 lg:rotate-[3deg] z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="h-[246px] w-full overflow-hidden rounded-[7px] bg-[#D8C2AE]">
                <img
                  src={PHOTOS.cosmeticBottle.src}
                  srcSet={PHOTOS.cosmeticBottle.srcSet}
                  sizes="260px"
                  width={PHOTOS.cosmeticBottle.width}
                  height={PHOTOS.cosmeticBottle.height}
                  alt={PHOTOS.cosmeticBottle.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="px-2 pb-1 text-[23px] font-medium leading-[1.2] tracking-[-0.025em] text-[#111111]">
                Less, but better.
              </p>
            </div>

            {/* Card 5: Fitness Concept (+7deg, #252720) */}
            <div className="shrink-0 w-[215px] sm:w-[235px] h-[290px] rounded-[12px] bg-[#252720] p-3 flex flex-col justify-between shadow-[0_14px_34px_rgba(17,17,17,0.14)] lg:-ml-6 lg:mb-4 lg:rotate-[7deg] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="h-[180px] w-full overflow-hidden rounded-[6px] bg-[#161712]">
                <img
                  src={PHOTOS.fitnessGym.src}
                  srcSet={PHOTOS.fitnessGym.srcSet}
                  sizes="240px"
                  width={PHOTOS.fitnessGym.width}
                  height={PHOTOS.fitnessGym.height}
                  alt={PHOTOS.fitnessGym.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="px-2 pb-1 text-[28px] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                Find your
                <br />
                strong.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Hero Caption Row */}
        <div className="mt-4 flex w-full items-center justify-between gap-4 text-[11px] font-normal text-[#52504C]">
          <span>Selected concept directions — not client projects</span>
          <span className="inline-flex items-center gap-1 shrink-0">
            Scroll to explore
            <ArrowDown className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>

      {/* Sitemap Section 3: Light Proof Bar anchored cleanly between Hero and Problem */}
      <div className="border-y border-[#E4E1DD] bg-[#FFFFFF]">
        <div className="intent-container">
          <dl className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_PROOF_BAR.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-l border-[#E4E1DD] pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4"
              >
                <dt className="text-[13px] font-medium text-[#52504C]">
                  {item.label}
                </dt>
                <dd className="tabular-nums text-2xl font-medium tracking-[-0.03em] text-[#111111]">
                  {item.value}
                </dd>
                <p className="text-[14px] leading-snug text-[#52504C]">
                  {item.context}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
