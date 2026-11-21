import type { Metadata } from "next";
import { ArrowUpRight, User } from "lucide-react";
import { SITE, STUDIO_PRINCIPLES, HOME_FIT_LIST } from "@/data/site";
import { getFeaturedProjects } from "@/data/projects";
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

  return (
    <>
      {/* 1. Opening: H1, portrait slot, CTA */}
      <section className="relative overflow-hidden bg-[#000000] pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionEyebrow>About Intent Studios</SectionEyebrow>
            <h1 className="text-[clamp(2.25rem,5vw,3.9rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#F5F5F5]">
              A creative &amp; product partner built for teams who want{" "}
              <span className="font-editorial font-normal text-[#FFD1C2]">
                real leverage.
              </span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
              We combine sharp design direction, full-stack engineering, and practical AI production workflows to help ambitious businesses look legitimate and convert better.
            </p>
            <div className="pt-2">
              <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
                {SITE.primaryCta.label}
              </Button>
            </div>
          </div>

          {/* Real Founder Portrait Slot (never AI-generated) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[#0A0A0A] p-8 min-h-[380px] flex flex-col justify-between">
              <div className="absolute inset-0 glow-edge-bottom-left opacity-70" aria-hidden="true" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-[#FFD1C2]">
                  Founder Portrait Slot
                </span>
                <User className="h-4 w-4 text-[#A0A0A0]" aria-hidden="true" />
              </div>

              <div className="relative z-10 my-auto text-center py-8">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-3xl font-semibold text-[#F5F5F5]">
                  AK
                </div>
                <p className="mt-5 text-lg font-semibold text-[#F5F5F5]">{SITE.founder.name}</p>
                <p className="mt-1 text-xs text-[#A0A0A0]">{SITE.founder.role}</p>
                <p className="mx-auto mt-3 max-w-xs text-xs text-[#A0A0A0]">
                  Real photography placeholder — natural light, dark background.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#A0A0A0]">
                <a
                  href={SITE.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F5F5F5]"
                >
                  {SITE.founder.instagramHandle}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F5F5F5]"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founder Story (Long Version) */}
      <section className="border-t border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="intent-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2">
            <SectionEyebrow>The Story</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              Why Intent Studios exists.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
            {SITE.founder.longStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How We Think: Three Principles */}
      <section className="border-t border-white/10 bg-[#F7F4F1] text-[#111111] py-20 sm:py-24">
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
