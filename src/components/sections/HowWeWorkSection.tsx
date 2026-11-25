"use client";

import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { PROCESS_STAGES, SITE } from "@/data/site";
import { PHOTOS, type LocalPhotoAsset } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { FitListSection } from "./FitListSection";
import { cn } from "@/lib/utils";

interface StepVisualTheme {
  lightBg: string;
  darkBg: string;
  heightClass: string;
  arrowBgClass: string;
  photo: LocalPhotoAsset;
  scrollSlice: [number, number];
  initialOffsetY: number;
}

const STEP_THEMES: StepVisualTheme[] = [
  {
    lightBg: "linear-gradient(170deg, #E1F0E7 0%, #F7FBF8 100%)",
    darkBg: "linear-gradient(170deg, #16261E 0%, #0E1511 100%)",
    heightClass: "lg:min-h-[296px]",
    arrowBgClass: "bg-[#B5D49A] text-[#1E2A14]",
    photo: PHOTOS.studioNotebook,
    scrollSlice: [0.0, 0.38],
    initialOffsetY: 72,
  },
  {
    lightBg: "linear-gradient(170deg, #FCE6D4 0%, #FFF8F2 100%)",
    darkBg: "linear-gradient(170deg, #2B1C12 0%, #16100C 100%)",
    heightClass: "lg:min-h-[356px]",
    arrowBgClass: "bg-[#F4B98A] text-[#3A1E0A]",
    photo: PHOTOS.stackedBooks,
    scrollSlice: [0.16, 0.56],
    initialOffsetY: 96,
  },
  {
    lightBg: "linear-gradient(170deg, #DEECF5 0%, #F7FAFD 100%)",
    darkBg: "linear-gradient(170deg, #13212C 0%, #0D1318 100%)",
    heightClass: "lg:min-h-[416px]",
    arrowBgClass: "bg-[#9EC7E3] text-[#102636]",
    photo: PHOTOS.sunlitLamp,
    scrollSlice: [0.32, 0.74],
    initialOffsetY: 120,
  },
  {
    lightBg: "linear-gradient(170deg, #E6E1F7 0%, #F9F8FD 100%)",
    darkBg: "linear-gradient(170deg, #211B30 0%, #120F1A 100%)",
    heightClass: "lg:min-h-[476px]",
    arrowBgClass: "bg-[#111111] text-white dark:bg-[#F24E1E] dark:text-white",
    photo: PHOTOS.darkLightTunnel,
    scrollSlice: [0.48, 0.92],
    initialOffsetY: 144,
  },
];

function StaircaseProcessCard({
  step,
  title,
  summary,
  timeline,
  milestone,
  theme,
  scrollProgress,
}: {
  step: string;
  title: string;
  summary: string;
  timeline?: string;
  milestone: string;
  theme: StepVisualTheme;
  scrollProgress: MotionValue<number>;
}) {
  const prefersReducedMotion = useReducedMotion();

  const rawY = useTransform(
    scrollProgress,
    theme.scrollSlice,
    [theme.initialOffsetY, 0]
  );
  const rawOpacity = useTransform(scrollProgress, theme.scrollSlice, [0.15, 1]);

  const y = useSpring(rawY, { stiffness: 130, damping: 24, mass: 0.55 });
  const opacity = useSpring(rawOpacity, { stiffness: 130, damping: 26, mass: 0.5 });

  return (
    <motion.article
      style={prefersReducedMotion ? undefined : { y, opacity }}
      className={cn(
        "group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px]",
        "border border-[#111111]/[0.07] dark:border-white/10",
        "p-6 will-change-transform cursor-default",
        "transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1.5 hover:border-[#111111]/20 dark:hover:border-white/25 hover:shadow-[0_24px_48px_-16px_rgba(17,17,17,0.22)]",
        theme.heightClass
      )}
    >
      {/* Resting solid/gradient color layer — Light Mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:opacity-0 group-hover:opacity-0"
        style={{ background: theme.lightBg }}
      />

      {/* Resting solid/gradient color layer — Dark Mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:opacity-100 dark:group-hover:opacity-0"
        style={{ background: theme.darkBg }}
      />

      {/* Hover background photograph + dark contrast scrim (fades in on hover, disappears on hover-out) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
      >
        <img
          src={theme.photo.src}
          srcSet={theme.photo.srcSet}
          sizes="(max-width: 1023px) 100vw, 25vw"
          width={theme.photo.width}
          height={theme.photo.height}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/60 to-black/38" />
      </div>

      {/* Top Row */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="tabular-nums text-[40px] font-medium leading-none tracking-[-0.045em] text-[#111111] dark:text-[#F5F5F5] transition-colors duration-300 group-hover:text-white">
          {step}
        </span>
        {timeline && (
          <span className="font-editorial pt-1 text-[20px] font-normal leading-[1.2] tracking-[-0.01em] text-[#6F6F6F] dark:text-[#A0A0A0] transition-colors duration-300 group-hover:text-white/85">
            {timeline}
          </span>
        )}
      </div>

      {/* Bottom Content Stack: Title + Description + Milestone Pill */}
      <div className="relative z-10 mt-10 flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-[23px] font-medium leading-[1.2] tracking-[-0.025em] text-[#111111] dark:text-[#F5F5F5] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-[#52504C] dark:text-[#A0A0A0] transition-colors duration-300 group-hover:text-white/85">
            {summary}
          </p>
        </div>

        {/* Taffy-style white floating milestone pill -> frosted glass on hover */}
        <div className="pt-1">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-transparent bg-white dark:bg-[#1C1C1C] py-[6px] pl-[7px] pr-[13px]",
              "text-[12.5px] font-medium leading-none text-[#1E1E1E] dark:text-[#F5F5F5]",
              "shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_24px_rgba(0,0,0,0.07)] dark:shadow-none",
              "transition-all duration-300",
              "group-hover:border-white/25 group-hover:bg-white/15 group-hover:text-white group-hover:backdrop-blur-md group-hover:shadow-none"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                theme.arrowBgClass,
                "group-hover:bg-[#F24E1E] group-hover:text-white"
              )}
            >
              <ArrowUp className="h-3 w-3 stroke-[2.4]" />
            </span>
            <span>{milestone}</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

interface HowWeWorkSectionProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  heading?: string;
  intro?: string;
  stageTimelines?: readonly string[];
  fitList?: { bestFit: readonly string[]; notAFit: readonly string[] };
  fitHeading?: string;
}

export function HowWeWorkSection({
  eyebrow = "How we work",
  showEyebrow = true,
  heading,
  intro = "Four focused steps, each one building on the last. Direct senior execution from strategy through launch.",
  stageTimelines,
  fitList,
  fitHeading,
}: HowWeWorkSectionProps) {
  const staircaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: staircaseRef,
    offset: ["start 0.92", "center 0.52"],
  });

  return (
    <section className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] py-20 sm:py-24 transition-colors duration-200">
      <div className="intent-container relative z-10">
        {/* Taffy-inspired Centered Header */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
          {showEyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}

          <h2
            className={cn(
              showEyebrow ? "mt-5" : "mt-0",
              "text-[clamp(2.1rem,3.8vw,3.1rem)] font-medium leading-[1.06] tracking-[-0.04em] text-[#111111] dark:text-[#F5F5F5]"
            )}
          >
            {heading ? (
              heading
            ) : (
              <>
                From first call to
                <br className="hidden sm:inline" /> shipped product{" "}
                <span className="font-editorial font-normal tracking-[-0.02em]">
                  in four steps.
                </span>
              </>
            )}
          </h2>

          <p className="mt-5 max-w-[500px] text-[16px] sm:text-[17px] leading-[1.55] text-[#52504C] dark:text-[#A0A0A0]">
            {intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={SITE.primaryCta.href}
              variant="primary"
              size="md"
              showArrow
              className="rounded-full px-6"
            >
              {SITE.primaryCta.label}
            </Button>
            <Button
              href="/services/"
              variant="secondary"
              size="md"
              className="rounded-full px-6"
            >
              View services
            </Button>
          </div>
        </div>

        {/* 4-Step Ascending Staircase Grid — sequential bottom-up scroll entry + hover image reveal */}
        <div
          ref={staircaseRef}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
        >
          {PROCESS_STAGES.map((stage, idx) => (
            <StaircaseProcessCard
              key={stage.step}
              step={stage.step}
              title={stage.title}
              summary={stage.summary}
              timeline={stageTimelines?.[idx]}
              milestone={stage.milestone}
              theme={STEP_THEMES[idx]}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Coordinated Best Fit / Not a Fit lists */}
        {fitList && (
          <div className="mt-16 border-t border-[#111111]/10 dark:border-white/10 pt-14">
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
