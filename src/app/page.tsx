import type { Metadata } from "next";
import { HOME_FAQ, HOME_FIT_LIST, SITE } from "@/data/site";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemBentoSection } from "@/components/home/ProblemBentoSection";
import { WorkShowcaseSection } from "@/components/home/WorkShowcaseSection";
import { ClientQuoteOrbitSection } from "@/components/home/ClientQuoteOrbitSection";
import { ServicesDeckSection } from "@/components/home/ServicesDeckSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { FounderCircleBentoSection } from "@/components/home/FounderCircleBentoSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingBand } from "@/components/sections/ClosingBand";

export const metadata: Metadata = {
  title: "Intent Studios — AI-Powered Creative & Digital Product Studio",
  description:
    "We design for conversion, not just for looks. Websites, digital products, brand identity systems, and art-directed AI content for startups and growing businesses.",
  alternates: {
    canonical: `${SITE.url}/`,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Header (layout) + 2. Hero + 3. Proof Bar */}
      <HeroSection />

      {/* 4. The Problem (Buyer Quotes) + What We Do & Don't (Wireframe Block 2 Bento) */}
      <ProblemBentoSection />

      {/* 5. Related Work: Featured Project + Two Smaller Projects (Wireframe Block 3) */}
      <WorkShowcaseSection />

      {/* 6. Client Quote, Video First (Wireframe Block 5 Radial Orbit adapted) */}
      <ClientQuoteOrbitSection />

      {/* 7. Service Cards, Goal Chips & Industry Line (Wireframe Block 4 Stacked Deck) */}
      <ServicesDeckSection />

      {/* 8. How We Work + Best Fit / Not a Fit Lists (Wireframe Block 6 Split) */}
      <HowWeWorkSection fitList={HOME_FIT_LIST} />

      {/* 9. Founder Block + 10. Intent Circle Teaser (Wireframe Block 7 Editorial Bento) */}
      <FounderCircleBentoSection />

      {/* 11. Homepage FAQ */}
      <FaqSection items={HOME_FAQ} />

      {/* 12. Closing Band (Wireframe Block 8 dark centered CTA) + 13. Footer (layout) */}
      <ClosingBand />
    </>
  );
}
