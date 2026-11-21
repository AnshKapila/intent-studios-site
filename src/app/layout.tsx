import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SITE } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Intent Studios — AI-Powered Creative & Digital Product Studio",
    template: "%s | Intent Studios",
  },
  description:
    "Intent Studios designs and builds conversion-focused websites, digital products, brand identities, and art-directed AI content for startups and growing businesses.",
  openGraph: {
    type: "website",
    siteName: "Intent Studios",
    title: "Intent Studios — We design for conversion, not just for looks.",
    description:
      "AI-powered creative and digital product studio helping startups, D2C brands, fitness studios, and service businesses build credible digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intent Studios — We design for conversion, not just for looks.",
    description:
      "Websites, digital products, brand identity systems, and studio-grade content built for conversion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} dark`}
    >
      <body className="min-h-screen bg-[#000000] text-[#F5F5F5] antialiased selection:bg-[#F24E1E] selection:text-white">
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
