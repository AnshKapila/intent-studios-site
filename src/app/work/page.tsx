import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { WorkFilterGrid } from "@/components/work/WorkFilterGrid";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Intent Studios’ 11 case study slots across websites, digital products, brand identity systems, and AI-led content.",
  alternates: {
    canonical: `${SITE.url}/work/`,
  },
};

export default function WorkPage() {
  const featuredThree = getFeaturedProjects();

  return (
    <>
      {/* 1. Intro: H1 and one line */}
      <section className="relative overflow-hidden bg-white dark:bg-[#000000] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-5">
          <SectionEyebrow>Portfolio &amp; case studies</SectionEyebrow>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            Work designed to move{" "}
            <span className="font-editorial font-normal text-[#F24E1E] dark:text-[#FFD1C2]">
              real business metrics.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
            Websites, digital products, brand identities, and art-directed visual campaigns built for startups, D2C brands, fitness studios, and service businesses.
          </p>
        </div>
      </section>

      {/* 2. Featured Three */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 sm:py-20">
        <div className="intent-container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.025em] text-[#111111] dark:text-[#F5F5F5]">
              Featured three
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredThree.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}/`}
                className="group flex flex-col overflow-hidden rounded-[16px] border border-white/12 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-4 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/25"
              >
                <ProjectVisualFrame project={project} aspect="square" />
                <div className="mt-5 flex flex-1 flex-col justify-between gap-3 px-1 pb-1">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[13px] text-[#F24E1E] dark:text-[#FFD1C2]">
                      <span>{project.serviceName}</span>
                      <span className="text-[#52504C] dark:text-[#A0A0A0]">{project.industryLabel}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111] dark:text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-[#52504C] dark:text-[#A0A0A0] line-clamp-2">{project.outcomeTitle}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] dark:text-[#F5F5F5] pt-2">
                    Read case study
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filters & Full 11-Project Grid */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#000000] py-16 sm:py-24">
        <div className="intent-container space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            All projects
          </h2>
          <Suspense fallback={<div className="h-48 rounded-2xl bg-[#FAF9F7] dark:bg-[#0A0A0A] border border-[#111111]/10 dark:border-white/10" />}>
            <WorkFilterGrid />
          </Suspense>
        </div>
      </section>

      {/* 4. Need something specific? */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-14">
        <div className="intent-container">
          <div className="flex flex-col gap-5 rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5 max-w-xl">
              <h2 className="text-xl font-semibold text-[#111111] dark:text-[#F5F5F5]">
                Need to see something specific to your category?
              </h2>
              <p className="text-sm text-[#52504C] dark:text-[#A0A0A0]">
                Some client builds live under NDA or in private product decks. Mention your industry on a discovery call and we will walk you through relevant examples live.
              </p>
            </div>
            <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow className="shrink-0">
              {SITE.primaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
