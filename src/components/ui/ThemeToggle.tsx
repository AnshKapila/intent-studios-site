"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Compact dual-mode pill toggle for Light / Dark mode in the top navbar.
 * Shows both Sun (Light) and Moon (Dark) with an active highlight pill.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : false;

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "inline-flex h-[40px] items-center rounded-full border p-1 transition-colors duration-200",
        "border-[#111111]/12 bg-[#F7F4F1]",
        "dark:border-white/15 dark:bg-[#141414]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light mode"
        aria-pressed={!isDark}
        title="Light mode"
        className={cn(
          "inline-flex h-[30px] w-[34px] cursor-pointer items-center justify-center rounded-full transition-all duration-200",
          !isDark
            ? "bg-white text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
            : "text-[#A0A0A0] hover:text-white"
        )}
      >
        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark mode"
        aria-pressed={isDark}
        title="Dark mode"
        className={cn(
          "inline-flex h-[30px] w-[34px] cursor-pointer items-center justify-center rounded-full transition-all duration-200",
          isDark
            ? "bg-[#262626] text-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            : "text-[#7C756D] hover:text-[#111111]"
        )}
      >
        <Moon className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}
