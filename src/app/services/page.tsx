import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE, HOME_FIT_LIST, PROCESS_STAGE_TIMELINES } from "@/data/site";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ServicesDeckSection } from "@/components/home/ServicesDeckSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website Design & Build, Product & App Design, Brand Identity, and Content & Social — focused creative and engineering services built for conversion.",
  alternates: {
    canonical: `${SITE.url}/services/`,
  },
};

const SERVICES_FAQ = [
  {
    question: "Can we combine Brand Identity, Website Design, and Content in one engagement?",
    answer:
      "Yes. Combining identity, website architecture, and launch visuals under one direction eliminates handoff delays and keeps every surface visually consistent from day one.",
  },
  {
    question: "How do you price projects if there is no fixed pricing table?",
    answer:
      "Every business has different page depth, technical integrations, and asset readiness. After a 15-minute discovery call we send a clear, fixed-scope proposal with milestones and timeline — no surprise hourly billing.",
  },
  {
    question: "Do you offer standalone website audits?",
    answer:
      "We do not sell standalone audit PDFs. Instead, every discovery call and Website Design & Build engagement begins with a focused conversion and UX diagnosis tied directly to execution.",
  },
];

export default function ServicesOverviewPage() {
  return (
    <>
      {/* 1. Outcome Headline */}
      <section className="relative overflow-hidden bg-white dark:bg-[#000000] pt-36 pb-14 sm:pt-44 sm:pb-16">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-5">
          <SectionEyebrow>Services overview</SectionEyebrow>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            Design, engineering &amp; AI production built to{" "}
            <span className="font-editorial font-normal text-[#F24E1E] dark:text-[#FFD1C2]">
              grow your business.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
            Four focused services — each structured around clarity, speed, and measurable conversion rather than bloated deliverables.
          </p>
        </div>
      </section>

      {/* 2. Service Cards + 3. Interactive Goal Chooser + Industry Line */}
      <ServicesDeckSection />

      {/* 4. How We Work + 5. Best Fit / Not a Fit */}
      <HowWeWorkSection
        eyebrow="Delivery Process"
        heading="Structured execution across every service."
        stageTimelines={PROCESS_STAGE_TIMELINES}
        fitList={{
          bestFit: [
            ...HOME_FIT_LIST.bestFit.slice(0, 3),
            "Founders looking to pair sharp creative direction with production-ready delivery.",
          ],
          notAFit: [
            ...HOME_FIT_LIST.notAFit.slice(0, 3),
            "Teams shopping for uncoordinated piecemeal tasks from multiple bargain vendors.",
          ],
        }}
      />

      {/* 6. Industry Links */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#000000] py-16 sm:py-20">
        <div className="intent-container space-y-8">
          <div className="space-y-2 max-w-2xl">
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
              See how our services apply to your industry.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.href}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-7 transition-[border-color,background-color] duration-200 hover:border-[#F24E1E]/45 hover:bg-[#111111]"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#111111] dark:text-[#F5F5F5]">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">{industry.shortDesc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F24E1E] dark:text-[#FFD1C2]">
                  Explore {industry.name}
                  <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Services FAQ */}
      <FaqSection
        heading="Questions about working with us."
        intro="Scope, timelines, and how our four disciplines connect."
        items={SERVICES_FAQ}
      />

      {/* 8. Closing Band */}
      <ClosingBand />
    </>
  );
}
