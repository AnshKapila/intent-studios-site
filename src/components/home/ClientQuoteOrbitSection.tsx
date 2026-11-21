"use client";

import { useState } from "react";
import { Play, Pause, Volume2, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

const ORBIT_NODES = [
  {
    label: "Direct founder communication",
    sub: "No account-manager relay",
    position: "lg:top-6 lg:left-6",
  },
  {
    label: "Real proof only",
    sub: "Verified client results & quotes",
    position: "lg:top-6 lg:right-6",
  },
  {
    label: "Conversion-first UX",
    sub: "Every screen earns the next click",
    position: "lg:bottom-6 lg:left-6",
  },
  {
    label: "Production code included",
    sub: "Zero Figma-to-dev handoff drift",
    position: "lg:bottom-6 lg:right-6",
  },
] as const;

export function ClientQuoteOrbitSection() {
  const [previewPlaying, setPreviewPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 glow-edge-bottom-left opacity-65" aria-hidden="true" />

      <div className="intent-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Client Perspective</SectionEyebrow>
          <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
            Built to earn trust —{" "}
            <span className="font-editorial font-normal text-[#FFD1C2]">
              hear it directly.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A0A0A0]">
            Video-first client testimonial slot. We never publish invented quotes or unverified statistics — real founder footage plugs directly into this frame.
          </p>
        </div>

        {/* Wireframe Block 5 adapted: Concentric orbital hairline rings framing the video-first client quote */}
        <div className="relative mx-auto mt-14 max-w-5xl py-6 lg:py-16">
          {/* Concentric orbital rings (desktop visual frame) */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:flex absolute inset-0 items-center justify-center"
          >
            <div className="h-[480px] w-[480px] rounded-full border border-dashed border-white/10" />
            <div className="absolute h-[680px] w-[680px] rounded-full border border-white/[0.06]" />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-[#F24E1E]/20" />
          </div>

          {/* Centerpiece Video-First Testimonial Player */}
          <div className="relative z-10 mx-auto max-w-xl overflow-hidden rounded-[24px] border border-white/15 bg-[#111111] shadow-[0_32px_90px_rgba(0,0,0,0.8)]">
            {/* Video stage */}
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1A1311] via-[#111111] to-[#000000] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FFD1C2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F24E1E]" aria-hidden="true" />
                  Video Testimonial Slot
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Captions ready
                </span>
              </div>

              <div className="my-auto flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => setPreviewPlaying((p) => !p)}
                  aria-label={previewPlaying ? "Pause client video preview" : "Play client video preview"}
                  className={cn(
                    "inline-flex h-16 w-16 items-center justify-center rounded-full border cursor-pointer",
                    "transition-[background-color,transform,border-color] duration-200 active:scale-95",
                    previewPlaying
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#F24E1E] bg-[#F24E1E] text-white hover:bg-[#D94114] shadow-[0_0_32px_rgba(242,78,30,0.35)]"
                  )}
                >
                  {previewPlaying ? (
                    <Pause className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Play className="h-6 w-6 translate-x-0.5" aria-hidden="true" />
                  )}
                </button>
                <p className="mt-4 text-xs text-[#A0A0A0]">
                  {previewPlaying
                    ? "Media slot active — attach verified client .mp4 in src/components/home/ClientQuoteOrbitSection.tsx"
                    : "Click to inspect video player slot (awaiting real client recording)"}
                </p>
              </div>

              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={cn(
                    "h-full rounded-full bg-[#F24E1E] transition-[width] duration-300",
                    previewPlaying ? "w-1/3" : "w-0"
                  )}
                />
              </div>
            </div>

            {/* Quote & Client Metadata */}
            <div className="border-t border-white/10 p-6 sm:p-7 space-y-4">
              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-[#F5F5F5]">
                “Featured client testimonial placeholder — reserved for a verified client quote and measurable outcome from one of Intent Studios’ three featured engagements.”
              </blockquote>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-sm font-semibold text-[#F5F5F5]">
                    Verified Client Name [Pending]
                  </div>
                  <div className="text-xs text-[#A0A0A0]">
                    Founder / Role · Company Name
                  </div>
                </div>
                <span className="text-xs font-medium text-[#FFD1C2]">
                  Verified engagement · Outcome pending
                </span>
              </div>
            </div>
          </div>

          {/* Orbital anchor micro-cards */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:block">
            {ORBIT_NODES.map((node) => (
              <div
                key={node.label}
                className={cn(
                  "rounded-2xl border border-white/10 bg-[#111111]/95 px-4 py-3.5 backdrop-blur-md",
                  "lg:absolute lg:w-56",
                  node.position
                )}
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-[#F5F5F5]">{node.label}</div>
                    <div className="mt-0.5 text-[11px] text-[#A0A0A0]">{node.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
