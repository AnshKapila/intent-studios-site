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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled || menuOpen
            ? "bg-[#000000]/92 border-b border-white/10 backdrop-blur-xl"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="intent-container flex h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-lg focus-visible:outline-2 focus-visible:outline-[#F24E1E]"
            aria-label="Intent Studios — Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {SITE.navLinks.map((item) => {
              const isActive = pathname.startsWith(item.href.replace(/\/$/, ""));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative inline-flex min-h-[44px] items-center px-4 text-sm font-medium rounded-full",
                    "transition-[color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "text-[#F5F5F5] bg-white/[0.08]"
                      : "text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#F24E1E]"
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-[#F5F5F5] cursor-pointer transition-[background-color,border-color] duration-200 hover:bg-white/10"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer — rendered outside <header> so backdrop-blur never traps fixed height */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: INTENT_EASE }}
            className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-[#000000] border-t border-white/10"
          >
            <div className="intent-container flex min-h-full flex-col justify-between py-8">
              <nav aria-label="Mobile navigation links" className="flex flex-col gap-2">
                <Link
                  href="/"
                  className={cn(
                    "flex min-h-[52px] items-center justify-between rounded-xl px-4 text-2xl font-semibold tracking-[-0.02em]",
                    pathname === "/" ? "bg-white/[0.08] text-[#F5F5F5]" : "text-[#A0A0A0] hover:text-[#F5F5F5]"
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
                        "flex min-h-[52px] items-center justify-between rounded-xl px-4 text-2xl font-semibold tracking-[-0.02em]",
                        isActive
                          ? "bg-white/[0.08] text-[#F5F5F5]"
                          : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="my-4 h-px bg-white/10" />
                <Link
                  href="/who-we-help/"
                  className="flex min-h-[44px] items-center px-4 text-base text-[#A0A0A0] hover:text-[#F5F5F5]"
                >
                  Who We Help
                </Link>
                <Link
                  href="/intent-circle/"
                  className="flex min-h-[44px] items-center px-4 text-base text-[#A0A0A0] hover:text-[#F5F5F5]"
                >
                  Intent Circle
                </Link>
              </nav>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <Button
                  href={SITE.primaryCta.href}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full"
                >
                  {SITE.primaryCta.label}
                </Button>
                <p className="text-center text-xs text-[#A0A0A0]">
                  {SITE.signOff}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
