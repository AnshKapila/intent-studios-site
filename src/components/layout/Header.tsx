"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
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
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] bg-[#0A0A0A] border-b border-white/10">
        <div className="intent-container flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[6px] focus-visible:outline-2 focus-visible:outline-[#F24E1E]"
            aria-label="Intent Studios — Home"
          >
            <BrandLogo size="md" />
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
                      ? "text-[#F5F5F5]"
                      : "text-[#A0A0A0] hover:text-[#F5F5F5]"
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button href={SITE.primaryCta.href} variant="primary" size="md" showArrow>
              {SITE.primaryCta.label}
            </Button>
          </div>

          {/* Tablet CTA + Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2.5">
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
              className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[8px] border border-white/20 bg-transparent text-[#F5F5F5] cursor-pointer transition-[background-color,border-color] duration-150 hover:bg-white/[0.06] hover:border-white/35"
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
            className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-[#0A0A0A] border-t border-white/10"
          >
            <div className="intent-container flex min-h-full flex-col justify-between py-8">
              <nav aria-label="Mobile navigation links" className="flex flex-col">
                <Link
                  href="/"
                  className={cn(
                    "flex h-[56px] items-center border-b border-white/10 text-xl font-medium tracking-[-0.02em]",
                    pathname === "/" ? "text-[#F5F5F5]" : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                  )}
                >
                  Home
                </Link>
                {SITE.navLinks.map((item) => {
                  const isActive = pathname.startsWith(item.href.replace(/\/$/, ""));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex h-[56px] items-center border-b border-white/10 text-xl font-medium tracking-[-0.02em]",
                        isActive ? "text-[#F5F5F5]" : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/who-we-help/"
                  className="flex h-[52px] items-center border-b border-white/10 text-base text-[#A0A0A0] hover:text-[#F5F5F5]"
                >
                  Who We Help
                </Link>
                <Link
                  href="/intent-circle/"
                  className="flex h-[52px] items-center text-base text-[#A0A0A0] hover:text-[#F5F5F5]"
                >
                  Intent Circle
                </Link>
              </nav>

              <div className="mt-8 border-t border-white/10 pt-6">
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
