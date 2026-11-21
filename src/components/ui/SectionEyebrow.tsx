import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: string;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionEyebrow({
  children,
  tone = "dark",
  className,
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]",
        tone === "dark"
          ? "bg-[#F24E1E]/10 text-[#FFD1C2] border border-[#F24E1E]/25"
          : "bg-[#111111]/[0.06] text-[#111111] border border-[#111111]/12",
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-[#F24E1E] shrink-0"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
