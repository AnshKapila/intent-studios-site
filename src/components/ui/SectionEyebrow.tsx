import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: string;
  tone?: "auto" | "dark" | "light";
  className?: string;
}

/**
 * Quiet, architectural sentence-case label (adapts automatically to Light & Dark mode).
 */
export function SectionEyebrow({
  children,
  tone = "auto",
  className,
}: SectionEyebrowProps) {
  const toneClass =
    tone === "dark"
      ? "text-[#A0A0A0]"
      : tone === "light"
        ? "text-[#52504C]"
        : "text-[#52504C] dark:text-[#A0A0A0]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[13px] font-medium tracking-normal",
        toneClass,
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
