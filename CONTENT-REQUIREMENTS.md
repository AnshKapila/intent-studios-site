# CONTENT-REQUIREMENTS.md — Intent Studios Content & Asset Checklist

All missing real-world content, verified metrics, portfolio assets, and open business decisions are isolated in the structured data layer (`src/data/`) so they can be replaced cleanly in one place without touching UI components.

---

## 1. Open Business Decisions (from `intent-studios-final-sitemap.html` & Brief Part 11)

| # | Decision / Item | Current Placeholder Implementation | Data File to Update |
|---|---|---|---|
| 1 | **Meaning of `4200` wireframe reference** | Treated strictly as a visual reference (radial orbital layout); **not** displayed as a business metric. If `4,200` represents a real verifiable metric, supply the exact unit and source. | `src/data/site.ts` (`proofBar`) |
| 2 | **Three featured projects** | Structured slots for 3 featured projects (`featured: true`) + 8 additional project slots (11 total) across Fitness & Wellness, D2C & Product Brands, SaaS/Startups, and Service Businesses. | `src/data/projects.ts` |
| 3 | **Verified result & client quote per featured project** | Clearly marked `[Placeholder — pending verified client outcome & quote]` slots; zero fabricated names, percentages, or testimonials. | `src/data/projects.ts` & `src/data/testimonials.ts` |
| 4 | **Content & Social scope** | Currently framed around AI-led content creation, product shoots, and social-ready visual systems, with a note to confirm whether ongoing social media management / paid distribution is included. | `src/data/services.ts` (`content-social`) |
| 5 | **Exact definition & membership benefits of Intent Circle** | Structured teaser on Homepage, About, and Thank You + dedicated `/intent-circle/` page with clearly labelled editable overview, benefits, and join-flow placeholders. | `src/data/intent-circle.ts` |
| 6 | **Discovery-call duration (15 min vs. 30 min)** | Consistently uses `"Book a 15-minute discovery call"` sitewide via a single constant (`SITE.primaryCta`) so switching to 30 minutes is a 1-line edit. | `src/data/site.ts` |
| 7 | **Missing legal content & contact details** | Privacy Policy (`/privacy/`) and Terms of Service (`/terms/`) contain clean legal structure templates; email, WhatsApp number, and physical district/city use structured placeholders. | `src/data/site.ts`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

---

## 2. Visual & Media Assets to Supply

- [ ] **Founder Portrait (Ansh Kapila):** Real photography only (well-dressed, natural/window light, dark/blurred background — never AI-generated). Used on Homepage Founder Block and `/about/`.
- [ ] **Video Testimonial (Homepage):** Real client video file (`.mp4` + poster `.jpg`) for the video-first Client Quote section.
- [ ] **Portfolio Project Visuals (11 projects):** Real website screenshots, product UI screens, brand identity applications, and AI-led content examples (`16:10` hero + gallery frames).
- [ ] **Official Logo SVG (Icon + Termina `Intent` + Inter Black `STUDIOS`):** Currently rendered via a clean geometric SVG mark + crisp typographic lockup; swap in the exact Termina Test Medium SVG paths when exported from Figma/Illustrator.
- [ ] **Social Handles:** Currently linked to `@anshkapila.ux` (Instagram) and `linkedin.com/in/anshkapila` per Visual Brain p. 8, structured in `SITE.socials` for seamless swap to official Intent Studios handles when live.

---

## 3. Technical Integrations & Redirects to Configure

- [ ] **Contact Form Backend:** Currently validates all fields client-side and transitions to a working frontend confirmation + scheduler step without faking a network success. Connect `src/components/contact/ContactForm.tsx` to your form endpoint (Resend, Formspree, HubSpot, or Next.js API route).
- [ ] **Calendar Scheduler Embed:** Replace the placeholder scheduler container in `src/components/contact/SchedulerEmbed.tsx` with your live Cal.com or Calendly embed URL (`NEXT_PUBLIC_SCHEDULER_URL`).
- [ ] **Legacy 301 Redirects:** `/audit/` → `/services/` is configured in `next.config.ts`. Supply the exact 4 legacy service URL slugs from the live site so we can add their 301 redirects without guessing.
- [ ] **Production Domain:** Update `SITE.url` in `src/data/site.ts` (currently `https://intentstudios.in` / configurable via `NEXT_PUBLIC_SITE_URL`) for canonical URLs, `sitemap.xml`, `robots.txt`, and `llms.txt`.
