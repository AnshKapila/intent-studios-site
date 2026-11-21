import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    "bg-[#F24E1E] text-white border border-[#F24E1E] hover:bg-[#D94114] hover:border-[#D94114] shadow-[0_8px_28px_rgba(242,78,30,0.22)]",
  secondary:
    "bg-white/[0.05] text-[#F5F5F5] border border-white/15 hover:bg-white/[0.11] hover:border-white/30",
  ghost:
    "bg-transparent text-[#F5F5F5] border border-transparent hover:bg-white/[0.06]",
  "light-primary":
    "bg-[#111111] text-[#F5F5F5] border border-[#111111] hover:bg-[#222222]",
  "light-secondary":
    "bg-transparent text-[#111111] border border-[#111111]/20 hover:bg-[#111111]/[0.06] hover:border-[#111111]/40",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-[44px] px-5 py-2.5 text-sm",
  lg: "min-h-[50px] px-7 py-3.5 text-[15px]",
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
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] cursor-pointer select-none",
    "transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "active:scale-[0.98] disabled:opacity-45 disabled:cursor-not-allowed disabled:active:scale-100",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
