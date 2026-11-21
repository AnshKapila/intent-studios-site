import { Quote } from "lucide-react";

interface ClientQuoteCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  credibilityLine: string;
  isPlaceholder?: boolean;
}

export function ClientQuoteCard({
  quote,
  name,
  role,
  company,
  credibilityLine,
  isPlaceholder = false,
}: ClientQuoteCardProps) {
  return (
    <figure className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0A0A0A] p-7 sm:p-10">
      <div className="absolute inset-0 glow-edge-top-right opacity-55" aria-hidden="true" />
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F24E1E]/30 bg-[#F24E1E]/10 text-[#F24E1E]">
            <Quote className="h-4 w-4" aria-hidden="true" />
          </span>
          {isPlaceholder && (
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-[#A0A0A0]">
              Verified quote slot · Pending client approval
            </span>
          )}
        </div>

        <blockquote className="text-xl sm:text-2xl font-medium leading-[1.4] tracking-[-0.02em] text-[#F5F5F5]">
          “{quote}”
        </blockquote>

        <figcaption className="flex flex-col gap-1 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-[#F5F5F5]">{name}</div>
            <div className="text-xs text-[#A0A0A0]">
              {role}, {company}
            </div>
          </div>
          <span className="text-xs font-medium text-[#FFD1C2]">
            {credibilityLine}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
