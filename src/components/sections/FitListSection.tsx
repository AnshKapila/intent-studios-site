import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FitListSectionProps {
  bestFit: readonly string[];
  notAFit: readonly string[];
  heading?: string;
  className?: string;
}

export function FitListSection({
  bestFit,
  notAFit,
  heading = "Honest fit check before we start.",
  className,
}: FitListSectionProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="max-w-2xl">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
          {heading}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#A0A0A0]">
          We work best with founders who want a capable partner, not a low-cost vendor.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Best fit */}
        <div className="rounded-2xl border border-[#F24E1E]/25 bg-[#0A0A0A] p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F24E1E]/15 text-[#F24E1E]">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <h4 className="text-base font-semibold text-[#F5F5F5]">Best fit</h4>
          </div>
          <ul className="mt-5 space-y-3.5">
            {bestFit.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-[#F5F5F5]/90">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#F24E1E]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not a fit */}
        <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/70 p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[#A0A0A0]">
              <X className="h-4 w-4" aria-hidden="true" />
            </span>
            <h4 className="text-base font-semibold text-[#F5F5F5]">Not a fit</h4>
          </div>
          <ul className="mt-5 space-y-3.5">
            {notAFit.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-[#A0A0A0]">
                <X className="mt-1 h-4 w-4 shrink-0 text-[#A0A0A0]/70" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
