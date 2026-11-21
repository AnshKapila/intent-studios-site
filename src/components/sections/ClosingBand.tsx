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
  headline = "Ready to build something built with",
  italicAccent = "actual intent?",
  subline = "Tell us where your business stands today. We will give you an honest assessment and a clear next step in 15 minutes.",
}: ClosingBandProps) {
  return (
    <section className="relative overflow-hidden bg-warm-dark border-t border-white/10 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 glow-edge-bottom-right" aria-hidden="true" />
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />

      <div className="intent-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>

          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F5F5F5]">
            {headline}{" "}
            <span className="font-editorial font-normal text-[#FFD1C2]">
              {italicAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
            {subline}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={SITE.primaryCta.href} variant="primary" size="lg" showArrow>
              {SITE.primaryCta.label}
            </Button>
            <Button href={SITE.secondaryCta.href} variant="secondary" size="lg">
              {SITE.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.06em] text-[#A0A0A0]">
            {SITE.signOff}
          </p>
        </div>
      </div>
    </section>
  );
}
