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
    <figure className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] p-7 sm:p-9">
      <div className="relative z-10 space-y-5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#F24E1E]/30 bg-[#F24E1E]/10 text-[#F24E1E]">
          <Quote className="h-4 w-4" aria-hidden="true" />
        </span>

        <blockquote className="text-lg sm:text-xl font-medium leading-[1.45] tracking-[-0.015em] text-[#F5F5F5]">
          “{quote}”
        </blockquote>

        <figcaption className="flex flex-col gap-1 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[15px] font-medium text-[#F5F5F5]">{name}</div>
            <div className="text-[13px] text-[#A0A0A0]">
              {role}, {company}
            </div>
          </div>
          <span className="text-[13px] font-medium text-[#FFD1C2]">
            {credibilityLine}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
