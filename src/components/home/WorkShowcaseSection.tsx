"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { INTENT_EASE, VIEWPORT_CONFIG } from "@/lib/motion";

export function WorkShowcaseSection() {
  const [featured, ...secondary] = getFeaturedProjects();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#111111] py-20 sm:py-24">
      <div className="intent-container space-y-10">
        {/* Clean, proportional section header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#F5F5F5]">
              Featured studio work across fitness, D2C, and software.
            </h2>
          </div>
          <Button href="/work/" variant="secondary" size="md" showArrow>
            See all work
          </Button>
        </div>

        {/* Wireframe Block 3 + Taste Skill dealt moment: picture-develops */}
        <Link
          href={`/work/${featured.slug}/`}
          className="group relative block overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/25"
        >
          {/* Subtle architectural watermark behind featured photograph */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 select-none overflow-hidden text-center"
          >
            <span className="whitespace-nowrap font-editorial text-[clamp(4rem,12vw,10rem)] leading-none text-white/[0.04]">
              {featured.title} · {featured.title}
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Taste Skill dealt moment: picture-develops (film develop settle once on view) */}
            <motion.div
              initial={{ opacity: 0.72, scale: 1.03, filter: "grayscale(65%) contrast(95%)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%) contrast(100%)" }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 1.15, ease: INTENT_EASE }}
              className="overflow-hidden rounded-[12px]"
            >
              <ProjectVisualFrame project={featured} aspect="wide" />
            </motion.div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#A0A0A0]">
                  <span className="text-[#FFD1C2] font-medium">{featured.serviceName}</span>
                  <span className="text-white/25">·</span>
                  <span>{featured.industryLabel}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
                  {featured.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#A0A0A0]">
                  {featured.outcomeTitle}
                </p>
              </div>

              <span className="inline-flex h-[44px] shrink-0 items-center gap-2 text-[15px] font-medium text-[#F5F5F5] group-hover:text-[#FFD1C2] transition-colors duration-150">
                View case study
                <ArrowRight
                  className="h-4 w-4 text-[#F24E1E] transition-transform duration-150 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </Link>

        {/* Two Smaller Featured Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/25"
            >
              <ProjectVisualFrame project={project} aspect="wide" />

              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[13px] text-[#A0A0A0]">
                    <span>{project.industryLabel}</span>
                    <span className="text-[#FFD1C2] font-medium">{project.serviceName}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#A0A0A0]">
                    {project.outcomeTitle}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3.5 text-[14px] font-medium text-[#F5F5F5]">
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
