# QA-REPORT.md — Intent Studios Website Redesign (v1)

## 1. Skills Installed & Applied
All four requested skills were installed from the project root via `npx skills add` and verified in `.agents/skills/`:
- `design-taste-frontend` (Primary creative direction, anti-slop discipline, plain copy, equal edges, real browser verification)
- `design-system` (Three-layer token architecture: Primitive → Semantic → Component)
- `ui-ux-pro-max` (UX intelligence, accessibility, touch targets, Next.js App Router patterns)
- `web-design-guidelines` (Mandatory Vercel Web Interface Guidelines compliance audit)

---

## 2. Build & Route Verification
- **TypeScript (`tsc --noEmit`):** PASS (0 errors)
- **Next.js Production Build (`npm run build`):** PASS (34/34 static/SSG routes compiled with 0 errors and 0 workspace warnings)
- **30 Launch Pages Verified:**
  - `/` (Homepage — all 13 authoritative sitemap sections in exact order)
  - `/work/` + 11 `/work/[project]/` case study routes
  - `/services/` + 4 `/services/[service]/` + `/services/website-design/ecommerce/` + `/services/website-design/business/`
  - `/about/`, `/contact/`, `/thank-you/` (`robots: noindex, nofollow`)
  - `/who-we-help/`, `/who-we-help/fitness-wellness/`, `/who-we-help/d2c-brands/`
  - `/intent-circle/`, `/privacy/`, `/terms/`, custom `404`
- **Technical SEO:**
  - `/sitemap.xml` (29 indexable routes; `/thank-you/` excluded)
  - `/robots.txt` (disallows `/thank-you/`, points to `/sitemap.xml`)
  - `/llms.txt` (clean studio & route summary for AI crawlers)
  - Per-page unique `<title>`, `<meta name="description">`, and `<link rel="canonical">`
  - 301 Permanent Redirect: `/audit` & `/audit/` → `/services/` (legacy 4 service slugs tracked in `CONTENT-REQUIREMENTS.md` so none are guessed)

---

## 3. Vercel Web Design Guidelines Compliance Audit
Audited against `.agents/skills/web-design-guidelines/references/command.md`:

| File | Result | Notes |
|---|---|---|
| `src/app/globals.css` | ✓ pass | `color-scheme: dark`, `prefers-reduced-motion`, `:focus-visible` ring, `touch-action: manipulation`, native `<select>` dark styling, `text-wrap: balance`, `tabular-nums`, zero `transition: all` |
| `src/components/layout/Header.tsx` | ✓ pass | Fixed mobile drawer CSS containing-block bug (moved drawer outside `backdrop-blur-xl` `<header>`), `aria-expanded`, `aria-controls`, `aria-current="page"`, `Escape` close, `overscroll-behavior: contain`, `44px+` touch targets |
| `src/components/layout/Footer.tsx` | ✓ pass | Semantic landmarks, external `rel="noopener noreferrer"`, `translate="no"` on wordmark, crisp contrast |
| `src/components/home/HeroSection.tsx` | ✓ pass | Immediate H1 legibility, compositor-only `transform`/`opacity` entrance, `MotionConfig reducedMotion="user"` |
| `src/components/home/ServicesDeckSection.tsx` | ✓ pass | Semantic `<button>` goal chips with `aria-pressed`, explicit transition properties |
| `src/components/sections/HowWeWorkSection.tsx` | ✓ pass | Semantic `<button>` stage controls with `aria-pressed`, keyboard operable |
| `src/components/sections/FaqSection.tsx` | ✓ pass | Semantic `<button>` with `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby` |
| `src/components/work/WorkFilterGrid.tsx` | ✓ pass | URL-synced query params (`?service=&industry=`), `aria-live="polite"` result counter |
| `src/components/contact/ContactForm.tsx` | ✓ pass | Visible `<label htmlFor>`, `autoComplete`, `spellCheck={false}` on email, inline errors with `role="alert"` & `aria-invalid`, focuses first invalid field on submit, never blocks paste, honest frontend state |

---

## 4. Real Browser Visual & Interactive QA
Tested live at `http://localhost:3000/` on **1440×900 (Desktop)** and **390×844 (Mobile)**:

- **Console & Page Errors:** 0 console errors, 0 uncaught exceptions across `/`, `/work/`, `/contact/`.
- **Horizontal Overflow:** 0px overflow at both 1440×900 and 390×844.
- **Interactive Controls Verified:**
  - Services Goal Chips (`aria-pressed` & active highlight) — PASS
  - How We Work Stage 03 (`Stage 03 / 05` sticky panel update) — PASS
  - Homepage FAQ accordion expand/collapse — PASS
  - `/work/` service filter (`11 -> 4` projects + URL sync + Reset) — PASS
  - `/contact/` empty-form submit inline validation + focus-first-error — PASS
- **Critical Bug Found & Fixed During QA:**
  - *Issue:* At 390×844, clicking the mobile menu button toggled `aria-expanded="true"`, but `#mobile-nav-drawer` rendered at 0px height because `backdrop-blur-xl` on the parent `<header>` created a CSS containing block for `position: fixed`.
  - *Fix:* Moved `#mobile-nav-drawer` outside `<header>` as a sibling in a React Fragment (`src/components/layout/Header.tsx`), rebuilt, and re-verified on 390×844 mobile.

---

## 5. Remaining Open Content & Integrations
Tracked cleanly in `CONTENT-REQUIREMENTS.md` (zero fabricated metrics, zero fake client quotes, zero AI-generated founder faces).
