"use client";

import { useState } from "react";
import { PHOTOS, type LocalPhotoAsset } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AudienceTab {
  index: string;
  name: string;
  href: string;
  description: string;
  focusValue: string;
  timeline: string;
  photo: LocalPhotoAsset;
}

const AUDIENCE_TABS: AudienceTab[] = [
  {
    index: "1",
    name: "Fitness & Wellness",
    href: "/who-we-help/fitness-wellness/",
    description:
      "Performance gyms, boutique studios, and recovery clubs whose in-person experience outpaces their digital presence. We turn local and Instagram attention into frictionless trial bookings.",
    focusValue: "Mobile trial booking & local authority",
    timeline: "3 – 5 weeks",
    photo: PHOTOS.fitnessGym,
  },
  {
    index: "2",
    name: "D2C & Product Brands",
    href: "/who-we-help/d2c-brands/",
    description:
      "Consumer product founders tired of looking like every other ad in the feed. We pair distinct brand worlds and art-directed AI visuals with high-converting storefronts built for mobile checkout.",
    focusValue: "Storefront UX, identity & campaign visuals",
    timeline: "4 – 6 weeks",
    photo: PHOTOS.cosmeticBottle,
  },
  {
    index: "3",
    name: "Startups & SaaS",
    href: "/who-we-help/",
    description:
      "Early-stage and Series A teams that need senior product UI, design systems, and clear positioning sites shipped at startup speed — without slow agency overhead or handoff drift.",
    focusValue: "Product UI/UX, design systems & launch sites",
    timeline: "4 – 6 weeks",
    photo: PHOTOS.darkLightTunnel,
  },
  {
    index: "4",
    name: "Service Businesses",
    href: "/who-we-help/",
    description:
      "Consultancies, studios, and advisory practices that win clients offline through reputation but lose warm leads online to outdated websites that undersell their actual caliber.",
    focusValue: "Trust architecture & discovery call funnels",
    timeline: "3 – 4 weeks",
    photo: PHOTOS.studioNotebook,
  },
];

/**
 * Faithful Scarlet-inspired 3-column interactive vertical-sliding showcase in Light Theme (with Dark Mode parity)
 * - Hover or click any numbered row (1–4) to vertically slide BOTH the middle detail card and right visual preview
 * - Generous spacing, hairline metadata bar, and DESIGN.md tokens (#FFFFFF / #111111, 16px/12px radii, .type-h2/.type-p2)
 */
export function WhoWeHelpScarletSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = AUDIENCE_TABS[activeIdx];

  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#181817] text-[#111111] dark:text-white py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container space-y-12">
        {/* Scarlet 3-zone Editorial Header */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <SectionEyebrow>Who we help</SectionEyebrow>
          </div>
          <div className="lg:col-span-5">
            <h2
              id="who-we-help-heading"
              className="type-h2 text-[#111111] dark:text-white"
            >
              Who we{" "}
              <span className="font-editorial font-normal">build for.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="type-p2 text-[#52504C] dark:text-[#A3A09A]">
              Four categories where sharp positioning, conversion craft, and
              practical AI make the biggest measurable difference.
            </p>
          </div>
        </div>

        {/* Scarlet 3-Column Interactive Vertical-Slide Showcase */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column (4 cols): Numbered Vertical Selector (hover + click) + Full-Width CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            <div
              role="tablist"
              aria-label="Industries we build for"
              className="flex flex-col gap-2"
            >
              {AUDIENCE_TABS.map((tab, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "group flex w-full cursor-pointer items-center justify-between rounded-[12px] px-5 py-4 text-left",
                      "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "bg-[#F7F4F1] dark:bg-[#1F1E1C] text-[#111111] dark:text-white border border-[#111111]/12 dark:border-white/15"
                        : "bg-transparent text-[#7C756D] dark:text-[#7A7772] border border-transparent hover:bg-[#F7F4F1]/70 dark:hover:bg-white/[0.04] hover:text-[#111111] dark:hover:text-white"
                    )}
                  >
                    <span className="flex items-center gap-3.5">
                      <span
                        className={cn(
                          "tabular-nums text-[14px] font-medium transition-colors",
                          isActive
                            ? "text-[#F24E1E]"
                            : "text-[#7C756D] dark:text-[#7A7772] group-hover:text-[#111111] dark:group-hover:text-white"
                        )}
                      >
                        {tab.index}.
                      </span>
                      <span className="text-[17px] font-medium tracking-[-0.015em]">
                        {tab.name}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all duration-200",
                        isActive ? "bg-[#F24E1E] scale-100" : "bg-transparent scale-0"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            <div>
              <Button
                href={current.href}
                variant="primary"
                size="lg"
                showArrow
                className="w-full"
              >
                Explore {current.name}
              </Button>
            </div>
          </div>

          {/* Middle Column (4 cols): Vertical-Sliding Bordered Detail Card (Scarlet exact track mechanic) */}
          <div className="lg:col-span-4 relative h-[380px] lg:h-[440px] overflow-hidden rounded-[16px] border border-[#111111]/12 dark:border-white/12 bg-[#F7F4F1] dark:bg-[#1F1E1C]">
            <div
              className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(0, -${activeIdx * 100}%, 0)` }}
            >
              {AUDIENCE_TABS.map((tab) => (
                <div
                  key={tab.name}
                  className="flex h-full w-full flex-col justify-between p-7 sm:p-8"
                >
                  <div className="space-y-4">
                    <span className="type-p3 inline-flex items-center gap-2 text-[#52504C] dark:text-[#A3A09A]">
                      <span className="h-[1px] w-5 bg-[#F24E1E]" aria-hidden="true" />
                      0{tab.index} · {tab.name}
                    </span>
                    <p className="type-p2 text-[#111111] dark:text-white/90">
                      {tab.description}
                    </p>
                  </div>

                  {/* Scarlet Signature Bottom Metadata Bar */}
                  <div className="space-y-3.5 border-t border-[#111111]/10 dark:border-white/10 pt-5">
                    <div className="flex items-baseline justify-between gap-4 text-[13px]">
                      <span className="text-[#7C756D] dark:text-[#A3A09A] shrink-0">
                        Focus
                      </span>
                      <span className="text-right font-medium text-[#111111] dark:text-white">
                        {tab.focusValue}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-[#111111]/10 dark:border-white/10 pt-3.5 text-[13px]">
                      <span className="text-[#7C756D] dark:text-[#A3A09A]">
                        Timeline
                      </span>
                      <span className="tabular-nums font-medium text-[#111111] dark:text-[#FFD1C2]">
                        {tab.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Paired Vertical-Sliding Visual Preview (syncs with middle card) */}
          <div className="lg:col-span-4 relative h-[320px] lg:h-[440px] overflow-hidden rounded-[16px] border border-[#111111]/12 dark:border-white/12 bg-[#181817]">
            <div
              className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(0, -${activeIdx * 100}%, 0)` }}
            >
              {AUDIENCE_TABS.map((tab) => (
                <div key={tab.name} className="relative h-full w-full overflow-hidden">
                  <img
                    src={tab.photo.src}
                    srcSet={tab.photo.srcSet}
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    width={tab.photo.width}
                    height={tab.photo.height}
                    alt={tab.photo.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: tab.photo.objectPosition || "50% 50%" }}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
