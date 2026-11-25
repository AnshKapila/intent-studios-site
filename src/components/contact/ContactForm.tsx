"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { SchedulerEmbed } from "./SchedulerEmbed";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  brief?: string;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("website-design");
  const [brief, setBrief] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const briefRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Enter your name so we know who we are speaking with.";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid work email address so we can reply.";
    }
    if (!brief.trim() || brief.trim().length < 15) {
      nextErrors.brief = "Share at least a short sentence about what you want to build or improve.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.brief) briefRef.current?.focus();
      return;
    }

    // Frontend state transition only — does not fake a backend send.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="space-y-8" aria-live="polite">
        <div className="rounded-[24px] border border-[#F24E1E]/40 bg-[#FAF9F7] dark:bg-[#181817] p-7 sm:p-9 space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F24E1E]/15 text-[#F24E1E]">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-[#111111] dark:text-[#F5F5F5]">
                Brief captured — next, pick your 15-minute slot
              </h2>
              <p className="text-xs text-[#52504C] dark:text-[#A0A0A0]">
                Frontend preview state · Connect your form endpoint in src/components/contact/ContactForm.tsx for live email delivery
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
            Thank you, <strong className="text-[#111111] dark:text-[#F5F5F5]">{name}</strong>. Your project details are ready. Choose a discovery call time below, or continue to the confirmation summary.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/thank-you/"
              className="inline-flex h-[44px] items-center gap-2 rounded-[8px] bg-[#F24E1E] px-5 text-[15px] font-medium text-white hover:bg-[#D94114] transition-colors"
            >
              Continue to Thank You page
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex h-[44px] items-center rounded-[8px] border border-[#111111]/20 dark:border-white/20 px-5 text-[15px] font-medium text-[#52504C] dark:text-[#A0A0A0] hover:text-[#F5F5F5] hover:border-white/35 cursor-pointer"
            >
              Edit brief
            </button>
          </div>
        </div>

        <SchedulerEmbed id="post-submit-scheduler" />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[24px] border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#181817] p-6 sm:p-8 space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-sm font-medium text-[#111111] dark:text-[#F5F5F5]">
            Your name <span className="text-[#F24E1E]">*</span>
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Alex Rivera…"
            className="w-full min-h-[48px] rounded-xl border border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] px-4 py-3 text-sm text-[#111111] dark:text-[#F5F5F5] placeholder:text-[#737373] transition-colors focus:border-[#F24E1E]"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="text-xs text-[#F24E1E] dark:text-[#FFD1C2]">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-medium text-[#111111] dark:text-[#F5F5F5]">
            Work email <span className="text-[#F24E1E]">*</span>
          </label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="alex@company.com…"
            className="w-full min-h-[48px] rounded-xl border border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] px-4 py-3 text-sm text-[#111111] dark:text-[#F5F5F5] placeholder:text-[#737373] transition-colors focus:border-[#F24E1E]"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="text-xs text-[#F24E1E] dark:text-[#FFD1C2]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-company" className="block text-sm font-medium text-[#111111] dark:text-[#F5F5F5]">
            Company or brand URL
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="yourbrand.com…"
            className="w-full min-h-[48px] rounded-xl border border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] px-4 py-3 text-sm text-[#111111] dark:text-[#F5F5F5] placeholder:text-[#737373] transition-colors focus:border-[#F24E1E]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-service" className="block text-sm font-medium text-[#111111] dark:text-[#F5F5F5]">
            Primary focus
          </label>
          <select
            id="contact-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full min-h-[48px] rounded-xl border border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] px-4 py-3 text-sm text-[#111111] dark:text-[#F5F5F5] transition-colors focus:border-[#F24E1E]"
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="multiple">Multiple services / Full launch</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-brief" className="block text-sm font-medium text-[#111111] dark:text-[#F5F5F5]">
          What are you looking to build or improve? <span className="text-[#F24E1E]">*</span>
        </label>
        <textarea
          ref={briefRef}
          id="contact-brief"
          name="brief"
          rows={4}
          required
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          aria-invalid={Boolean(errors.brief)}
          aria-describedby={errors.brief ? "contact-brief-error" : undefined}
          placeholder="Tell us about your business, timeline, and the main problem you want to solve…"
          className="w-full rounded-xl border border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] px-4 py-3 text-sm text-[#111111] dark:text-[#F5F5F5] placeholder:text-[#737373] transition-colors focus:border-[#F24E1E]"
        />
        {errors.brief && (
          <p id="contact-brief-error" role="alert" className="text-xs text-[#F24E1E] dark:text-[#FFD1C2]">
            {errors.brief}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        <Button type="submit" variant="primary" size="lg" showArrow>
          Send brief &amp; pick a call slot
        </Button>
        <p className="text-xs text-[#52504C] dark:text-[#A0A0A0]">
          We reply within one business day. No spam, ever.
        </p>
      </div>
    </form>
  );
}
