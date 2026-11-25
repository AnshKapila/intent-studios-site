"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { SERVICES, type ServiceItem, type ServiceSlug } from "@/data/services";
import { SERVICE_PHOTOS } from "@/data/media";
import { INDUSTRIES } from "@/data/industries";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

const SERVICE_TAGS: Record<ServiceSlug, string[]> = {
  "website-design": [
    "Marketing Sites",
    "E-commerce",
    "Conversion UX",
    "Next.js & React",
    "Shopify",
    "CMS Architecture",
    "Technical SEO",
    "Motion Design",
  ],
  "product-design": [
    "Product UI/UX",
    "SaaS Interfaces",
    "Mobile Apps",
    "Design Systems",
    "Token Architecture",
    "Interactive Prototypes",
    "Onboarding Flows",
    "Frontend Build",
  ],
  "brand-identity": [
    "Brand Strategy",
    "Visual Identity",
    "Logo Systems",
    "Typography",
    "Color Architecture",
    "Brand Guidelines",
    "Packaging Direction",
    "Digital Collateral",
  ],
  "content-social": [
    "AI Product Shoots",
    "Editorial Visuals",
    "Campaign Kits",
    "Social Systems",
    "Carousel Design",
    "Launch Assets",
    "Art Direction",
    "Color Grading",
  ],
};

function StickyServiceCard({
  service,
  index,
  total,
  stackProgress,
  isHighlighted,
  isDimmed,
}: {
  service: ServiceItem;
  index: number;
  total: number;
  stackProgress: MotionValue<number>;
  isHighlighted: boolean;
  isDimmed: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const photo = SERVICE_PHOTOS[service.slug];
  const tags = SERVICE_TAGS[service.slug];
  const isLast = index === total - 1;

  // Map this card's exact slice of the non-sticky stack scroll progress
  const segment = 1 / Math.max(1, total - 1);
  const start = index * segment;
  const end = Math.min(1, (index + 1) * segment);

  const scale = useTransform(stackProgress, [start, end], [1, isLast ? 1 : 0.74]);
  const rotateX = useTransform(stackProgress, [start, end], [0, isLast ? 0 : 48]);
  const opacity = useTransform(
    stackProgress,
    [start, start + (end - start) * 0.75, end],
    [1, 1, isLast ? 1 : 0.45]
  );

  return (
    <div
      id={`service-${service.index}`}
      style={{ zIndex: index + 1 }}
      className={cn(
        "relative w-full lg:sticky lg:top-[84px]",
        isDimmed ? "opacity-45 transition-opacity duration-200" : "opacity-100 transition-opacity duration-200"
      )}
    >
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                transformPerspective: 2000,
                scale,
                rotateX,
                opacity,
                transformOrigin: "center top",
              }
        }
        className={cn(
          "w-full overflow-hidden rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#1F1E1C] p-4 sm:p-5 will-change-transform lg:h-[600px] shadow-[0_12px_36px_rgba(17,17,17,0.06)] dark:shadow-none",
          isHighlighted ? "ring-1 ring-[#F24E1E]/60" : ""
        )}
      >
        <div className="grid h-full gap-4 lg:grid-cols-2">
          {/* Left Column: Index pinned top-left, content + tags + CTA anchored bottom-left with guaranteed breathing room */}
          <div className="flex h-full min-h-0 flex-col justify-between gap-6 p-4 sm:p-6 lg:p-8">
            <div className="flex shrink-0 items-start justify-between gap-4">
              <span className="tabular-nums text-[32px] sm:text-[40px] font-medium leading-none tracking-[-0.03em] text-[#111111] dark:text-white">
                {service.index}
              </span>
              <span className="type-p3 pt-1 text-[#52504C] dark:text-[#A3A09A]">
                {service.timeline}
              </span>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="type-h3 text-[#111111] dark:text-white">
                  {service.name}
                </h3>
                <p className="type-p2 max-w-lg text-[#52504C] dark:text-[#A3A09A]">
                  {service.outcomeLine}
                </p>
              </div>

              {/* 8 Tag Pills */}
              <div className="flex max-w-[512px] flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[#111111]/[0.07] dark:bg-white/[0.12] px-3 py-1.5 text-[12px] font-medium leading-none text-[#111111] dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Unified Card CTA + Website Type sub-links */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button href={service.href} variant="secondary" size="md">
                  {`Explore ${service.shortName}`}
                </Button>
                {service.hasTypePages && (
                  <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#52504C] dark:text-[#A3A09A]">
                    <Link
                      href="/services/website-design/ecommerce/"
                      className="underline decoration-[#111111]/25 dark:decoration-white/20 underline-offset-4 hover:text-[#111111] dark:hover:text-white hover:decoration-[#F24E1E] transition-colors"
                    >
                      E-commerce
                    </Link>
                    <Link
                      href="/services/website-design/business/"
                      className="underline decoration-[#111111]/25 dark:decoration-white/20 underline-offset-4 hover:text-[#111111] dark:hover:text-white hover:decoration-[#F24E1E] transition-colors"
                    >
                      Business sites
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Equal-height rounded photograph */}
          <div className="relative h-[260px] sm:h-[340px] lg:h-full w-full overflow-hidden rounded-[12px] bg-[#111111]">
            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes="(max-width: 1023px) 100vw, 48vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              data-source={photo.source}
              data-subject={photo.subject}
              style={{ objectPosition: photo.objectPosition || "50% 50%" }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesDeckSection() {
  const [selectedGoal, setSelectedGoal] = useState<ServiceSlug | "all">("all");
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 84px", "end end"],
  });

  return (
    <section
      id="services-deck"
      className="relative overflow-visible border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container space-y-8 sm:space-y-12">
        {/* Unified 3-part Header Row + Goal Chips */}
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <SectionEyebrow>Services</SectionEyebrow>

            <h2 className="type-h2 text-[#111111] dark:text-white lg:text-center">
              Services{" "}
              <span className="font-editorial font-normal">we offer.</span>
            </h2>

            <Button href="/services/" variant="primary" size="md" showArrow>
              See All Services
            </Button>
          </div>

          {/* Interactive Goal Chips */}
          <div
            role="group"
            aria-label="Filter services by business goal"
            className="flex flex-wrap items-center justify-start lg:justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setSelectedGoal("all")}
              aria-pressed={selectedGoal === "all"}
              className={cn(
                "h-[36px] rounded-full px-3.5 text-[13px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                selectedGoal === "all"
                  ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                  : "border-[#111111]/12 dark:border-white/15 bg-white dark:bg-[#111111] text-[#52504C] dark:text-white/65 hover:border-[#111111]/30 dark:hover:border-white/30 hover:text-[#111111] dark:hover:text-white"
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
                    "h-[36px] rounded-full px-3.5 text-[13px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                    active
                      ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                      : "border-[#111111]/12 dark:border-white/15 bg-white dark:bg-[#111111] text-[#52504C] dark:text-white/65 hover:border-[#111111]/30 dark:hover:border-white/30 hover:text-[#111111] dark:hover:text-white"
                  )}
                >
                  {service.goalLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky 3D Perspective Stacking Card Deck */}
        <div ref={stackRef} className="relative flex flex-col gap-6">
          {SERVICES.map((service, idx) => (
            <StickyServiceCard
              key={service.slug}
              service={service}
              index={idx}
              total={SERVICES.length}
              stackProgress={scrollYProgress}
              isHighlighted={selectedGoal === service.slug}
              isDimmed={selectedGoal !== "all" && selectedGoal !== service.slug}
            />
          ))}
        </div>
      </div>

      {/* Dedicated Industry Playbooks container placed below the Services deck */}
      <div className="intent-container mt-8">
        <div className="flex flex-col gap-4 rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#111111] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-[13px] font-medium text-[#52504C] dark:text-[#A0A0A0]">
              Dedicated industry playbooks
            </p>
            <p className="text-[15px] text-[#111111] dark:text-[#F5F5F5]">
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
