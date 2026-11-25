"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { getProjectPhoto } from "@/data/media";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function WorkShowcaseSection() {
  // 2x2 symmetric Scarlet-style editorial grid (4 distinct studio case studies)
  const showcaseProjects = PROJECTS.slice(0, 4);

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#111111] py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container space-y-12">
        {/* Header Row: Left heading + subheading, Right single CTA */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4 max-w-xl">
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2
              id="selected-work-heading"
              className="type-h2 text-[#111111] dark:text-white"
            >
              Selected{" "}
              <span className="font-editorial font-normal text-[#52504C] dark:text-[#A3A09A]">
                Work.
              </span>
            </h2>
            <p className="type-p2 text-[#52504C] dark:text-[#A3A09A]">
              Explore how Intent Studios helps ambitious brands turn digital
              presence into measurable conversion.
            </p>
          </div>

          <Button href="/work/" variant="secondary" size="md" showArrow>
            View all work
          </Button>
        </div>

        {/* Scarlet-Style 2-Column Symmetric 4:3 Full-Bleed Grid */}
        <div className="grid gap-3 md:grid-cols-2">
          {showcaseProjects.map((project) => {
            const photo = getProjectPhoto(project.slug);
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}/`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#181817] focus-visible:outline-2 focus-visible:outline-[#F24E1E]"
              >
                {/* Full-bleed photograph with Scarlet 1.07x smooth hover zoom */}
                <img
                  src={photo.src}
                  srcSet={photo.srcSet}
                  sizes="(max-width: 767px) 100vw, 48vw"
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  data-source={photo.source}
                  data-subject={photo.subject}
                  style={{ objectPosition: photo.objectPosition || "50% 50%" }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />

                {/* Bottom-up contrast scrim (Scarlet lower-25% mask) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(17,17,17,0.78) 0%, rgba(17,17,17,0.28) 32%, rgba(17,17,17,0) 60%)",
                  }}
                />

                {/* Bottom-left title + vertical meta -> "View project →" hover swap */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                  <h3 className="type-h3 text-white">{project.title}</h3>

                  <div className="mt-1 h-[22px] overflow-hidden text-[14px] leading-[22px]">
                    <span className="block text-white/75 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      {project.industryLabel} · {project.serviceName}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 font-medium text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
                    >
                      View project
                      <ArrowRight className="h-3.5 w-3.5 text-[#F24E1E]" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
