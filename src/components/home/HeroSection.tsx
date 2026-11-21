"use client";

import { motion } from "framer-motion";
import { SITE, HOME_PROOF_BAR } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProofBar } from "@/components/sections/ProofBar";
import { INTENT_EASE } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#000000] pt-[76px]">
      {/* Atmospheric architectural layers (Wireframe Block 1 adapted to Brand Palette) */}
      <div className="absolute inset-0 bg-warm-dark opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark opacity-80" aria-hidden="true" />
      {/* Restrained edge-lit orange radial horizon glow — never centered full-bleed */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(58% 36% at 82% 86%, rgba(242,78,30,0.28) 0%, rgba(242,78,30,0.08) 44%, rgba(0,0,0,0) 76%), radial-gradient(40% 30% at 10% 18%, rgba(242,78,30,0.10) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* Subtle horizon architectural silhouette */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, #000000 18%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 film-grain" aria-hidden="true" />

      {/* Main hero content */}
      <div className="intent-container relative z-10 flex flex-1 flex-col items-center justify-center py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: INTENT_EASE }}
        >
          <SectionEyebrow>AI-Powered Creative &amp; Digital Product Studio</SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.06, ease: INTENT_EASE }}
          className="mt-7 max-w-4xl text-[clamp(2.65rem,6.2vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[#F5F5F5]"
        >
          Websites &amp; digital products designed for{" "}
          <span className="font-editorial font-normal text-[#FFD1C2]">
            conversion
          </span>
          , not just looks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease: INTENT_EASE }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]"
        >
          We partner with startups, D2C brands, fitness studios, and growing businesses to build sharp websites, digital products, brand systems, and studio-grade AI visuals — fast, without cutting corners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: INTENT_EASE }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row"
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

      {/* Sitemap Section 3: Proof Bar anchored cleanly at hero transition */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3, ease: INTENT_EASE }}
        className="relative z-10"
      >
        <ProofBar items={HOME_PROOF_BAR} variant="hero" />
      </motion.div>
    </section>
  );
}
