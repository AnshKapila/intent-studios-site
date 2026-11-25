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
    <section className="relative overflow-hidden bg-warm-dark border-t border-[#111111]/10 dark:border-white/10 py-20 sm:py-24 transition-colors duration-200">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 glow-edge-bottom-right opacity-40 dark:opacity-100" aria-hidden="true" />

      <div className="intent-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>

          <h2 className="type-h2 mt-5 text-[#111111] dark:text-white">
            {headline}{" "}
            <span className="font-editorial font-normal text-[#F24E1E] dark:text-[#FFD1C2]">
              {italicAccent}
            </span>
          </h2>

          <p className="type-p1 mx-auto mt-4 max-w-xl text-[#52504C] dark:text-[#A3A09A]">
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
