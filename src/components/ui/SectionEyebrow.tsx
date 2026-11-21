import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: string;
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Quiet, architectural sentence-case label (replaces generic glowing-dot ALL-CAPS pills).
 */
export function SectionEyebrow({
  children,
  tone = "dark",
  className,
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[13px] font-medium tracking-normal",
        tone === "dark" ? "text-[#A0A0A0]" : "text-[#52504C]",
        className
      )}
    >
      <span
        className="h-[1.5px] w-4 bg-[#F24E1E] shrink-0"
        aria-hidden="true"
      />
      <span>{children}</span>
    </span>
  );
}
