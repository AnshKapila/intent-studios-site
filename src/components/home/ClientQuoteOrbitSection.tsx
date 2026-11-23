"use client";

import { useState } from "react";
import { Play, Pause, Check } from "lucide-react";
import { PHOTOS } from "@/data/media";
import { cn } from "@/lib/utils";

const ORBIT_NODES = [
  {
    label: "Direct founder communication",
    sub: "Zero account-manager relay",
    position: "lg:top-6 lg:left-0",
  },
  {
    label: "Verified outcomes only",
    sub: "No inflated agency numbers",
    position: "lg:top-6 lg:right-0",
  },
  {
    label: "Conversion-first UX",
    sub: "Every screen earns the next click",
    position: "lg:bottom-6 lg:left-0",
  },
  {
    label: "Production code included",
    sub: "No Figma-to-dev handoff drift",
    position: "lg:bottom-6 lg:right-0",
  },
] as const;

export function ClientQuoteOrbitSection() {
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const photo = PHOTOS.stackedBooks;

  return (
    <section
      aria-label="Client perspective"
      className="relative flex items-center overflow-hidden border-t border-white/10 bg-[#0A0A0A] py-12 lg:h-[100svh] lg:max-h-[100svh] lg:py-0"
    >
      <div className="intent-container relative z-10 w-full">
        {/* Radial orbital container sized cleanly within 100vh (heading/subheading/description removed) */}
        <div className="relative mx-auto max-w-6xl py-4 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:flex absolute inset-0 items-center justify-center"
          >
            <div className="h-[440px] w-[440px] rounded-full border border-dashed border-white/10" />
            <div className="absolute h-[640px] w-[640px] rounded-full border border-white/[0.06]" />
          </div>

          {/* Centerpiece Video-First Card */}
          <div className="relative z-10 mx-auto max-w-[520px] overflow-hidden rounded-[16px] border border-white/12 bg-[#111111]">
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 767px) 100vw, 520px"
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                data-source={photo.source}
                data-subject={photo.subject}
                className="h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setPreviewPlaying((p) => !p)}
                  aria-label={previewPlaying ? "Pause client video" : "Play client video"}
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-full border cursor-pointer",
                    "transition-[background-color,transform,border-color] duration-150 active:scale-95",
                    previewPlaying
                      ? "border-white/30 bg-black/70 text-white"
                      : "border-[#F24E1E] bg-[#F24E1E] text-white hover:bg-[#D94114]"
                  )}
                >
                  {previewPlaying ? (
                    <Pause className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
                <div
                  className={cn(
                    "h-full bg-[#F24E1E] transition-[width] duration-300",
                    previewPlaying ? "w-1/3" : "w-0"
                  )}
                />
              </div>
            </div>

            <div className="border-t border-white/10 p-6 space-y-4">
              <blockquote className="text-base sm:text-[17px] font-medium leading-[1.55] text-[#F5F5F5]">
                “There’s a new problem in digital media — and if design, engineering, and AI can solve it, we’ll find the way. That’s what we’re built for.”
              </blockquote>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-3.5 text-[14px]">
                <span className="font-medium text-[#F5F5F5]">Intent Studios</span>
                <span className="text-[#A0A0A0]">Video testimonial reel · Updating with client footage</span>
              </div>
            </div>
          </div>

          {/* Orbital anchor micro-cards */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:block">
            {ORBIT_NODES.map((node) => (
              <div
                key={node.label}
                className={cn(
                  "rounded-[12px] border border-white/10 bg-[#111111] px-4 py-3.5",
                  "lg:absolute lg:w-56",
                  node.position
                )}
              >
                <div className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                  <div>
                    <div className="text-[14px] font-medium text-[#F5F5F5]">{node.label}</div>
                    <div className="mt-0.5 text-[13px] text-[#A0A0A0]">{node.sub}</div>
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
