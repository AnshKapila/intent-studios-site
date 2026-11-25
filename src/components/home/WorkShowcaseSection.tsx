"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { Button } from "@/components/ui/Button";
import { INTENT_EASE, VIEWPORT_CONFIG } from "@/lib/motion";

export function WorkShowcaseSection() {
  const [featured, ...secondary] = getFeaturedProjects();

  return (
    <section className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-20 sm:py-24 transition-colors duration-200">
      <div className="intent-container space-y-10">
        {/* Clean, proportional section header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
              Featured studio work across fitness, D2C, and software.
            </h2>
          </div>
          <Button href="/work/" variant="secondary" size="md" showArrow>
            See all work
          </Button>
        </div>

        {/* Featured Project Card — 80vh height on desktop */}
        <Link
          href={`/work/${featured.slug}/`}
          className="group relative flex flex-col overflow-hidden rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] p-6 sm:p-8 lg:h-[80svh] lg:max-h-[80svh] transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-[#111111]/25 dark:hover:border-white/25"
        >
          {/* Subtle architectural watermark behind featured photograph */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 select-none overflow-hidden text-center"
          >
            <span className="whitespace-nowrap font-editorial text-[clamp(4rem,12vw,10rem)] leading-none text-[#111111]/[0.04] dark:text-white/[0.04]">
              {featured.title} · {featured.title}
            </span>
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col justify-between gap-5">
            {/* Taste Skill dealt moment: picture-develops */}
            <motion.div
              initial={{ opacity: 0.72, scale: 1.03, filter: "grayscale(65%) contrast(95%)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%) contrast(100%)" }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 1.15, ease: INTENT_EASE }}
              className="flex-1 min-h-0 overflow-hidden rounded-[12px]"
            >
              <ProjectVisualFrame
                project={featured}
                aspect="wide"
                className="h-full aspect-auto"
              />
            </motion.div>

            <div className="shrink-0 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1 max-w-xl">
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#52504C] dark:text-[#A0A0A0]">
                  <span className="text-[#F24E1E] dark:text-[#FFD1C2] font-medium">{featured.serviceName}</span>
                  <span className="text-[#111111]/25 dark:text-white/25">·</span>
                  <span>{featured.industryLabel}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#111111] dark:text-[#F5F5F5]">
                  {featured.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
                  {featured.outcomeTitle}
                </p>
              </div>

              <span className="inline-flex h-[44px] shrink-0 items-center gap-2 text-[15px] font-medium text-[#111111] dark:text-[#F5F5F5] group-hover:text-[#F24E1E] dark:group-hover:text-[#FFD1C2] transition-colors duration-150">
                View case study
                <ArrowRight
                  className="h-4 w-4 text-[#F24E1E] transition-transform duration-150 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </Link>

        {/* Two Smaller Featured Projects — each individual card 80vh height on desktop */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col justify-between gap-5 overflow-hidden rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] p-5 lg:h-[80svh] lg:max-h-[80svh] transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-[#111111]/25 dark:hover:border-white/25"
            >
              <div className="flex-1 min-h-0 overflow-hidden rounded-[12px]">
                <ProjectVisualFrame
                  project={project}
                  aspect="wide"
                  className="h-full aspect-auto"
                />
              </div>

              <div className="shrink-0 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[13px] text-[#52504C] dark:text-[#A0A0A0]">
                    <span>{project.industryLabel}</span>
                    <span className="text-[#F24E1E] dark:text-[#FFD1C2] font-medium">{project.serviceName}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111] dark:text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
                    {project.outcomeTitle}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 border-t border-[#111111]/10 dark:border-white/10 pt-3.5 text-[14px] font-medium text-[#111111] dark:text-[#F5F5F5]">
                  <span>View case study</span>
                  <ArrowRight
                    className="h-4 w-4 text-[#F24E1E] transition-transform duration-150 group-hover:translate-x-[3px]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
