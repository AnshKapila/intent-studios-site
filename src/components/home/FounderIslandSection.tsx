import { Calendar } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/Button";

/**
 * Differentiated #F24E1E Orange Founder Island inspired directly by intentstudios.in,
 * adapted to DESIGN.md (16px/12px Balanced Modern radii, .type-h2/.type-p2, Forma Kinetic Pill buttons)
 * with a cleanly balanced #111111 CTA sub-card (eliminating the empty void from the original).
 */
export function FounderIslandSection() {
  return (
    <section
      aria-labelledby="about-founder-heading"
      className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container">
        <div className="overflow-hidden rounded-[16px] bg-[#F24E1E] p-6 sm:p-8 lg:p-10 text-white shadow-[0_24px_60px_-20px_rgba(242,78,30,0.35)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Left Group: Real Founder Photo + Bio */}
            <div className="flex flex-1 min-w-0 flex-col gap-6 sm:flex-row sm:items-center lg:gap-8">
              {/* Real Founder Portrait from intentstudios.in */}
              <div className="relative h-56 w-56 sm:h-60 sm:w-60 lg:h-[264px] lg:w-[264px] shrink-0 overflow-hidden rounded-[12px] border border-white/25 bg-[#111111] shadow-[0_12px_32px_rgba(17,17,17,0.22)]">
                <img
                  src="/images/founder-ansh.jpg"
                  width={576}
                  height={576}
                  alt="Ansh Kapila — Founder & Creative Director, Intent Studios"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Founder Bio Block */}
              <div className="flex flex-col items-start min-w-0">
                <span className="type-p3 inline-flex items-center gap-2.5 text-white/90">
                  <span className="h-[1px] w-6 bg-white/80 shrink-0" aria-hidden="true" />
                  The founder
                </span>

                <h2
                  id="about-founder-heading"
                  className="type-h2 mt-3 text-white"
                >
                  <span className="font-editorial font-normal tracking-[-0.01em]">
                    {SITE.founder.name}
                  </span>
                </h2>

                <p className="mt-1 text-[16px] font-medium text-[#FFD1C2]">
                  {SITE.founder.role}
                </p>

                <p className="type-p2 mt-4 max-w-lg text-white/95">
                  I partner directly with select teams to translate vision into
                  high-performing digital products. Combining sharp design taste,
                  full-stack execution, and practical AI speed without cutting
                  corners.
                </p>
              </div>
            </div>

            {/* Right CTA Sub-Card — Balanced #111111 Charcoal Card (zero awkward empty space) */}
            <div className="lg:w-[340px] shrink-0 flex flex-col justify-between gap-6 rounded-[12px] border border-white/12 bg-[#111111] p-6 text-white">
              {/* Top availability header */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-medium text-white/90">
                  <span className="h-2 w-2 rounded-full bg-[#F24E1E] animate-pulse" aria-hidden="true" />
                  Taking select projects
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80"
                >
                  <Calendar className="h-4 w-4" />
                </span>
              </div>

              {/* Middle clear offer copy */}
              <div className="space-y-1.5">
                <h3 className="text-[20px] font-medium leading-[28px] tracking-[-0.02em] text-white">
                  15-minute discovery call
                </h3>
                <p className="text-[14px] leading-[22px] text-[#A3A09A]">
                  Speak directly with Ansh — honest scope, fit check, and a clear
                  next step before you commit.
                </p>
              </div>

              {/* Bottom balanced 2-CTA container */}
              <div className="flex flex-col gap-3">
                <Button
                  href={SITE.primaryCta.href}
                  variant="primary"
                  size="md"
                  showArrow
                  className="w-full justify-between"
                >
                  Book your call
                </Button>
                <Button
                  href="/about/"
                  variant="tertiary"
                  showArrow
                  className="mx-auto text-white/80 decoration-white/30 hover:text-[#FFD1C2] hover:decoration-[#FFD1C2]"
                >
                  Read about the team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
