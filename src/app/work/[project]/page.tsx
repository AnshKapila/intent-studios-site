import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProjectVisualFrame } from "@/components/ui/ProjectVisualFrame";
import { ClientQuoteCard } from "@/components/sections/ClientQuoteCard";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.serviceName}`,
    description: project.outcomeTitle,
    alternates: {
      canonical: `${SITE.url}/work/${project.slug}/`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const linkedService = getServiceBySlug(project.serviceSlug);
  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug)
    .sort((a, b) =>
      a.serviceSlug === project.serviceSlug && b.serviceSlug !== project.serviceSlug ? -1 : 1
    )
    .slice(0, 2);

  return (
    <>
      {/* 1. Project Header */}
      <section className="relative overflow-hidden bg-[#000000] pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-65" aria-hidden="true" />

        <div className="intent-container relative z-10 space-y-7">
          <Link
            href="/work/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Work
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <SectionEyebrow>{project.serviceName}</SectionEyebrow>
              <span className="text-[13px] text-[#A0A0A0]">
                · {project.industryLabel}
              </span>
            </div>

            <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
              {project.outcomeTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-[#A0A0A0]">
              <span>
                <strong className="font-semibold text-[#F5F5F5]">Project:</strong> {project.title}
              </span>
              <span>
                <strong className="font-semibold text-[#F5F5F5]">Role:</strong> {project.role}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#FFD1C2] hover:text-white"
                >
                  Visit live site
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Image + 3. At a Glance */}
      <section className="border-t border-white/10 bg-[#111111] py-14 sm:py-20">
        <div className="intent-container space-y-10">
          <ProjectVisualFrame project={project} aspect="wide" />

          <dl className="grid gap-5 rounded-[22px] border border-white/10 bg-[#0A0A0A] p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
            <div className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                Client
              </dt>
              <dd className="text-sm font-medium text-[#F5F5F5]">{project.atAGlance.client}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                What We Did
              </dt>
              <dd className="text-sm font-medium text-[#F5F5F5]">{project.atAGlance.whatWeDid}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                Timeline
              </dt>
              <dd className="text-sm font-medium text-[#F5F5F5]">{project.atAGlance.time}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                Result
              </dt>
              <dd className="text-sm font-medium text-[#FFD1C2]">{project.atAGlance.result}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 4. The Situation + 5. The Decisions + 6. What We Made + 7. The Result */}
      <section className="border-t border-white/10 bg-[#000000] py-16 sm:py-24">
        <div className="intent-container max-w-4xl space-y-14">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              The situation
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
              {project.situation}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              The decisions
            </h2>
            <ul className="space-y-3">
              {project.decisions.map((decision, i) => (
                <li
                  key={decision}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-5"
                >
                  <span className="tabular-nums text-xs font-semibold text-[#F24E1E] pt-1">
                    0{i + 1}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-[#F5F5F5]/90">
                    {decision}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              What we made
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.whatWeMade.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 space-y-2"
                >
                  <h3 className="text-base font-semibold text-[#F5F5F5]">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#F24E1E]/25 bg-[#0A0A0A] p-7">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              The result
            </h2>
            <p className="text-base leading-relaxed text-[#A0A0A0]">
              {project.resultDetail}
            </p>
          </div>

          {/* 8. Client Quote */}
          <ClientQuoteCard {...project.clientQuote} />

          {/* 9. Under the Hood (Collapsible) */}
          <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A]">
            <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-6 py-4 text-base font-semibold text-[#F5F5F5]">
              <span>Under the hood — technical details</span>
              <ChevronDown
                className="h-4 w-4 text-[#A0A0A0] transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-white/10 px-6 py-5 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.underTheHood.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-medium text-[#FFD1C2]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-[#A0A0A0] list-disc pl-5">
                {project.underTheHood.architectureNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* 10. Related Work (2 projects + link to this project's service page) */}
      <RelatedWorkSection
        projects={relatedProjects}
        eyebrow="Keep Exploring"
        heading="More work from the studio."
        serviceLink={
          linkedService
            ? { label: `Explore ${linkedService.name}`, href: linkedService.href }
            : undefined
        }
      />

      {/* 11. Closing Band */}
      <ClosingBand />
    </>
  );
}
