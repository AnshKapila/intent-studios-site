"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type IndustrySlug } from "@/data/projects";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { cn } from "@/lib/utils";

const INDUSTRY_FILTERS: { slug: IndustrySlug; label: string }[] = [
  { slug: "fitness-wellness", label: "Fitness & Wellness" },
  { slug: "d2c-brands", label: "D2C & Product Brands" },
  { slug: "startups-saas", label: "Startups & SaaS" },
  { slug: "professional-services", label: "Services & Lifestyle" },
];

export function WorkFilterGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeService = (searchParams.get("service") as ServiceSlug | null) || "all";
  const activeIndustry = (searchParams.get("industry") as IndustrySlug | null) || "all";

  const updateFilter = (key: "service" | "industry", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const qs = params.toString();
    router.replace(qs ? `/work/?${qs}` : "/work/", { scroll: false });
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchService = activeService === "all" || project.serviceSlug === activeService;
      const matchIndustry = activeIndustry === "all" || project.industrySlug === activeIndustry;
      return matchService && matchIndustry;
    });
  }, [activeService, activeIndustry]);

  return (
    <div className="space-y-10">
      {/* Filter Controls (URL-synced) */}
      <div className="rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-5 sm:p-6 space-y-5">
        <div className="space-y-2.5">
          <span className="text-[13px] font-medium text-[#52504C] dark:text-[#A0A0A0]">
            Filter by service
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by service">
            <button
              type="button"
              onClick={() => updateFilter("service", "all")}
              aria-pressed={activeService === "all"}
              className={cn(
                "h-[40px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                activeService === "all"
                  ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                  : "border-white/12 bg-white/[0.03] text-[#52504C] dark:text-[#A0A0A0] hover:text-[#F5F5F5]"
              )}
            >
              All services
            </button>
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => updateFilter("service", service.slug)}
                aria-pressed={activeService === service.slug}
                className={cn(
                  "h-[40px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                  activeService === service.slug
                    ? "border-[#F24E1E] bg-[#F24E1E] text-white"
                    : "border-white/12 bg-white/[0.03] text-[#52504C] dark:text-[#A0A0A0] hover:text-[#F5F5F5]"
                )}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 border-t border-[#111111]/10 dark:border-white/10 pt-4">
          <span className="text-[13px] font-medium text-[#52504C] dark:text-[#A0A0A0]">
            Filter by industry
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by industry">
            <button
              type="button"
              onClick={() => updateFilter("industry", "all")}
              aria-pressed={activeIndustry === "all"}
              className={cn(
                "h-[40px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                activeIndustry === "all"
                  ? "border-[#F5F5F5] bg-[#F5F5F5] text-[#111111]"
                  : "border-white/12 bg-white/[0.03] text-[#52504C] dark:text-[#A0A0A0] hover:text-[#F5F5F5]"
              )}
            >
              All industries
            </button>
            {INDUSTRY_FILTERS.map((ind) => (
              <button
                key={ind.slug}
                type="button"
                onClick={() => updateFilter("industry", ind.slug)}
                aria-pressed={activeIndustry === ind.slug}
                className={cn(
                  "h-[40px] rounded-[8px] px-4 text-[14px] font-medium border cursor-pointer transition-[background-color,border-color,color] duration-150",
                  activeIndustry === ind.slug
                    ? "border-[#F5F5F5] bg-[#F5F5F5] text-[#111111]"
                    : "border-white/12 bg-white/[0.03] text-[#52504C] dark:text-[#A0A0A0] hover:text-[#F5F5F5]"
                )}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between text-xs text-[#52504C] dark:text-[#A0A0A0]" aria-live="polite">
        <span className="tabular-nums">
          Showing {filteredProjects.length} of {PROJECTS.length} project case studies
        </span>
        {(activeService !== "all" || activeIndustry !== "all") && (
          <button
            type="button"
            onClick={() => router.replace("/work/", { scroll: false })}
            className="font-semibold text-[#F24E1E] dark:text-[#FFD1C2] hover:text-white cursor-pointer"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Filtered Grid */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-12 text-center space-y-3">
          <p className="text-base font-semibold text-[#111111] dark:text-[#F5F5F5]">
            No projects match that exact combination yet.
          </p>
          <p className="text-sm text-[#52504C] dark:text-[#A0A0A0]">
            Reset the filters to browse all 11 studio case study slots, or book a call to see relevant private work.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-4 transition-[border-color,transform,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#101010]"
            >
              <div className="overflow-hidden rounded-[16px]">
                <ProjectVisualFrame
                  project={project}
                  aspect="square"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 px-2 pt-5 pb-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#52504C] dark:text-[#A0A0A0]">
                    <span>{project.industryLabel}</span>
                    <span className="text-[#F24E1E] dark:text-[#FFD1C2]">{project.serviceName}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111] dark:text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#52504C] dark:text-[#A0A0A0] line-clamp-2">
                    {project.outcomeTitle}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#111111]/10 dark:border-white/10 pt-3 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5]">
                  <span>View case study</span>
                  <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
