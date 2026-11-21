import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Intent Studios.",
  alternates: {
    canonical: `${SITE.url}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#000000] pt-36 pb-24 sm:pt-44">
      <div className="intent-container max-w-3xl space-y-8">
        <div className="space-y-4">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#F5F5F5]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#A0A0A0]">
            Structured legal template — confirm final legal entity details and jurisdiction in CONTENT-REQUIREMENTS.md before production launch.
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#A0A0A0] border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">1. Information we collect</h2>
            <p>
              When you submit an enquiry or book a discovery call with Intent Studios, we collect only the details you voluntarily provide — such as your name, work email address, company URL, and project brief.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">2. How we use your information</h2>
            <p>
              We use your contact information strictly to respond to your enquiry, prepare for your discovery call, and communicate regarding active engagements. We never sell or rent your data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">3. Data retention &amp; deletion</h2>
            <p>
              You may request access to, correction of, or deletion of your personal contact details at any time by emailing{" "}
              <a href={`mailto:${SITE.contact.email}`} className="text-[#FFD1C2] underline underline-offset-4">
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
