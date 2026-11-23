import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#000000] border-t border-white/10 pt-16 sm:pt-20">
      <div className="intent-container relative z-10">
        {/* Top multi-column sitemap directory */}
        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4 space-y-4">
            <Link href="/" aria-label="Intent Studios — Home" className="inline-flex">
              <BrandLogo size="md" />
            </Link>
            <p className="max-w-xs text-[15px] leading-relaxed text-[#A0A0A0]">
              AI-powered creative and digital product studio. We design for conversion, not just for looks.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h2 className="text-[13px] font-medium text-[#F5F5F5]">Studio</h2>
            <ul className="space-y-2 text-[15px] text-[#A0A0A0]">
              <li>
                <Link href="/work/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/intent-circle/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                  Intent Circle
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-[13px] font-medium text-[#F5F5F5]">Services</h2>
            <ul className="space-y-2 text-[15px] text-[#A0A0A0]">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 space-y-6">
            <div className="space-y-3">
              <h2 className="text-[13px] font-medium text-[#F5F5F5]">Who we help</h2>
              <ul className="space-y-2 text-[15px] text-[#A0A0A0]">
                <li>
                  <Link href="/who-we-help/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                    All industries
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help/fitness-wellness/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                    Fitness &amp; Wellness
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help/d2c-brands/" className="inline-flex min-h-[32px] items-center hover:text-[#F5F5F5] transition-colors duration-150">
                    D2C &amp; Product Brands
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[13px] font-medium text-[#F5F5F5]">Connect</h2>
              <div className="flex flex-wrap gap-5 text-[15px] text-[#A0A0A0]">
                <a
                  href={SITE.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] transition-colors duration-150"
                >
                  Instagram
                </a>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] transition-colors duration-150"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two direct-contact architectural cards */}
        <div className="border-t border-white/10 py-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={SITE.primaryCta.href}
              className="group flex items-start justify-between gap-4 rounded-[12px] border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color,transform,background-color] duration-150 hover:-translate-y-[2px] hover:border-white/25 hover:bg-[#111111]"
            >
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A0A0A0]">
                  <MessageSquare className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  Talk to us
                </span>
                <p className="text-[17px] font-semibold tracking-[-0.015em] text-[#F5F5F5]">
                  {SITE.primaryCta.label}
                </p>
                <p className="text-[15px] text-[#A0A0A0]">
                  Clear scope, honest fit check, and a practical next step.
                </p>
              </div>
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-[#A0A0A0] transition-[color,transform] duration-150 group-hover:text-[#F24E1E] group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Link>

            <a
              href={`mailto:${SITE.contact.email}`}
              className="group flex items-start justify-between gap-4 rounded-[12px] border border-white/10 bg-[#0A0A0A] p-6 transition-[border-color,transform,background-color] duration-150 hover:-translate-y-[2px] hover:border-white/25 hover:bg-[#111111]"
            >
              <div className="space-y-1.5 min-w-0">
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A0A0A0]">
                  <Mail className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  Direct email
                </span>
                <p className="text-[17px] font-semibold tracking-[-0.015em] text-[#F5F5F5] truncate">
                  {SITE.contact.email}
                </p>
                <p className="text-[15px] text-[#A0A0A0]">
                  {SITE.contact.location}
                </p>
              </div>
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-[#A0A0A0] transition-[color,transform] duration-150 group-hover:text-[#F5F5F5] group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Legal & photo attribution row */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[13px] text-[#A0A0A0] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>© {new Date().getFullYear()} Intent Studios.</span>
            <span className="text-[#737373]">Photographs via Wikimedia Commons (temporary stand-ins).</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy/" className="hover:text-[#F5F5F5] transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-[#F5F5F5] transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Monumental edge-to-edge bottom brand wordmark */}
      <div
        aria-hidden="true"
        translate="no"
        className="mt-2 select-none overflow-hidden px-3 pb-2 text-center leading-[0.84]"
      >
        <span className="inline-block whitespace-nowrap text-[clamp(3.25rem,13.8vw,12.5rem)] font-medium tracking-[-0.045em] text-white/[0.9]">
          Intent{" "}
          <span className="font-editorial font-normal text-white/[0.78]">
            Studios
          </span>
        </span>
      </div>
    </footer>
  );
}
