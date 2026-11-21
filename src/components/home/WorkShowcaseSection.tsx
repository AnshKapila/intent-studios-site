"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants, VIEWPORT_CONFIG } from "@/lib/motion";

export function WorkShowcaseSection() {
  const [featured, ...secondary] = getFeaturedProjects();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#111111] py-20 sm:py-28">
      <div className="intent-container space-y-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow>Selected Work</SectionEyebrow>
            <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
              One featured build — and the systems behind our{" "}
              <span className="font-editorial font-normal text-[#FFD1C2]">
                recent work.
              </span>
            </h2>
          </div>
          <Button href="/work/" variant="secondary" size="md" showArrow>
            See All 11 Case Study Slots
          </Button>
        </div>

        {/* Wireframe Block 3: Editorial Featured Showcase with giant subtle watermark behind centered frame */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
        >
          <Link
            href={`/work/${featured.slug}/`}
            className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 lg:p-14 transition-[border-color] duration-200 hover:border-[#F24E1E]/40"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
            <div className="absolute inset-0 glow-edge-top-right opacity-65" aria-hidden="true" />

            {/* Giant low-opacity architectural watermark (Wireframe Block 3 signature) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden text-center"
            >
              <span className="whitespace-nowrap font-editorial text-[clamp(4.5rem,14vw,12rem)] leading-none text-white/[0.045]">
                {featured.title} · {featured.title}
              </span>
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-[20px] shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
                <ProjectVisualFrame
                  project={featured}
                  aspect="wide"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-[#F24E1E]/12 px-3 py-1 font-semibold text-[#FFD1C2] border border-[#F24E1E]/25">
                      Featured Project
                    </span>
                    <span className="text-[#A0A0A0]">{featured.industryLabel}</span>
                    <span className="text-white/25">·</span>
                    <span className="text-[#A0A0A0]">{featured.serviceName}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                    {featured.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0]">
                    {featured.outcomeTitle}
                  </p>
                </div>

                <span className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-[#F5F5F5] transition-[background-color,border-color] duration-200 group-hover:border-[#F24E1E] group-hover:bg-[#F24E1E] group-hover:text-white">
                  Read Case Study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Two Smaller Featured Projects (Sitemap Section 5 requirement) */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0A0A0A] p-5 transition-[border-color,transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#0E0E0E]"
            >
              <div className="overflow-hidden rounded-[16px]">
                <ProjectVisualFrame
                  project={project}
                  aspect="wide"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-between gap-4 px-1">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#A0A0A0]">
                    <span>{project.industryLabel}</span>
                    <span className="text-[#FFD1C2]">{project.serviceName}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {project.outcomeTitle}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3.5 text-xs font-semibold text-[#F5F5F5]">
                  <span>Explore project</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#F24E1E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
