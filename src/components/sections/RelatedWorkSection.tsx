import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCaseStudy } from "@/data/projects";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface RelatedWorkSectionProps {
  projects: ProjectCaseStudy[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  showAllLink?: boolean;
  serviceLink?: { label: string; href: string };
  surface?: "dark" | "deep";
}

export function RelatedWorkSection({
  projects,
  eyebrow = "Selected Work",
  heading = "Related projects.",
  intro,
  showAllLink = true,
  serviceLink,
  surface = "dark",
}: RelatedWorkSectionProps) {
  return (
    <section
      className={cn(
        "border-t border-white/10 py-20 sm:py-24",
        surface === "deep" ? "bg-[#000000]" : "bg-[#111111]"
      )}
    >
      <div className="intent-container space-y-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F5F5F5]">
              {heading}
            </h2>
            {intro && <p className="text-base text-[#A0A0A0]">{intro}</p>}
          </div>

          <div className="flex flex-wrap gap-3">
            {serviceLink && (
              <Button href={serviceLink.href} variant="secondary" size="md" showArrow>
                {serviceLink.label}
              </Button>
            )}
            {showAllLink && (
              <Button href="/work/" variant="secondary" size="md" showArrow>
                See All Work
              </Button>
            )}
          </div>
        </div>

        <div
          className={cn(
            "grid gap-6",
            projects.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] p-4 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/25"
            >
              <ProjectVisualFrame project={project} aspect="square" />

              <div className="flex flex-1 flex-col justify-between gap-4 px-1 pt-5 pb-1">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[13px] text-[#A0A0A0]">
                    <span>{project.industryLabel}</span>
                    <span className="text-[#FFD1C2] font-medium">{project.serviceName}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#A0A0A0] line-clamp-2">
                    {project.outcomeTitle}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[14px] font-medium text-[#F5F5F5]">
                  <span>View case study</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#F24E1E] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
