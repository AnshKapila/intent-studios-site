import type { ProofItem } from "@/data/site";
import { cn } from "@/lib/utils";

interface ProofBarProps {
  items: ProofItem[];
  variant?: "hero" | "standalone";
  className?: string;
}

export function ProofBar({
  items,
  variant = "standalone",
  className,
}: ProofBarProps) {
  return (
    <div
      className={cn(
        variant === "standalone"
          ? "border-y border-white/10 bg-[#0A0A0A] py-10"
          : "border-t border-white/10 bg-black/50 backdrop-blur-md",
        className
      )}
    >
      <div className="intent-container">
        <dl
          className={cn(
            "grid gap-6 sm:grid-cols-2",
            items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
            variant === "hero" ? "py-6" : ""
          )}
        >
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 border-l border-white/10 pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                {item.label}
              </dt>
              <dd className="tabular-nums text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                {item.value}
              </dd>
              <p className="text-xs sm:text-sm leading-relaxed text-[#A0A0A0]">
                {item.context}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
