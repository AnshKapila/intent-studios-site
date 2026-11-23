import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SITE, STUDIO_PRINCIPLES, HOME_FIT_LIST } from "@/data/site";
import { getFeaturedProjects } from "@/data/projects";
import { PHOTOS } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { IntentCircleTeaser } from "@/components/sections/IntentCircleTeaser";
import { ClosingBand } from "@/components/sections/ClosingBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ansh Kapila and the thinking behind Intent Studios — an AI-powered creative and digital product studio built for conversion.",
  alternates: {
    canonical: `${SITE.url}/about/`,
  },
};

export default function AboutPage() {
  const featuredWork = getFeaturedProjects();
  const studioPhoto = PHOTOS.scatteredCard;

  return (
    <>
      {/* 1. Opening: H1, studio frame, CTA */}
      <section className="relative overflow-hidden bg-white dark:bg-[#000000] pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-65" aria-hidden="true" />

        <div className="intent-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionEyebrow>About Intent Studios</SectionEyebrow>
            <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
              A creative &amp; product partner built for teams who want{" "}
              <span className="font-editorial font-normal text-[#F24E1E] dark:text-[#FFD1C2]">
                real leverage.
              </span>
            </h1>
            <p className="max-w-xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
              We combine sharp design direction, full-stack engineering, and practical AI production workflows to help ambitious businesses look legitimate and convert better.
            </p>
            <div className="pt-2">
              <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
                {SITE.primaryCta.label}
              </Button>
            </div>
          </div>

          {/* Editorial Founder & Studio Frame (real photography, zero AI face, zero debug label) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[16px] border border-white/12 bg-[#FAF9F7] dark:bg-[#0A0A0A] min-h-[380px] flex flex-col justify-between">
              <img
                src={studioPhoto.src}
                srcSet={studioPhoto.srcSet}
                sizes="(max-width: 1023px) 100vw, 40vw"
                width={studioPhoto.width}
                height={studioPhoto.height}
                alt={studioPhoto.alt}
                loading="eager"
                decoding="async"
                data-source={studioPhoto.source}
                data-subject={studioPhoto.subject}
                className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35"
              />
              <div className="relative z-10 p-8 flex flex-1 flex-col justify-between">
                <span className="text-[13px] font-medium text-[#F24E1E] dark:text-[#FFD1C2]">
                  Creative direction
                </span>

                <div className="my-8 space-y-1.5">
                  <p className="text-2xl font-semibold tracking-[-0.025em] text-[#111111] dark:text-[#F5F5F5]">
                    {SITE.founder.name}
                  </p>
                  <p className="text-[15px] text-[#52504C] dark:text-[#A0A0A0]">{SITE.founder.role}</p>
                </div>

                <div className="flex items-center justify-between border-t border-[#111111]/15 dark:border-white/15 pt-4 text-[14px] text-[#111111] dark:text-[#F5F5F5]/85">
                  <a
                    href={SITE.founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    {SITE.founder.instagramHandle}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={SITE.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founder Story (Long Version) */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-20 sm:py-24">
        <div className="intent-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2">
            <SectionEyebrow>The Story</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
              Why Intent Studios exists.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
            {SITE.founder.longStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How We Think: Three Principles */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] text-[#111111] py-20 sm:py-24">
        <div className="intent-container space-y-10">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow tone="light">How We Think</SectionEyebrow>
            <h2 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Three principles that guide every project.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {STUDIO_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="rounded-[22px] border border-[#111111]/10 bg-white p-7 space-y-3"
              >
                <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                  {principle.number}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111]">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#52504C]">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work + Best Fit / Not a Fit */}
      <HowWeWorkSection fitList={HOME_FIT_LIST} />

      {/* 5. Related Work */}
      <RelatedWorkSection
        projects={featuredWork}
        eyebrow="Proof of Craft"
        heading="Selected work across industries."
        surface="deep"
      />

      {/* 6. Intent Circle Teaser */}
      <IntentCircleTeaser />

      {/* 7. Closing Band */}
      <ClosingBand />
    </>
  );
}
