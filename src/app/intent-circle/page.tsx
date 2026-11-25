import type { Metadata } from "next";
import { Check } from "lucide-react";
import { INTENT_CIRCLE } from "@/data/intent-circle";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Intent Circle",
  description: INTENT_CIRCLE.teaserSentence,
  alternates: {
    canonical: `${SITE.url}/intent-circle/`,
  },
};

export default function IntentCirclePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-[#111111] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-bottom-right opacity-75" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-6">
          <SectionEyebrow>{INTENT_CIRCLE.name}</SectionEyebrow>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            {INTENT_CIRCLE.heroTitle}
          </h1>
          <p className="max-w-2xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
            {INTENT_CIRCLE.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Who it is for */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 sm:py-20">
        <div className="intent-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-2xl font-semibold text-[#111111] dark:text-[#F5F5F5]">Who it is for</h2>
            <p className="text-sm text-[#52504C] dark:text-[#A0A0A0]">
              A focused group built on practical craft rather than noisy networking.
            </p>
          </div>
          <ul className="lg:col-span-8 space-y-3">
            {INTENT_CIRCLE.whoItIsFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#181817] p-5 text-sm sm:text-base text-[#111111] dark:text-[#F5F5F5]/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What members get */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#111111] py-16 sm:py-20">
        <div className="intent-container space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
            What members get
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {INTENT_CIRCLE.whatMembersGet.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#181817] p-6 space-y-2.5"
              >
                <span className="tabular-nums text-xs font-semibold text-[#F24E1E]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#111111] dark:text-[#F5F5F5]">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="border-t border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111] py-16 sm:py-24">
        <div className="intent-container max-w-3xl">
          <div className="rounded-[24px] border border-[#F24E1E]/30 bg-[#FAF9F7] dark:bg-[#181817] p-7 sm:p-10 space-y-5">
            <SectionEyebrow>How to Join</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
              Request access to Intent Circle.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
              {INTENT_CIRCLE.howToJoinNote}
            </p>
            <div className="pt-2">
              <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
                Get in touch about Intent Circle
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
