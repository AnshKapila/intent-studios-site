import { SITE } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

interface ClosingBandProps {
  eyebrow?: string;
  headline?: string;
  italicAccent?: string;
  subline?: string;
}

export function ClosingBand({
  eyebrow = "Start a conversation",
  headline = "Ready to build something with",
  italicAccent = "actual intent?",
  subline = "Tell us where your business stands today. We will give you an honest assessment and a clear next step in 15 minutes.",
}: ClosingBandProps) {
  return (
    <section className="relative overflow-hidden bg-warm-dark border-t border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 glow-edge-bottom-right" aria-hidden="true" />

      <div className="intent-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>

          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#F5F5F5]">
            {headline}{" "}
            <span className="font-editorial font-normal text-[#FFD1C2]">
              {italicAccent}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.6] text-[#A0A0A0]">
            {subline}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
              {SITE.primaryCta.label}
            </Button>
            <Button href={SITE.secondaryCta.href} variant="secondary" size="lg">
              {SITE.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
