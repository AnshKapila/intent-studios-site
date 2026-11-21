import type { Metadata } from "next";
import { Mail, MessageSquare, ArrowDown } from "lucide-react";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { SchedulerEmbed } from "@/components/contact/SchedulerEmbed";
import { ClientQuoteCard } from "@/components/sections/ClientQuoteCard";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 15-minute discovery call or send a short project brief to Intent Studios.",
  alternates: {
    canonical: `${SITE.url}/contact/`,
  },
};

const CONTACT_FAQ = [
  {
    question: "How quickly will I hear back after sending the form?",
    answer:
      "Within one business day. You can also choose a 15-minute discovery call slot right after sending the brief so we can review your goals live.",
  },
  {
    question: "Do I need a full RFP or detailed spec before booking?",
    answer:
      "Not at all. A few lines about your business, what feels broken or outdated today, and your rough target timeline are plenty to start a productive conversation.",
  },
  {
    question: "What if we are not sure which service we need first?",
    answer:
      "That is exactly what the discovery call is for. We will listen first, tell you where the biggest leverage is, and recommend the cleanest sequence — even if that means starting smaller.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Heading & skip-the-form link */}
      <section className="relative overflow-hidden bg-[#000000] pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="absolute inset-0 glow-edge-top-right opacity-70" aria-hidden="true" />

        <div className="intent-container relative z-10 max-w-4xl space-y-5">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="text-[clamp(2.25rem,5vw,3.9rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#F5F5F5]">
            Book a 15-minute discovery call — or send a{" "}
            <span className="font-editorial font-normal text-[#FFD1C2]">
              short brief.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#A0A0A0]">
            Tell us what you are building, where your current presence is holding you back, and when you want to launch.
          </p>
          <a
            href="#direct-scheduler"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#FFD1C2] hover:text-white transition-colors"
          >
            Prefer to skip the form? Jump straight to the scheduler
            <ArrowDown className="h-4 w-4 text-[#F24E1E]" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 2. Brief form + What happens next + Other ways */}
      <section className="border-t border-white/10 bg-[#111111] py-16 sm:py-24">
        <div className="intent-container grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <ContactForm />
            <SchedulerEmbed id="direct-scheduler" />
          </div>

          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* What happens next */}
            <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 space-y-4">
              <h2 className="text-lg font-semibold text-[#F5F5F5]">What happens next</h2>
              <ol className="space-y-3.5 text-sm text-[#A0A0A0]">
                <li className="flex gap-3">
                  <span className="tabular-nums font-semibold text-[#F24E1E]">01</span>
                  <span>We review your brief and current site or product before we get on the call.</span>
                </li>
                <li className="flex gap-3">
                  <span className="tabular-nums font-semibold text-[#F24E1E]">02</span>
                  <span>On our 15-minute call we align on goals, scope, and honest fit — zero hard sell.</span>
                </li>
                <li className="flex gap-3">
                  <span className="tabular-nums font-semibold text-[#F24E1E]">03</span>
                  <span>If it makes sense to work together, you receive a fixed-scope proposal within 48 hours.</span>
                </li>
              </ol>
            </div>

            {/* Other ways: WhatsApp & Email */}
            <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 space-y-4">
              <h2 className="text-lg font-semibold text-[#F5F5F5]">Other ways to reach us</h2>
              <div className="space-y-3">
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#F5F5F5] hover:border-white/25 transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#F24E1E] shrink-0" aria-hidden="true" />
                  <span className="truncate">{SITE.contact.email}</span>
                </a>
                <a
                  href={SITE.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#F5F5F5] hover:border-white/25 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-[#F24E1E] shrink-0" aria-hidden="true" />
                  <span>{SITE.contact.whatsappLabel} (configure number in site.ts)</span>
                </a>
              </div>
            </div>

            {/* Relevant Testimonial */}
            <ClientQuoteCard
              quote="Contact page testimonial placeholder — reserved for a verified client quote on communication speed and clarity."
              name="Verified Client Name [Pending]"
              role="Founder"
              company="Intent Studios Partner"
              credibilityLine="Verified engagement"
              isPlaceholder
            />
          </aside>
        </div>
      </section>

      {/* 3-Question Contact FAQ */}
      <FaqSection
        eyebrow="Before We Speak"
        heading="Three quick answers."
        items={CONTACT_FAQ}
        surface="deep"
      />
    </>
  );
}
