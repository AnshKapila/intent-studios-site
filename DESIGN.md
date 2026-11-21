# DESIGN.md — Intent Studios Unified Design System

## 1. Brand Positioning & Visual Direction
- **Identity:** Intent Studios — AI-powered creative and digital product studio (*"We design for conversion, not just for looks."* / Sign-off: *"Intent is in the Details"*).
- **Aesthetic:** Dark-first editorial minimalism, architectural grids, modern geometry, controlled contrast, restrained motion.
- **Hierarchy of Authority:**
  1. Explicit project brief requirements
  2. Intent Studios Brand Foundation & Visual Brain
  3. 9-block wireframe visual compositions (`design-inputs/homepage-wireframe-mapping.md`)
  4. Authoritative 30-page sitemap (`intent-studios-final-sitemap.html`)
  5. Unified Design System (`DESIGN.md` & `design-tokens.md`)

---

## 2. Colour System
| Role | Hex | Usage Rule |
|---|---|---|
| Global Background | `#000000` | Deepest canvas, hero base, footer, selected deep-contrast sections |
| Primary Section Background | `#111111` | Default dark surface for primary sections |
| Elevated Cards / Surfaces | `#0A0A0A` | Cards, panels, interactive tiles, elevated dark containers |
| Warm Gradient Base | `#080504` → `#1F100B` | Atmospheric warm dark overlays behind hero and closing bands |
| Primary Accent | `#F24E1E` | Primary CTAs, meaningful highlights, active states, corner/edge radial glows |
| Soft Accent (Tag Text) | `#FFD1C2` | Strictly for small tag text on `rgba(242, 78, 30, 0.10)` backgrounds |
| Main Heading (Dark) | `#F5F5F5` | Primary display and section headings on dark backgrounds |
| Body Text (Dark) | `#A0A0A0` | Body copy, secondary metadata, sign-off lines (`>= 4.5:1` on `#111111` & `#000000`) |
| Light Contrast Background | `#F7F4F1` | Reserved strictly for information-dense contrast sections (Problem Bento, Founder & Circle Bento) |
| Primary Ink (Light) | `#111111` | Headings and primary copy on `#F7F4F1` |
| Secondary Ink (Light) | `#52504C` | Secondary copy on `#F7F4F1` (`>= 7:1` contrast) |

**Strict Colour Rules:**
- Dark-first always; `#111111` is primary section ground, `#000000` used selectively for depth.
- `#F24E1E` appears with restraint — one focal accent per viewport/section, never competing twice.
- Orange radial glows are anchored strictly at **corners or edges** — never centered full-bleed.
- Zero neon, violet/purple, or rainbow gradients.

---

## 3. Typography System
- **Primary Heading & UI / Body Font:** `Inter` (loaded via `next/font/google`, weights 400, 500, 600, 700, 800, 900).
- **Selective Editorial Accent Font:** `Instrument Serif` (Italic 400 only, loaded via `next/font/google`) — used *sparingly* on 1–2 highlighted words inside key display/section headings or editorial callouts. Never used as the default heading font.
- **Brand Wordmark:** `Intent` (tight geometric display weight, Title Case) + `STUDIOS` (`Inter` Black 900, `0.38em` tracking, ALL CAPS — isolated strictly to the logo lockup).

### Fluid Type Scale (Refined via Taste Skill)
| Token | Size | Line Height | Tracking | Weight | Usage |
|---|---|---|---|---|---|
| `--text-display` | `clamp(2.25rem, 4.3vw, 3.65rem)` | `1.08` | `-0.035em` | `500` | Homepage Hero H1 (2 clean lines; Hero + Proof Bar inside 1440×900) |
| `--text-h1` | `clamp(2.1rem, 4vw, 3.25rem)` | `1.08` | `-0.03em` | `500` | Inner page H1 |
| `--text-h2` | `clamp(1.75rem, 2.8vw, 2.45rem)` | `1.12` | `-0.03em` | `500` | Section H2 |
| `--text-h3` | `clamp(1.125rem, 1.5vw, 1.35rem)` | `1.25` | `-0.02em` | `600` | Card & subsection titles |
| `--text-body-lg` | `1.0625rem` (17px) | `1.6` | `-0.005em` | `400` | Hero & section leads |
| `--text-body` | `1rem` (16px) | `1.6` | `0` | `400` | Standard body & card copy |
| `--text-body-sm` | `0.9375rem` (15px) | `1.55` | `0` | `400` | Secondary body & list items |
| `--text-eyebrow` | `0.8125rem` (13px) | `1.2` | `0` | `500` | Sentence-case architectural eyebrows (16px `#F24E1E` hairline dash, no pill borders) |

All headings use `text-wrap: balance`; numeric columns and metrics use `font-variant-numeric: tabular-nums`.

---

## 4. Grid, Container & Spacing System
- **Max Content Width:** `1280px` (`--container-max`), with equal horizontal gutters: `20px` (mobile) / `32px` (tablet) / `48px` (desktop).
- **Base Unit:** `4px` spacing scale (`--space-1` through `--space-32`).
- **Section Padding:** `clamp(4.5rem, 8vw, 7.5rem)` vertical padding, maintaining consistent left and right architectural edges across all sections.
- **Border Radius Scale:**
  - `--radius-sm`: `8px` (chips, tags, small inputs)
  - `--radius-md`: `14px` (buttons, form fields, standard cards)
  - `--radius-lg`: `20px` (bento cards, split showcase frames)
  - `--radius-xl`: `28px` (featured hero/work showcase frames)
  - `--radius-pill`: `9999px` (primary CTA pills, badges)

---

## 5. Textures & Atmospheric Layers
- **Subtle Architectural Grid:** `48px × 48px` hairline grid (`rgba(255, 255, 255, 0.035)` on dark, `rgba(17, 17, 17, 0.045)` on light) via `.bg-grid-dark` / `.bg-grid-light`.
- **Corner/Edge Orange Glow:** `.glow-corner-tr`, `.glow-corner-bl`, `.glow-edge-bottom` — low-opacity radial `#F24E1E` illumination anchored at container edges.
- **Subtle Film Grain:** Low-opacity SVG fractal noise overlay (`opacity: 0.025`) with `pointer-events: none`.

---

## 6. Motion Language (`src/lib/motion.ts`)
- **Primary Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (confident, architectural deceleration — zero bounce).
- **Durations:**
  - Micro-hover / focus: `180ms`
  - UI transitions / accordion / drawer: `280ms`
  - Section & heading reveals: `520ms`
  - Hero choreography: `650ms` total (zero delay blocking immediate H1 legibility)
- **Stagger:** `60ms` (`0.06s`) between sibling cards.
- **Compositor-Only:** Animate `transform` and `opacity` only. Never `transition: all`.
- **Reduced Motion:** Global `MotionConfig reducedMotion="user"` + CSS `@media (prefers-reduced-motion: reduce)` immediately settles all animations and disables decorative motion.

---

## 7. Component States & Accessibility
Every interactive element explicitly defines:
- **Default**, **Hover** (subtle lift/contrast increase + explicit transition properties), **Active** (`scale(0.98)`), **Focus-Visible** (`2px solid #F24E1E` with `3px` offset), **Disabled** (`opacity: 0.45`, `cursor: not-allowed`), **Loading** (spinner + `…` suffix), **Error** (inline message + `#F24E1E` border + `aria-invalid`), and **Success** (`aria-live="polite"` confirmation).
- Minimum touch target: `44px × 44px` on all buttons, nav links, chips, and icon controls.
- Skip link (`Skip to main content`) as the first focusable element in `<body>`.
