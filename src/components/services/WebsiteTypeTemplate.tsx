import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { WebsiteTypePageData } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export function WebsiteTypeTemplate({ data }: { data: WebsiteTypePageData }) {
  const matchingProjects = PROJECTS.filter((p) =>
    data.matchingProjectSlugs.includes(p.slug)
  );

  return (
    <>
      <section className="relative overflow-hidden bg-[#000000] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-6">
          <Link
            href="/services/website-design/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Website Design &amp; Build
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <SectionEyebrow>{data.name}</SectionEyebrow>
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-[#A0A0A0]">
              Timeline: {data.timeline}
            </span>
          </div>

          <h1 className="text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F5F5F5]">
            {data.h1}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
            {data.intro}
          </p>

          <div className="pt-2">
            <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
              {SITE.primaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* What is different about this type */}
      <section className="border-t border-white/10 bg-[#111111] py-20">
        <div className="intent-container space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
            What makes {data.name.toLowerCase()} different.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {data.whatsDifferent.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 space-y-2.5"
              >
                <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof: Two matching projects */}
      <RelatedWorkSection
        projects={matchingProjects}
        eyebrow="Matching Proof"
        heading={`Recent ${data.slug === "ecommerce" ? "e-commerce" : "business site"} case studies.`}
        surface="deep"
      />

      {/* Process & Timeline */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="intent-container grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2">
            <SectionEyebrow>Process &amp; Timeline</SectionEyebrow>
            <h2 className="text-2xl font-semibold text-[#F5F5F5]">
              Built to ship in {data.timeline}.
            </h2>
          </div>
          <ul className="lg:col-span-8 space-y-3">
            {data.processNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-[#111111] p-5 text-sm sm:text-base text-[#F5F5F5]/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection heading={`${data.name} FAQ`} items={data.faqs} />
      <ClosingBand />
    </>
  );
}
