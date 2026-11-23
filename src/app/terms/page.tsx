import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Intent Studios.",
  alternates: {
    canonical: `${SITE.url}/terms/`,
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white dark:bg-[#000000] pt-36 pb-24 sm:pt-44">
      <div className="intent-container max-w-3xl space-y-8">
        <div className="space-y-4">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#111111] dark:text-[#F5F5F5]">
            Terms of Service
          </h1>
          <p className="text-sm text-[#52504C] dark:text-[#A0A0A0]">
            Structured legal template — confirm final legal entity name and governing law in CONTENT-REQUIREMENTS.md before production launch.
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#52504C] dark:text-[#A0A0A0] border-t border-[#111111]/10 dark:border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#111111] dark:text-[#F5F5F5]">1. Scope of website content</h2>
            <p>
              Content on this website provides general information about Intent Studios’ services and approach. Specific project scope, timelines, deliverables, and fees are governed solely by signed client proposals and statements of work.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#111111] dark:text-[#F5F5F5]">2. Intellectual property</h2>
            <p>
              All brand marks, design systems, copy, and code published on this site belong to Intent Studios unless otherwise attributed. Client project intellectual property transfers per the terms of each signed agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#111111] dark:text-[#F5F5F5]">3. Contact</h2>
            <p>
              Questions regarding these terms may be directed to{" "}
              <a href={`mailto:${SITE.contact.email}`} className="text-[#F24E1E] dark:text-[#FFD1C2] underline underline-offset-4">
                {SITE.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
