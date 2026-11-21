import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
}

export function BrandLogo({
  className,
  size = "md",
  tone = "light",
}: BrandLogoProps) {
  const iconSize = size === "sm" ? 20 : size === "lg" ? 28 : 24;
  const wordSize =
    size === "sm"
      ? "text-[17px]"
      : size === "lg"
        ? "text-[24px]"
        : "text-[20px]";
  const suffixSize =
    size === "sm"
      ? "text-[8px]"
      : size === "lg"
        ? "text-[10px]"
        : "text-[9px]";

  return (
    <span
      translate="no"
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="25"
          height="25"
          rx="6"
          stroke={tone === "light" ? "rgba(255,255,255,0.22)" : "rgba(17,17,17,0.18)"}
          strokeWidth="1.5"
        />
        <rect x="7" y="7" width="4" height="14" rx="1.5" fill={tone === "light" ? "#F5F5F5" : "#111111"} />
        <path
          d="M14 14L20.5 7.5V20.5H14V14Z"
          fill="#F24E1E"
        />
      </svg>
      <span className="inline-flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold tracking-[-0.04em]",
            wordSize,
            tone === "light" ? "text-[#F5F5F5]" : "text-[#111111]"
          )}
        >
          Intent
        </span>
        <span
          className={cn(
            "font-black uppercase tracking-[0.38em] mt-[2px]",
            suffixSize,
            tone === "light" ? "text-[#A0A0A0]" : "text-[#52504C]"
          )}
        >
          STUDIOS
        </span>
      </span>
    </span>
  );
}
