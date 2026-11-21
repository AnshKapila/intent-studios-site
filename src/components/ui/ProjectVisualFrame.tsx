import type { ProjectCaseStudy } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectVisualFrameProps {
  project: ProjectCaseStudy;
  aspect?: "wide" | "square" | "tall";
  className?: string;
}

/**
 * Art-directed architectural visual placeholder frame for portfolio case studies.
 * Renders a crisp, realistic UI/brand composition tailored to the project's layout type,
 * clearly ready to be swapped for real client screenshots in src/data/projects.ts.
 */
export function ProjectVisualFrame({
  project,
  aspect = "wide",
  className,
}: ProjectVisualFrameProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-[4/3]"
      : aspect === "tall"
        ? "aspect-[4/5]"
        : "aspect-[16/10]";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0A] select-none",
        aspectClass,
        className
      )}
    >
      {/* Architectural grid + restrained edge glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 glow-edge-bottom-right opacity-70"
        aria-hidden="true"
      />

      {/* Layout-specific art-directed wireframe / UI artifact */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-7">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/12" />
            <span className="h-2 w-2 rounded-full bg-white/12" />
          </div>
          <span className="rounded-full border border-white/12 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#A0A0A0]">
            {project.serviceName}
          </span>
        </div>

        {/* Centerpiece architectural mockup */}
        {project.visualTheme.layout === "browser" && (
          <div className="my-auto grid grid-cols-12 gap-3 rounded-xl border border-white/10 bg-[#111111]/90 p-4 shadow-2xl backdrop-blur-sm">
            <div className="col-span-7 flex flex-col justify-between gap-3">
              <div className="space-y-2">
                <div className="h-1.5 w-14 rounded-full bg-[#F24E1E]/80" />
                <div className="text-sm sm:text-base font-semibold tracking-[-0.02em] text-[#F5F5F5] leading-snug">
                  {project.title}
                </div>
                <div className="h-2 w-4/5 rounded bg-white/10" />
                <div className="h-2 w-3/5 rounded bg-white/[0.06]" />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="inline-block h-6 w-20 rounded-full bg-[#F24E1E]" />
                <span className="inline-block h-6 w-16 rounded-full border border-white/15 bg-white/[0.04]" />
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-2">
              <div className="flex-1 rounded-lg border border-white/10 bg-gradient-to-br from-[#1F100B] via-[#141414] to-[#0A0A0A] p-3">
                <div className="h-full w-full rounded border border-dashed border-white/10 flex items-end p-2">
                  <div className="h-1.5 w-10 rounded-full bg-white/25" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded-md border border-white/10 bg-white/[0.03]" />
                <div className="h-8 rounded-md border border-white/10 bg-white/[0.03]" />
              </div>
            </div>
          </div>
        )}

        {project.visualTheme.layout === "mobile" && (
          <div className="my-auto flex items-center justify-center gap-4">
            <div className="w-36 sm:w-44 rounded-[22px] border border-white/15 bg-[#111111] p-3 shadow-2xl">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
              <div className="space-y-2">
                <div className="h-16 rounded-xl bg-gradient-to-br from-[#F24E1E]/25 to-[#1A1A1A] border border-[#F24E1E]/25 p-2.5 flex flex-col justify-between">
                  <span className="h-1.5 w-8 rounded-full bg-[#F24E1E]" />
                  <span className="text-[11px] font-semibold text-[#F5F5F5] truncate">
                    {project.title}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-10 rounded-lg bg-white/[0.04] border border-white/8" />
                  <div className="h-10 rounded-lg bg-white/[0.04] border border-white/8" />
                </div>
                <div className="h-7 rounded-full bg-[#F5F5F5]/90" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col gap-2 w-40">
              <div className="rounded-xl border border-white/10 bg-[#111111]/90 p-3">
                <div className="text-[10px] uppercase tracking-[0.12em] text-[#A0A0A0]">System Tokens</div>
                <div className="mt-2 flex gap-1.5">
                  <span className="h-4 w-4 rounded-full bg-[#F24E1E]" />
                  <span className="h-4 w-4 rounded-full bg-[#F5F5F5]" />
                  <span className="h-4 w-4 rounded-full bg-[#1A1A1A] border border-white/20" />
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#111111]/90 p-3 space-y-1.5">
                <div className="h-1.5 w-16 rounded bg-white/20" />
                <div className="h-1.5 w-24 rounded bg-white/10" />
              </div>
            </div>
          </div>
        )}

        {project.visualTheme.layout === "product" && (
          <div className="my-auto grid grid-cols-12 gap-3 items-stretch">
            <div className="col-span-5 rounded-xl bg-[#F7F4F1] p-4 flex flex-col justify-between text-[#111111]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#52504C]">
                D2C Edition
              </span>
              <div className="my-3 mx-auto h-16 w-12 rounded-lg bg-gradient-to-b from-[#232323] to-[#0A0A0A] border border-black/15 shadow-lg flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F24E1E]" />
              </div>
              <div className="text-xs font-semibold tracking-[-0.02em] truncate">
                {project.title}
              </div>
            </div>
            <div className="col-span-7 rounded-xl border border-white/10 bg-[#111111]/90 p-4 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#F5F5F5]">Storefront & Visual System</div>
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-2/3 rounded bg-white/[0.06]" />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[11px] text-[#A0A0A0]">PDP · Cart · Editorial</span>
                <span className="h-2 w-8 rounded-full bg-[#F24E1E]" />
              </div>
            </div>
          </div>
        )}

        {project.visualTheme.layout === "editorial" && (
          <div className="my-auto flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#111111]/85 px-6 py-7 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFD1C2]">
              {project.industryLabel}
            </span>
            <p className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              {project.title}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#F24E1E]" />
              <span className="h-px w-8 bg-white/20" />
            </div>
          </div>
        )}

        {/* Bottom metadata bar */}
        <div className="flex items-center justify-between gap-2 text-[11px] text-[#A0A0A0]">
          <span className="truncate">{project.industryLabel}</span>
          <span className="shrink-0 font-mono text-[10px] text-white/40">
            ASSET SLOT · READY FOR CLIENT MEDIA
          </span>
        </div>
      </div>
    </div>
  );
}
