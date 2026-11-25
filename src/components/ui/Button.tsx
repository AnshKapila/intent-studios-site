import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "light-primary"
  | "light-secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#F24E1E] text-white border border-[#F24E1E] hover:bg-[#D94114] hover:border-[#D94114]",
  secondary:
    "bg-white text-[#111111] border border-[#111111]/16 hover:border-[#111111]/35 hover:bg-[#F7F4F1] dark:bg-[#1F1E1C] dark:text-white dark:border-white/18 dark:hover:bg-[#2A2926] dark:hover:border-white/35",
  tertiary:
    "bg-transparent text-[#111111] dark:text-white border border-transparent underline decoration-[#111111]/30 dark:decoration-white/30 underline-offset-4 hover:text-[#F24E1E] hover:decoration-[#F24E1E] px-0",
  ghost:
    "bg-transparent text-[#111111] dark:text-white border border-transparent hover:bg-[#111111]/[0.05] dark:hover:bg-white/[0.08]",
  "light-primary":
    "bg-[#111111] text-white border border-[#111111] hover:bg-[#262523] hover:border-[#262523]",
  "light-secondary":
    "bg-white text-[#111111] border border-[#111111]/20 hover:bg-[#F7F4F1] hover:border-[#111111]/40",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[36px] px-4 text-[13px]",
  md: "h-[44px] px-5 text-[14px]",
  lg: "h-[48px] px-6 text-[15px]",
};

/**
 * Unified Intent Studios Button — Option C: Forma Kinetic Pill
 * - Primary (+ showArrow): #F24E1E rounded-full pill with left circular #111111 dual-sliding-arrow badge
 * - Secondary / light-primary / light-secondary: rounded-full pill with vertical text-swap on hover
 * - Tertiary: underlined editorial link with subtle arrow micro-shift
 */
export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  showArrow = false,
  disabled = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const isKineticPrimary =
    (variant === "primary" || variant === "light-primary") && showArrow;
  const isSwapPill =
    variant === "secondary" ||
    variant === "light-secondary" ||
    ((variant === "primary" || variant === "light-primary") && !showArrow);
  const isTertiary = variant === "tertiary";

  const badgeSize =
    size === "sm"
      ? "h-[28px] w-[28px]"
      : size === "lg"
        ? "h-[40px] w-[40px]"
        : "h-[36px] w-[36px]";

  const kineticPadding =
    size === "sm"
      ? "h-[36px] py-[3px] pl-[3px] pr-4 text-[13px] gap-2.5"
      : size === "lg"
        ? "h-[48px] py-[3px] pl-[3px] pr-6 text-[15px] gap-3"
        : "h-[44px] py-[3px] pl-[3px] pr-5 text-[14px] gap-2.5";

  const classes = cn(
    "group inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] cursor-pointer select-none whitespace-nowrap",
    "transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
    !isTertiary && "active:scale-[0.985]",
    "disabled:opacity-45 disabled:cursor-not-allowed disabled:active:scale-100",
    variantClasses[variant],
    isKineticPrimary ? kineticPadding : isTertiary ? "h-auto py-1 text-[14px] gap-1.5" : cn(sizeClasses[size], "gap-2"),
    className
  );

  const content = isKineticPrimary ? (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          badgeSize,
          variant === "light-primary"
            ? "bg-[#F24E1E] text-white"
            : "bg-[#111111] text-white"
        )}
      >
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-7" />
        <ArrowRight className="absolute h-3.5 w-3.5 -translate-x-7 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
      </span>
      <span className="flex-1 text-center">{children}</span>
    </>
  ) : isSwapPill ? (
    <>
      <span className="relative block h-[20px] overflow-hidden leading-[20px]">
        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
        >
          {children}
        </span>
      </span>
      {showArrow && (
        <ArrowRight
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
          aria-hidden="true"
        />
      )}
    </>
  ) : (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
