import { SITE } from "@/data/site";
import { PHOTOS } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

/**
 * Full-width "About the Founder" architectural island
 * Placed directly after How We Work and before the Intent Circle Bento Grid.
 * Strictly follows DESIGN.md (#FFFFFF / #111111, 16px/12px radii, .type-h2/.type-p2, Forma Kinetic Pill buttons).
 */
export function FounderIslandSection() {
  const studioPhoto = PHOTOS.sunlitLamp;

  return (
    <section
      aria-labelledby="about-founder-heading"
      className="relative overflow-hidden border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 lg:py-24 transition-colors duration-200"
    >
      <div className="intent-container">
        <div className="overflow-hidden rounded-[16px] border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#1F1E1C] p-6 sm:p-10 lg:p-12 transition-colors duration-200">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <SectionEyebrow>About the founder</SectionEyebrow>

              <h2
                id="about-founder-heading"
                className="type-h2 mt-5 text-[#111111] dark:text-white"
              >
                {SITE.founder.name}
              </h2>

              <p className="type-p3 mt-2 text-[#7C756D] dark:text-[#A3A09A]">
                {SITE.founder.role}
              </p>

              <p className="type-p2 mt-6 max-w-2xl text-[#52504C] dark:text-[#A3A09A]">
                {SITE.founder.shortNote}
              </p>

              {/* Dual CTA Container — Unified Forma Kinetic Pill Buttons */}
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={SITE.primaryCta.href}
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  {SITE.primaryCta.label}
                </Button>
                <Button
                  href="/about/"
                  variant="secondary"
                  size="lg"
                  showArrow
                >
                  Read about the team
                </Button>
              </div>
            </div>

            {/* Right Visual Column (5 cols) — Clean architectural studio frame (ready for real founder portrait) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-[12px] border border-[#111111]/10 dark:border-white/10 bg-[#181817]">
                <img
                  src={studioPhoto.src}
                  srcSet={studioPhoto.srcSet}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  width={studioPhoto.width}
                  height={studioPhoto.height}
                  alt={studioPhoto.alt}
                  loading="lazy"
                  decoding="async"
                  data-source={studioPhoto.source}
                  data-subject={studioPhoto.subject}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[12px] font-medium text-white/90">
                  <span>{SITE.founder.name}</span>
                  <span className="text-white/70">{SITE.founder.instagramHandle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
