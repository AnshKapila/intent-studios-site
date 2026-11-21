"use client";

import { motion } from "framer-motion";
import { SITE, HOME_PROOF_BAR } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProofBar } from "@/components/sections/ProofBar";
import { INTENT_EASE } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#000000] pt-[72px]">
      {/* Restrained architectural dark base + corner/edge orange illumination */}
      <div className="absolute inset-0 bg-warm-dark opacity-85" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 36% at 86% 84%, rgba(242,78,30,0.22) 0%, rgba(242,78,30,0.06) 44%, rgba(0,0,0,0) 76%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 film-grain" aria-hidden="true" />

      {/* Main hero content — proportioned so Hero + Proof Bar sit cleanly inside 1440×900 */}
      <div className="intent-container relative z-10 flex flex-1 flex-col items-center justify-center py-12 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: INTENT_EASE }}
        >
          <SectionEyebrow>AI-powered creative &amp; digital product studio</SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: INTENT_EASE }}
          className="mt-6 max-w-3xl text-[clamp(2.25rem,4.3vw,3.65rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F5F5F5]"
        >
          Websites &amp; digital products designed for{" "}
          <span className="font-editorial font-normal text-[#FFD1C2]">
            conversion
          </span>
          , not just looks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: INTENT_EASE }}
          className="mt-5 max-w-xl text-base sm:text-[17px] leading-[1.6] text-[#A0A0A0]"
        >
          We partner with startups, D2C brands, fitness studios, and growing businesses to build websites, products, brand systems, and studio-grade visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: INTENT_EASE }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button
            href={SITE.primaryCta.href}
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto"
          >
            {SITE.primaryCta.label}
          </Button>
          <Button
            href={SITE.secondaryCta.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {SITE.secondaryCta.label}
          </Button>
        </motion.div>
      </div>

      {/* Sitemap Section 3: Proof Bar cleanly anchored inside first screen */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.26, ease: INTENT_EASE }}
        className="relative z-10"
      >
        <ProofBar items={HOME_PROOF_BAR} variant="hero" />
      </motion.div>
    </section>
  );
}
