import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light-primary" | "light-secondary";
type ButtonSize = "md" | "lg";

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
    "bg-white text-[#111111] border border-[#111111]/15 hover:bg-[#F7F4F1] hover:border-[#111111]/30 dark:bg-transparent dark:text-[#F5F5F5] dark:border-white/20 dark:hover:bg-white/[0.06] dark:hover:border-white/35",
  ghost:
    "bg-transparent text-[#111111] border border-transparent hover:bg-[#111111]/[0.05] dark:text-[#F5F5F5] dark:hover:bg-white/[0.06]",
  "light-primary":
    "bg-[#111111] text-[#F5F5F5] border border-[#111111] hover:bg-[#262626] hover:border-[#262626]",
  "light-secondary":
    "bg-transparent text-[#111111] border border-[#111111]/25 hover:bg-[#111111]/[0.05] hover:border-[#111111]/45",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-[44px] px-5 text-[15px]",
  lg: "h-[48px] px-6 text-[15px]",
};

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
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[8px] font-medium tracking-[-0.01em] cursor-pointer select-none whitespace-nowrap",
    "transition-[background-color,border-color,color,transform] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
    "hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.985]",
    "disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:active:scale-100",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-[3px]"
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
