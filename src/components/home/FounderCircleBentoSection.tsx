"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";
import { INTENT_CIRCLE } from "@/data/intent-circle";
import { PHOTOS } from "@/data/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

export function FounderCircleBentoSection() {
  const studioPhoto = PHOTOS.scatteredCard;

  return (
    <section className="relative bg-[#F7F4F1] text-[#111111] py-20 sm:py-24">
      <div className="intent-container relative z-10 space-y-12">
        {/* Wireframe Block 7 Header — controlled, balanced proportions */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5 space-y-3">
            <SectionEyebrow tone="light">Founder &amp; community</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,2.8vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#111111]">
              Built by a founder, for founders.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-base leading-[1.6] text-[#52504C] lg:ml-auto">
              Direct creative leadership from Ansh Kapila — paired with Intent Circle, our curated space for builders who care how digital products actually work.
            </p>
          </div>
        </div>

        {/* Wireframe Block 7: Asymmetric 3-column × 2-row 6-cell editorial bento */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Cell 1: Founder Note */}
          <div className="flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7">
            <div className="space-y-3">
              <span className="text-[13px] font-medium text-[#52504C]">
                Founder’s note
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111]">
                {SITE.founder.name}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#52504C]">
                {SITE.founder.shortNote}
              </p>
            </div>
            <div className="mt-6 border-t border-[#111111]/10 pt-4">
              <Link
                href="/about/"
                className="group inline-flex min-h-[36px] items-center gap-2 text-[15px] font-medium text-[#111111] hover:text-[#F24E1E] transition-colors duration-150"
              >
                Read the full story
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Cell 2: Studio Craft & Founder Credentials (real studio material photograph, zero AI face, zero debug label) */}
          <div className="relative overflow-hidden rounded-[16px] border border-[#111111]/10 bg-[#111111] text-[#F5F5F5] flex flex-col justify-between min-h-[300px]">
            <img
              src={studioPhoto.src}
              srcSet={studioPhoto.srcSet}
              sizes="(max-width: 1023px) 100vw, 33vw"
              width={studioPhoto.width}
              height={studioPhoto.height}
              alt={studioPhoto.alt}
              loading="lazy"
              decoding="async"
              data-source={studioPhoto.source}
              data-subject={studioPhoto.subject}
              className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35"
            />

            <div className="relative z-10 p-7 flex flex-1 flex-col justify-between">
              <span className="text-[13px] font-medium text-[#FFD1C2]">
                Creative direction
              </span>

              <div className="my-6 space-y-1.5">
                <p className="text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                  {SITE.founder.name}
                </p>
                <p className="text-[15px] text-[#A0A0A0]">
                  {SITE.founder.role}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[14px] text-[#F5F5F5]/85">
                <a
                  href={SITE.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-white/25 underline-offset-4"
                >
                  {SITE.founder.instagramHandle}
                </a>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-white/25 underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Cell 3: Signature #F24E1E Accent Card — Intent Circle Teaser */}
          <div className="relative overflow-hidden rounded-[16px] bg-[#F24E1E] p-7 text-white flex flex-col justify-between min-h-[300px]">
            <span className="text-[13px] font-medium text-white/90">
              {INTENT_CIRCLE.name}
            </span>

            <div className="my-6 space-y-3">
              <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-0.025em]">
                Stay close to how we build.
              </h3>
              <p className="text-[15px] leading-[1.6] text-white/92">
                {INTENT_CIRCLE.teaserSentence}
              </p>
            </div>

            <div>
              <Button href={INTENT_CIRCLE.href} variant="light-primary" size="md" showArrow>
                {INTENT_CIRCLE.teaserCta}
              </Button>
            </div>
          </div>

          {/* Cell 4: Studio Standard Light Card */}
          <div className="flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7">
            <span className="text-[13px] font-medium text-[#52504C]">
              Design philosophy
            </span>
            <div className="my-6 space-y-2">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111]">
                Intent is in the Details.
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#52504C]">
                Spacing rhythm, typographic contrast, micro-interactions, and load speed are not polish — they are why visitors trust you.
              </p>
            </div>
            <div className="h-[2px] w-12 bg-[#F24E1E]" aria-hidden="true" />
          </div>

          {/* Cell 5: High-Contrast Dark Card — Direct Partnership */}
          <div className="relative overflow-hidden rounded-[16px] bg-[#0A0A0A] p-7 text-[#F5F5F5] flex flex-col justify-between">
            <span className="text-[13px] font-medium text-[#A0A0A0]">
              Direct access
            </span>
            <div className="my-6 space-y-2">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                No account managers.
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#A0A0A0]">
                You speak directly with the people designing your system and writing your production code.
              </p>
            </div>
            <p className="text-[13px] font-medium text-[#FFD1C2]">
              Practical innovation · Honest pushback
            </p>
          </div>

          {/* Cell 6: Action Card */}
          <div className="flex flex-col justify-between rounded-[16px] border border-[#111111]/10 bg-white p-7">
            <div className="space-y-2">
              <span className="text-[13px] font-medium text-[#52504C]">
                Next step
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111]">
                Have a project in mind?
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#52504C]">
                Bring your current site, product idea, or launch goal to a 15-minute discovery call.
              </p>
            </div>
            <div className="mt-6">
              <Button
                href={SITE.primaryCta.href}
                variant="light-primary"
                size="md"
                showArrow
                className="w-full"
              >
                {SITE.primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
