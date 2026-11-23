"use client";

import { Calendar, Clock, ExternalLink } from "lucide-react";

const SCHEDULER_URL = process.env.NEXT_PUBLIC_SCHEDULER_URL || "";

export function SchedulerEmbed({ id = "scheduler" }: { id?: string }) {
  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-[24px] border border-[#111111]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#0A0A0A] p-6 sm:p-8 space-y-6"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#111111]/10 dark:border-white/10 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#F24E1E] dark:text-[#FFD1C2]">
            <Calendar className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
            Discovery call scheduler
          </div>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111] dark:text-[#F5F5F5]">
            Pick a 15-minute slot directly
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[13px] text-[#52504C] dark:text-[#A0A0A0] self-start sm:self-center">
          <Clock className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
          15 minutes · Video call
        </span>
      </div>

      {SCHEDULER_URL ? (
        <div className="overflow-hidden rounded-2xl border border-[#111111]/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#111111]">
          <iframe
            src={SCHEDULER_URL}
            title="Book a 15-minute discovery call with Intent Studios"
            className="h-[580px] w-full border-0"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#111111]/15 dark:border-white/15 bg-[#F7F4F1] dark:bg-[#111111] p-7 sm:p-10 text-center space-y-4">
          <p className="text-base font-semibold text-[#111111] dark:text-[#F5F5F5]">
            Live calendar embed ready for connection
          </p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#52504C] dark:text-[#A0A0A0]">
            Set <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-[#F24E1E] dark:text-[#FFD1C2]">NEXT_PUBLIC_SCHEDULER_URL</code> to your Cal.com or Calendly booking link to render your live 15-minute scheduler right here.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/50 px-4 py-2 text-xs text-[#52504C] dark:text-[#A0A0A0]">
            <ExternalLink className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
            See CONTENT-REQUIREMENTS.md for integration checklist
          </div>
        </div>
      )}
    </div>
  );
}
