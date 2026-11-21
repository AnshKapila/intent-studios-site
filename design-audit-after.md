# Visual Design Audit (After Taste Skill Refinement) — Intent Studios

**Audit Date:** 22 November 2026  
**Branch:** `feature/website-v1`  
**Screenshots Captured (Taste Skill `shoot.mjs`):**
- `shots/after/after-1440.png` + per-section tiles (`shots/after/tiles/desktop-sec-01-a.jpg` – `10-a.jpg`)
- `shots/after/after-1024.png`
- `shots/after/after-768.png`
- `shots/after/after-390.png`

---

## Before vs. After Visual Comparison

| Dimension | Before (v1 Initial Draft) | After (Taste Skill Refinement) |
|---|---|---|
| **Hero & First Screen (1440×900)** | Oversized ~84px 3-line H1 pushed the 4-column Proof Bar past the 900px fold, slicing descriptions in half (`before` tile 01-a). | Proportioned H1 (`clamp(2.25rem, 4.3vw, 3.65rem)`, weight `500`) sits cleanly inside 1440×900 with the **entire Hero + Proof Bar visible above the fold** (`after` tile 01-a, height `1.00` screen). |
| **Typography & Editorial Restraint** | Giant 52–60px H2s repeated the same sans + 2-italic-serif formula on every section; tiny `12px`/`11px` grey card copy. | Calm architectural scale (`H2: 28–39px`, `H3: 18–20px`, readable `15px–16px` body & card text). *Instrument Serif Italic* is restricted to **two** purposeful moments (Hero `"conversion"` and Closing Band `"actual intent?"`). |
| **Eyebrows & Labels** | Identical ALL-CAPS glowing-dot pill badges above every single section. | Replaced sitewide with quiet sentence-case architectural labels (`13px`, `font-medium`) paired with a `16px` `#F24E1E` hairline dash. |
| **Buttons & Navigation** | Pill buttons (`rounded-full`) with orange glow shadows, mixed heights (`40px`/`44px`/`50px`), and inconsistent white/black/orange pill overrides across sections. | Unified architectural button system (`rounded-[8px]`, `44px`/`48px`, `15px` medium, zero glow shadows, `1px` hover step, `0.985` press, `3px` arrow nudge). Opaque `#0A0A0A` header (`72px`) with permanent `1px` bottom hairline and clean `2px` underline active indicator. |
| **Imagery & Visual Proof** | Drawn grey wireframe skeleton boxes with `"ASSET SLOT · READY FOR CLIENT MEDIA"` and `"Real Photography Slot"` debug text printed visibly on screen. | **9 locally optimized WebP photographs** (`public/images/`, fetched via Taste Skill `photos.mjs`, total weight well under 2,400 KiB budget) integrated cleanly across Work, Services, Process, Client Perspective, and Studio Craft — zero visible placeholder tags, documented in `IMAGE-MANIFEST.md`. |
| **Card Nesting & Whitespace** | 3-level box-in-box-in-box nesting inside `ProblemBentoSection`. | Flattened to clean single-level `#FFFFFF` editorial cards with `1px` hairline dividers (`after` tile 02-a). |
| **Motion & Dealt Moments** | Generic identical scroll fade-up on every section. | Disciplined hero entrance + Taste Skill's two dealt moments (`word-highlight` scroll statement in Problem section + `picture-develops` film reveal on Featured Work) + crisp CSS hover/press micro-interactions (`motion.md`), fully `prefers-reduced-motion` aware. |

---

## Iterative Browser Critique Catch & Fix
- **Catch (`shots/after/tiles/desktop-sec-04-a.jpg`):** During visual inspection of the AFTER desktop tiles, the centered video testimonial frame (`max-w-xl` inside `max-w-5xl`) slightly overlapped the inner corner of the two top orbital micro-cards (`Direct founder communication`, `Verified outcomes only`).
- **Fix (`src/components/home/ClientQuoteOrbitSection.tsx`):** Expanded the orbital container to `max-w-6xl`, anchored the micro-cards flush to `lg:left-0` / `lg:right-0`, and tightened the centered video frame to `max-w-[520px]`, creating ~76px of clean architectural separation on both sides.

---

## Preservation Verification
- **All 30 launch routes preserved** (`/`, `/work/`, 11 `/work/[project]/`, `/services/`, 4 `/services/[service]/`, `/services/website-design/ecommerce/`, `/services/website-design/business/`, `/about/`, `/contact/`, `/thank-you/` `noindex`, `/who-we-help/`, `/who-we-help/fitness-wellness/`, `/who-we-help/d2c-brands/`, `/intent-circle/`, `/privacy/`, `/terms/`, custom `404`).
- **All working integrations & SEO preserved:** Contact form validation, URL-synced `/work/` filters, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/audit/` 301 redirect, and existing Git branch (`feature/website-v1`).
- **Vercel Web Design Guidelines static audit:** 0 anti-patterns (`transition-all`, `outline-none`, `...`, `autoFocus`, `<div onClick>`).
