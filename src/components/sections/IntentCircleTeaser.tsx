import { INTENT_CIRCLE } from "@/data/intent-circle";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function IntentCircleTeaser() {
  return (
    <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
      <div className="intent-container">
        <div className="relative overflow-hidden rounded-[24px] border border-[#F24E1E]/30 bg-[#111111] p-7 sm:p-10">
          <div className="absolute inset-0 glow-edge-bottom-right opacity-80" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-2xl">
              <SectionEyebrow>{INTENT_CIRCLE.name}</SectionEyebrow>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                Stay close to how we think and build.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#A0A0A0]">
                {INTENT_CIRCLE.teaserSentence}
              </p>
            </div>
            <Button href={INTENT_CIRCLE.href} variant="primary" size="md" showArrow className="shrink-0 self-start lg:self-center">
              {INTENT_CIRCLE.teaserCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
