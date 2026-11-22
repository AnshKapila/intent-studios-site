import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import { getProjectsByIndustry } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { ClientQuoteCard } from "@/components/sections/ClientQuoteCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.name} — Who We Help`,
    description: industry.shortDesc,
    alternates: {
      canonical: `${SITE.url}${industry.href}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const matchingProjects = getProjectsByIndustry(industry.slug);
  const matchingServices = industry.serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* 1. H1 for the industry */}
      <section className="relative overflow-hidden bg-[#000000] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-bottom-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-6">
          <Link
            href="/who-we-help/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Industries
          </Link>

          <SectionEyebrow>{industry.name}</SectionEyebrow>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
            {industry.h1}
          </h1>
          <p className="max-w-2xl text-base sm:text-[17px] leading-[1.6] text-[#A0A0A0]">
            {industry.intro}
          </p>
          <div className="pt-2">
            <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
              {SITE.primaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Proof Bar */}
      <ProofBar items={industry.proofBar} />

      {/* 3. Problems in this industry, in buyer words */}
      <section className="border-t border-white/10 bg-[#F7F4F1] text-[#111111] py-20">
        <div className="intent-container space-y-10">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow tone="light">Buyer Reality</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em]">
              What {industry.name.toLowerCase()} founders tell us before we work together.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {industry.problems.map((problem) => (
              <div
                key={problem.quote}
                className="rounded-2xl border border-[#111111]/10 bg-white p-6 space-y-3"
              >
                <p className="text-base font-semibold leading-snug text-[#111111]">
                  {problem.quote}
                </p>
                <p className="text-sm leading-relaxed text-[#52504C]">
                  {problem.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Related Work: the industry's projects */}
      <RelatedWorkSection
        projects={matchingProjects}
        eyebrow="Industry Proof"
        heading={`${industry.name} case studies.`}
      />

      {/* 5. Client Quote */}
      <section className="border-t border-white/10 bg-[#000000] py-16">
        <div className="intent-container max-w-4xl">
          <ClientQuoteCard {...industry.clientQuote} />
        </div>
      </section>

      {/* 6. Service cards used here */}
      <section className="border-t border-white/10 bg-[#111111] py-16 sm:py-20">
        <div className="intent-container space-y-8">
          <div className="space-y-2 max-w-2xl">
            <SectionEyebrow>Services Used Here</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
              How we help {industry.name.toLowerCase()} brands grow.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {matchingServices.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color] duration-200 hover:border-[#F24E1E]/45"
              >
                <div className="space-y-2">
                  <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                    {service.index}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">{service.name}</h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">{service.outcomeLine}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFD1C2]">
                  Explore service
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry FAQ */}
      <FaqSection
        heading={`${industry.name} FAQ`}
        items={industry.faqs}
        surface="deep"
      />

      {/* 8. Closing Band */}
      <ClosingBand />
    </>
  );
}
