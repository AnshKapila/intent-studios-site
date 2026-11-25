import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-white dark:bg-[#111111] pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 glow-edge-bottom-right opacity-70" aria-hidden="true" />

      <div className="intent-container relative z-10 max-w-3xl space-y-6">
        <SectionEyebrow>404 — Page not found</SectionEyebrow>
        <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] dark:text-[#F5F5F5]">
          That page moved — or never existed.
        </h1>
        <p className="max-w-xl text-base sm:text-[17px] leading-[1.6] text-[#52504C] dark:text-[#A0A0A0]">
          Start from our work, explore our four services, or jump straight to booking a discovery call.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button href="/work/" variant="secondary" size="md" showArrow>
            Explore Work
          </Button>
          <Button href="/services/" variant="secondary" size="md" showArrow>
            View Services
          </Button>
          <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow>
            {SITE.primaryCta.label}
          </Button>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#F24E1E] dark:text-[#FFD1C2] hover:text-white"
          >
            Return to Homepage
            <ArrowUpRight className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
