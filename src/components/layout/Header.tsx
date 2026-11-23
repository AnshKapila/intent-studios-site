"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { INTENT_EASE } from "@/lib/motion";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-200">
        <div className="intent-container flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[6px] focus-visible:outline-2 focus-visible:outline-[#F24E1E]"
            aria-label="Intent Studios — Home"
          >
            <BrandLogo size="md" tone="auto" />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {SITE.navLinks.map((item) => {
              const isActive = pathname.startsWith(item.href.replace(/\/$/, ""));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative inline-flex h-[44px] items-center text-[15px] font-medium whitespace-nowrap",
                    "transition-colors duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                    isActive
                      ? "text-[#111111] dark:text-[#F5F5F5]"
                      : "text-[#52504C] hover:text-[#111111] dark:text-[#A0A0A0] dark:hover:text-[#F5F5F5]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-0 bottom-1.5 h-[2px] bg-[#F24E1E]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Theme Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow>
              {SITE.primaryCta.label}
            </Button>
          </div>

          {/* Tablet / Mobile Theme Toggle + CTA + Menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">
              <Button href={SITE.primaryCta.href} variant="primary" size="md">
                Book a call
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[8px] border border-[#111111]/15 dark:border-white/20 bg-transparent text-[#111111] dark:text-[#F5F5F5] cursor-pointer transition-[background-color,border-color] duration-150 hover:bg-[#111111]/[0.04] dark:hover:bg-white/[0.06]"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer — outside <header> so fixed positioning spans full viewport */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: INTENT_EASE }}
            className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-white dark:bg-[#0A0A0A] border-t border-[#111111]/10 dark:border-white/10"
          >
            <div className="intent-container py-8 flex flex-col justify-between min-h-full">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {SITE.navLinks.map((item) => {
                  const isActive = pathname.startsWith(item.href.replace(/\/$/, ""));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex h-[56px] items-center justify-between border-b border-[#111111]/10 dark:border-white/10 text-xl font-medium tracking-[-0.02em]",
                        isActive
                          ? "text-[#F24E1E]"
                          : "text-[#111111] dark:text-[#F5F5F5]"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#7C756D] dark:text-[#A0A0A0]">→</span>
                    </Link>
                  );
                })}
                <Link
                  href="/who-we-help/"
                  className="flex h-[52px] items-center border-b border-[#111111]/10 dark:border-white/10 text-base text-[#52504C] dark:text-[#A0A0A0] hover:text-[#111111] dark:hover:text-[#F5F5F5]"
                >
                  Who We Help
                </Link>
                <Link
                  href="/intent-circle/"
                  className="flex h-[52px] items-center text-base text-[#52504C] dark:text-[#A0A0A0] hover:text-[#111111] dark:hover:text-[#F5F5F5]"
                >
                  Intent Circle
                </Link>
              </nav>

              <div className="mt-8 border-t border-[#111111]/10 dark:border-white/10 pt-6">
                <Button
                  href={SITE.primaryCta.href}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full"
                >
                  {SITE.primaryCta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
