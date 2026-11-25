import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: string;
  tone?: "auto" | "dark" | "light";
  className?: string;
}

/**
 * Universal Intent Studios Section Eyebrow:
 * 24px x 1px #F24E1E hairline dash + .type-p3 sentence-case label.
 */
export function SectionEyebrow({
  children,
  tone = "auto",
  className,
}: SectionEyebrowProps) {
  const toneClass =
    tone === "dark"
      ? "text-[#A3A09A]"
      : tone === "light"
        ? "text-[#52504C]"
        : "text-[#52504C] dark:text-[#A3A09A]";

  return (
    <span
      className={cn(
        "type-p3 inline-flex items-center gap-3",
        toneClass,
        className
      )}
    >
      <span
        className="h-[1px] w-6 bg-[#F24E1E] shrink-0"
        aria-hidden="true"
      />
      <span>{children}</span>
    </span>
  );
}
