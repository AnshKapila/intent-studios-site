import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#000000] border-t border-white/10 pt-16 sm:pt-20">
      <div className="intent-container relative z-10">
        {/* Top multi-column sitemap directory (Wireframe Block 9) */}
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-12">
          {/* Studio column */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <Link href="/" aria-label="Intent Studios — Home" className="inline-flex">
              <BrandLogo size="md" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#A0A0A0]">
              AI-powered creative and digital product studio. We design for conversion, not just for looks.
            </p>
            <p className="text-xs font-semibold tracking-[0.04em] text-[#A0A0A0]">
              {SITE.signOff}
            </p>
          </div>

          {/* Studio Links */}
          <div className="md:col-span-2 space-y-3.5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F5]">
              Studio
            </h2>
            <ul className="space-y-2.5 text-sm text-[#A0A0A0]">
              <li>
                <Link href="/work/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/intent-circle/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                  Intent Circle
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F5]">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm text-[#A0A0A0]">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help + Socials */}
          <div className="col-span-2 md:col-span-3 space-y-6">
            <div className="space-y-3.5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F5]">
                Who We Help
              </h2>
              <ul className="space-y-2.5 text-sm text-[#A0A0A0]">
                <li>
                  <Link href="/who-we-help/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                    All Industries
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help/fitness-wellness/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                    Fitness &amp; Wellness
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help/d2c-brands/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-200">
                    D2C &amp; Product Brands
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F5]">
                Connect
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-[#A0A0A0]">
                <a
                  href={SITE.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[32px] items-center gap-1 hover:text-[#F5F5F5] transition-colors duration-200"
                >
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[32px] items-center gap-1 hover:text-[#F5F5F5] transition-colors duration-200"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + two dark rounded direct-contact cards (Wireframe Block 9) */}
        <div className="border-t border-white/10 py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={SITE.primaryCta.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color,background-color] duration-200 hover:border-[#F24E1E]/45 hover:bg-[#111111]"
            >
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFD1C2]">
                  <MessageSquare className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  Talk to us
                </span>
                <p className="text-lg font-semibold tracking-[-0.02em] text-[#F5F5F5]">
                  {SITE.primaryCta.label}
                </p>
                <p className="text-sm text-[#A0A0A0]">
                  Share your goals, get an honest fit check, and leave with a clear next step.
                </p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-[#A0A0A0] transition-[color,transform] duration-200 group-hover:text-[#F24E1E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <a
              href={`mailto:${SITE.contact.email}`}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color,background-color] duration-200 hover:border-white/25 hover:bg-[#111111]"
            >
              <div className="space-y-1.5 min-w-0">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A0A0A0]">
                  <Mail className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  Direct Email
                </span>
                <p className="text-lg font-semibold tracking-[-0.02em] text-[#F5F5F5] truncate">
                  {SITE.contact.email}
                </p>
                <p className="text-sm text-[#A0A0A0]">
                  {SITE.contact.location}
                </p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-[#A0A0A0] transition-[color,transform] duration-200 group-hover:text-[#F5F5F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-[#A0A0A0] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Intent Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy/" className="hover:text-[#F5F5F5] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-[#F5F5F5] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Monumental edge-to-edge bottom brand wordmark (Wireframe Block 9 signature) */}
      <div
        aria-hidden="true"
        translate="no"
        className="mt-4 select-none overflow-hidden px-3 pb-2 text-center leading-[0.82]"
      >
        <span className="inline-block whitespace-nowrap text-[clamp(3.25rem,14.5vw,13.5rem)] font-semibold tracking-[-0.045em] text-white/[0.92]">
          Intent{" "}
          <span className="font-editorial font-normal text-white/[0.82]">
            Studios
          </span>
        </span>
      </div>
    </footer>
  );
}
