"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHOTOS, type LocalPhotoAsset } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { INTENT_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AudienceTab {
  index: string;
  name: string;
  href: string;
  description: string;
  focusLabel: string;
  focusValue: string;
  timeline: string;
  photo: LocalPhotoAsset;
}

const AUDIENCE_TABS: AudienceTab[] = [
  {
    index: "01",
    name: "Fitness & Wellness",
    href: "/who-we-help/fitness-wellness/",
    description:
      "Performance gyms, boutique studios, and recovery clubs whose in-person experience outpaces their digital presence. We turn local and Instagram attention into frictionless trial bookings.",
    focusLabel: "Primary focus",
    focusValue: "Mobile trial booking & local authority",
    timeline: "3 – 5 weeks",
    photo: PHOTOS.fitnessGym,
  },
  {
    index: "02",
    name: "D2C & Product Brands",
    href: "/who-we-help/d2c-brands/",
    description:
      "Consumer product founders tired of looking like every other ad in the feed. We pair distinct brand worlds and art-directed AI visuals with high-converting storefronts built for mobile checkout.",
    focusLabel: "Primary focus",
    focusValue: "Storefront UX, identity & campaign visuals",
    timeline: "4 – 6 weeks",
    photo: PHOTOS.cosmeticBottle,
  },
  {
    index: "03",
    name: "Startups & SaaS",
    href: "/who-we-help/",
    description:
      "Early-stage and Series A teams that need senior product UI, design systems, and clear positioning sites shipped at startup speed — without slow agency overhead or endless handoff drift.",
    focusLabel: "Primary focus",
    focusValue: "Product UI/UX, design systems & launch sites",
    timeline: "4 – 6 weeks",
    photo: PHOTOS.darkLightTunnel,
  },
  {
    index: "04",
    name: "Service Businesses",
    href: "/who-we-help/",
    description:
      "Consultancies, studios, and advisory practices that win clients offline through reputation but lose warm leads online to outdated websites that undersell their actual caliber.",
    focusLabel: "Primary focus",
    focusValue: "Trust architecture & discovery call funnels",
    timeline: "3 – 4 weeks",
    photo: PHOTOS.studioNotebook,
  },
];

/**
 * Scarlet-style 3-column interactive tabbed showcase adapted for "Who We Help"
 * Replaces "Honest fit check before we start" on the homepage.
 * Strictly follows DESIGN.md (#FFFFFF / #111111, 16px/12px radii, .type-h2/.type-h3/.type-p2, Forma Kinetic Pill buttons).
 */
export function WhoWeHelpScarletSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = AUDIENCE_TABS[activeIdx];

  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-[#111111] dark:bg-[#181817] text-white py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container space-y-12">
        {/* Scarlet 3-zone Header Row */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <SectionEyebrow tone="dark">Who we help</SectionEyebrow>
          </div>
          <div className="lg:col-span-5">
            <h2
              id="who-we-help-heading"
              className="type-h2 text-white"
            >
              Built for teams ready to{" "}
              <span className="font-editorial font-normal text-[#FFD1C2]">
                stand out.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="type-p2 text-[#A3A09A]">
              Four categories where sharp positioning, conversion craft, and
              practical AI make the biggest measurable difference.
            </p>
          </div>
        </div>

        {/* Scarlet 3-Column Interactive Showcase: Left Tabs | Middle Detail Card | Right Visual Preview */}
        <div className="grid gap-4 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column (4 cols): Numbered Vertical Selector + Bottom CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div
              role="tablist"
              aria-label="Industries we serve"
              className="flex flex-col gap-1.5"
            >
              {AUDIENCE_TABS.map((tab, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3.5 rounded-[12px] px-4 py-3.5 text-left transition-all duration-200",
                      isActive
                        ? "bg-white/[0.1] text-white border border-white/15"
                        : "bg-transparent text-[#A3A09A] border border-transparent hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "tabular-nums text-[13px] font-medium transition-colors",
                        isActive ? "text-[#F24E1E]" : "text-[#7A7772]"
                      )}
                    >
                      {tab.index}.
                    </span>
                    <span className="text-[16px] font-medium tracking-[-0.015em]">
                      {tab.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                href={current.href}
                variant="primary"
                size="lg"
                showArrow
                className="w-full justify-between"
              >
                Explore {current.name}
              </Button>
            </div>
          </div>

          {/* Middle Column (4 cols): Bordered Detail & Metadata Card */}
          <div className="lg:col-span-4 flex flex-col justify-between overflow-hidden rounded-[16px] border border-white/12 bg-[#181817] dark:bg-[#1F1E1C] p-6 sm:p-7 min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: INTENT_EASE }}
                className="flex h-full flex-col justify-between gap-8"
              >
                <div className="space-y-4">
                  <span className="type-p3 inline-flex items-center gap-2 text-[#FFD1C2]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F24E1E]" aria-hidden="true" />
                    {current.index} · {current.name}
                  </span>
                  <p className="type-p2 text-white/90">
                    {current.description}
                  </p>
                </div>

                {/* Scarlet Bottom Metadata Footer Bar */}
                <div className="space-y-3 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-3 text-[13px]">
                    <span className="text-[#A3A09A]">{current.focusLabel}</span>
                    <span className="text-right font-medium text-white">
                      {current.focusValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-[13px]">
                    <span className="text-[#A3A09A]">Typical sprint</span>
                    <span className="tabular-nums font-medium text-[#FFD1C2]">
                      {current.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (4 cols): Paired Rounded Visual Preview */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-[16px] border border-white/12 bg-[#181817] min-h-[280px] lg:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.photo.src}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: INTENT_EASE }}
                className="absolute inset-0"
              >
                <img
                  src={current.photo.src}
                  srcSet={current.photo.srcSet}
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  width={current.photo.width}
                  height={current.photo.height}
                  alt={current.photo.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: current.photo.objectPosition || "50% 50%" }}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
