import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, getServiceBySlug, WEBSITE_TYPE_PAGES } from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { ProofBar } from "@/components/sections/ProofBar";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { RelatedWorkSection } from "@/components/sections/RelatedWorkSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.summary,
    alternates: {
      canonical: `${SITE.url}${service.href}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const matchingProjects = getProjectsByService(service.slug).slice(0, 3);
  const relatedServices = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* 1. H1 & Intro */}
      <section className="relative overflow-hidden bg-[#000000] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-bottom-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-6">
          <Link
            href="/services/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Services
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <SectionEyebrow>{service.name}</SectionEyebrow>
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-[#A0A0A0]">
              Typical timeline: {service.timeline}
            </span>
          </div>

          <h1 className="text-[clamp(2.1rem,4.8vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F5F5F5]">
            {service.heroTitle}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
            {service.heroIntro}
          </p>

          <div className="flex flex-wrap gap-3.5 pt-2">
            <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
              {SITE.primaryCta.label}
            </Button>
            <Button href={`/work/?service=${service.slug}`} variant="secondary" size="lg">
              See {service.shortName} Work
            </Button>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <ProofBar items={service.proofBar} />

      {/* 2. What You Get + 3. Who It Is For */}
      <section className="border-t border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="intent-container space-y-16">
          <div className="space-y-8">
            <div className="space-y-2 max-w-2xl">
              <SectionEyebrow>Deliverables</SectionEyebrow>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                What you get.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {service.deliverables.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 space-y-2.5"
                >
                  <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
                Who it is for.
              </h2>
              <p className="text-sm text-[#A0A0A0]">
                Built for teams ready to move past generic templates and piecemeal fixes.
              </p>
            </div>
            <ul className="lg:col-span-8 space-y-3">
              {service.whoItIsFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 text-sm sm:text-base text-[#F5F5F5]/90"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Type Pages (Websites Only — Sitemap requirement) */}
      {service.hasTypePages && (
        <section className="border-t border-white/10 bg-[#000000] py-16 sm:py-20">
          <div className="intent-container space-y-8">
            <div className="space-y-2 max-w-2xl">
              <SectionEyebrow>Specialized Builds</SectionEyebrow>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                Choose your website type.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {Object.values(WEBSITE_TYPE_PAGES).map((typePage) => (
                <Link
                  key={typePage.slug}
                  href={typePage.href}
                  className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 transition-[border-color,background-color] duration-200 hover:border-[#F24E1E]/45 hover:bg-[#111111]"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FFD1C2]">
                      {typePage.timeline}
                    </span>
                    <h3 className="text-xl font-semibold text-[#F5F5F5]">{typePage.name}</h3>
                    <p className="text-sm leading-relaxed text-[#A0A0A0]">{typePage.intro}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5F5F5]">
                    Explore {typePage.name}
                    <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. How We Work (with service-specific stage timelines) + Fit / Not a Fit */}
      <HowWeWorkSection
        eyebrow="Process & Timeline"
        heading={`How ${service.shortName} moves from brief to launch.`}
        stageTimelines={service.stageTimelines}
        fitList={service.fitList}
        fitHeading={`Is ${service.name} the right move right now?`}
      />

      {/* 5. Related Work (this service's matching projects) */}
      <RelatedWorkSection
        projects={matchingProjects}
        eyebrow="Proof in Practice"
        heading={`Selected ${service.shortName} case studies.`}
        surface="deep"
      />

      {/* 6. What Changes the Price */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="intent-container grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2">
            <SectionEyebrow>Scope &amp; Investment</SectionEyebrow>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
              What changes the price.
            </h2>
            <p className="text-sm text-[#A0A0A0]">
              We scope fixed milestones after our 15-minute discovery call so you know the exact investment upfront.
            </p>
          </div>
          <ul className="lg:col-span-8 space-y-3">
            {service.priceDrivers.map((driver, idx) => (
              <li
                key={driver}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111111] p-5 text-sm sm:text-base text-[#F5F5F5]/90"
              >
                <span className="tabular-nums text-xs font-semibold text-[#F24E1E] pt-1">
                  0{idx + 1}
                </span>
                <span>{driver}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Service-Specific FAQ */}
      <FaqSection
        heading={`${service.shortName} questions, answered.`}
        items={service.faqs}
      />

      {/* 8. Related Services */}
      <section className="border-t border-white/10 bg-[#000000] py-16">
        <div className="intent-container space-y-6">
          <h2 className="text-xl font-semibold text-[#F5F5F5]">Related services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={rel.href}
                className="group flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color] duration-200 hover:border-[#F24E1E]/40"
              >
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-[#F5F5F5]">{rel.name}</h3>
                  <p className="text-xs leading-relaxed text-[#A0A0A0]">{rel.outcomeLine}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFD1C2]">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
