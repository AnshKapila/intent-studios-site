import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SchedulerEmbed } from "@/components/contact/SchedulerEmbed";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { IntentCircleTeaser } from "@/components/sections/IntentCircleTeaser";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received by Intent Studios.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE.url}/thank-you/`,
  },
};

export default function ThankYouPage() {
  const related = getFeaturedProjects().slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-[#111111] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-bottom-right opacity-65" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-3xl space-y-6">
          <SectionEyebrow>Brief Received</SectionEyebrow>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-[#F24E1E] shrink-0" aria-hidden="true" />
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111111] dark:text-[#F5F5F5]">
              Thank you — we are on it.
            </h1>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
            We review every enquiry personally and respond within one business day. If you have not booked your 15-minute discovery call yet, you can grab a time directly below.
          </p>

          <div className="pt-4">
            <SchedulerEmbed id="thank-you-scheduler" />
          </div>
        </div>
      </section>

      <RelatedWorkSection
        projects={related}
        eyebrow="While You Wait"
        heading="Explore two recent builds."
      />

      <IntentCircleTeaser />
    </>
  );
}
