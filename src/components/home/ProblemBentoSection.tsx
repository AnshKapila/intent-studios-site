"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { BUYER_FRUSTRATIONS, WHAT_WE_ARE_NOT } from "@/data/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUpVariants, staggerContainerVariants, VIEWPORT_CONFIG } from "@/lib/motion";

export function ProblemBentoSection() {
  return (
    <section className="relative bg-[#F7F4F1] text-[#111111] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="intent-container relative z-10">
        {/* Centered Editorial Header (Wireframe Block 2) */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow tone="light">The Real Problem</SectionEyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111111]">
            Why growing teams outgrow templates — and skip{" "}
            <span className="font-editorial font-normal">slow agencies.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-[#52504C]">
            Most ambitious founders sit in an awkward middle: too serious for generic freelancers, not interested in bloated agency retainers.
          </p>
        </div>

        {/* Asymmetric 2x2 Bento Grid (Wireframe Block 2: Row 1 7/5 split, Row 2 5/7 split) */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="mt-14 grid gap-5 lg:grid-cols-12"
        >
          {/* Card 1 (7 cols): Verbatim Buyer Frustrations */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-7 flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {BUYER_FRUSTRATIONS.map((item) => (
                <div
                  key={item.quote}
                  className="rounded-2xl border border-[#111111]/8 bg-[#F7F4F1] p-4 flex flex-col justify-between gap-2.5"
                >
                  <p className="text-sm font-semibold leading-snug tracking-[-0.01em] text-[#111111]">
                    {item.quote}
                  </p>
                  <p className="text-xs leading-relaxed text-[#52504C]">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-[#111111]/10 pt-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
                What founders tell us on day one
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#52504C]">
                Underneath every website, app, or visual request is the same goal: you want your brand to be taken seriously the moment someone lands on it.
              </p>
            </div>
          </motion.div>

          {/* Card 2 (5 cols): The Middle Ground Visualizer */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
          >
            <div className="rounded-2xl border border-[#111111]/8 bg-[#F7F4F1] p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-[#52504C]">
                <span>Market Positioning</span>
                <span className="text-[#F24E1E]">The Sweet Spot</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 border border-[#111111]/8 text-xs">
                  <span className="font-medium text-[#52504C]">Generic Freelancers</span>
                  <span className="text-[#52504C]/80">Low cost · High hand-holding</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[#111111] px-4 py-3.5 text-xs text-[#F5F5F5] shadow-md">
                  <span className="font-semibold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#F24E1E]" aria-hidden="true" />
                    Intent Studios
                  </span>
                  <span className="text-[#FFD1C2] font-medium">Senior craft · Practical AI speed</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 border border-[#111111]/8 text-xs">
                  <span className="font-medium text-[#52504C]">Traditional Agencies</span>
                  <span className="text-[#52504C]/80">Slow timelines · Heavy overhead</span>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-[#111111]/10 pt-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
                Built for speed without compromise
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#52504C]">
                Direct access to creative direction and engineering — zero account-manager relay or padded timelines.
              </p>
            </div>
          </motion.div>

          {/* Card 3 (5 cols): What We Are Not */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
          >
            <ul className="space-y-3">
              {WHAT_WE_ARE_NOT.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-[#111111]/8 bg-[#F7F4F1] p-4 flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#111111]/10 text-[#111111]">
                    <X className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#111111]">{item.title}</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#52504C]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-[#111111]/10 pt-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
                What we refuse to be
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#52504C]">
                We are a thinking partner, not an order-taking vendor.
              </p>
            </div>
          </motion.div>

          {/* Card 4 (7 cols): What We Do Instead */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-7 flex flex-col justify-between rounded-[24px] border border-[#111111]/10 bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
          >
            <div className="rounded-2xl border border-[#111111]/8 bg-[#F7F4F1] p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#111111]">
                  <Sparkles className="h-3.5 w-3.5 text-[#F24E1E]" aria-hidden="true" />
                  How Intent Studios Operates
                </span>
                <span className="rounded-full bg-[#F24E1E]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#F24E1E]">
                  Conversion-First
                </span>
              </div>

              {[
                {
                  label: "Positioning & messaging before visual design",
                  tag: "Clarity",
                },
                {
                  label: "Bespoke dark- or light-led systems engineered in production code",
                  tag: "Craft",
                },
                {
                  label: "Practical AI workflows for rapid art-directed visuals and prototyping",
                  tag: "Leverage",
                },
                {
                  label: "Candid pushback whenever an idea works against your own goals",
                  tag: "Partnership",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 border border-[#111111]/8"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F24E1E]/12 text-[#F24E1E]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-[#111111] truncate">
                      {row.label}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md bg-[#F7F4F1] px-2.5 py-1 text-[11px] font-semibold text-[#52504C]">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-[#111111]/10 pt-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
                Design, engineering &amp; practical AI working together
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#52504C]">
                Every website, product interface, identity, and visual campaign is structured around measurable business credibility and conversion.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
