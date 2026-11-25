import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ClosingBand } from "@/components/sections/ClosingBand";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Explore how Intent Studios partners with Fitness & Wellness brands, D2C & Product Brands, startups, and growing businesses.",
  alternates: {
    canonical: `${SITE.url}/who-we-help/`,
  },
};

export default function WhoWeHelpPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-[#111111] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-5">
          <SectionEyebrow>Who we help</SectionEyebrow>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            Built for ambitious teams where{" "}
            <span className="font-editorial font-normal text-[#F24E1E] dark:text-[#FFD1C2]">
              credibility drives revenue.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
            We publish dedicated industry pages only where we have deep category proof. Start with our live playbooks below — or reach out directly if you are building in another sector.
          </p>
        </div>
      </section>

      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-20">
        <div className="intent-container space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={industry.href}
                className="group flex flex-col justify-between gap-6 rounded-[24px] border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#181817] p-8 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#F24E1E]/50"
              >
                <div className="space-y-3">
                  <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                    0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
                    {industry.name}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
                    {industry.shortDesc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F24E1E] dark:text-[#FFD1C2]">
                  Explore {industry.name}
                  <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <p className="text-sm text-[#52504C] dark:text-[#A0A0A0]">
            We also partner with early-stage SaaS startups, real estate &amp; lifestyle brands, professional service businesses, and independent creators. Additional dedicated industry pages launch once each has verified case studies.
          </p>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
