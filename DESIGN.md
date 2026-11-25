# DESIGN.md — Intent Studios Design System

Authoritative design system for **Intent Studios** (`main` branch). Every new page, section, and component MUST follow these locked tokens, scales, and rules so the website stays visually consistent across both **Light Mode** and **Dark Mode**.

---

## 1. Brand Voice & Guardrails
- Always write **Intent Studios** (never "Intent Studio").
- Primary CTA label: **`Book a 15-minute discovery call`**.
- **Do not** use the phrase *"Intent is in the details"* anywhere on the site unless explicitly requested.
- Never fabricate client metrics, quotes, or AI-generated founder portraits.

---

## 2. Color System (Light & Dark Mode)

Implemented via CSS custom properties in `src/app/globals.css` (`:root` for Light Mode, `html[data-theme="dark"]` for Dark Mode).

### Core Brand Anchors
| Role | Token | Light Mode | Dark Mode |
|---|---|---|---|
| Primary Canvas | `--color-bg-global` | `#FFFFFF` | `#111111` (Charcoal Gray) |
| Secondary Surface | `--color-bg-section` | `#F7F4F1` (Warm Alabaster) | `#181817` |
| Elevated Card | `--color-bg-card` | `#FFFFFF` | `#1F1E1C` |
| Brand Primary Accent | `--color-accent` | `#F24E1E` (Intent Orange) | `#F24E1E` |
| Brand Hover Accent | `--color-accent-hover` | `#D94114` | `#D94114` |
| Brand Soft Accent | `--color-accent-soft` | `#FFD1C2` (Soft Peach) | `#FFD1C2` |
| Primary Ink | `--color-text-primary` | `#111111` | `#FFFFFF` |
| Secondary Ink | `--color-text-secondary` | `#52504C` | `#A3A09A` |
| Muted Ink | `--color-text-muted` | `#7C756D` | `#7A7772` |
| Hairline Border | `--color-border-subtle` | `rgba(17, 17, 17, 0.10)` | `rgba(255, 255, 255, 0.11)` |
| Strong Border | `--color-border-strong` | `rgba(17, 17, 17, 0.22)` | `rgba(255, 255, 255, 0.22)` |

### Harmonized 4-Step Editorial Tints — Muted Multi-Hue
Used strictly for multi-step visual grouping (**How We Work** cards and **Problem** inline quote highlights):
| Step | Name | Token | Light Mode | Dark Mode |
|---|---|---|---|---|
| `01` | Muted Sage | `--editorial-1` | `#E5EFE9` | `#16221C` |
| `02` | Soft Peach | `--editorial-2` | `#FCE6D4` | `#281C14` |
| `03` | Pale Slate | `--editorial-3` | `#E4EDF4` | `#151F28` |
| `04` | Soft Mist | `--editorial-4` | `#EAE6F5` | `#1E1A2A` |

> **Rule:** Never introduce arbitrary bright pastels or pure `#000000` dark surfaces. Alternate `#FFFFFF` / `#F7F4F1` in Light Mode and `#111111` / `#181817` in Dark Mode.

---

## 3. Typography System (`8px Grid × 1.618 Golden Ratio`)

- **Primary Sans:** `Inter` (`400`, `500`, `600`, `700`) via `--font-sans`
- **Selective Editorial Accent:** `Instrument Serif Italic` (`.font-editorial`) — max **1–2 emphasis words** per H1/H2, never in body text or buttons.

Use the locked utility classes defined in `src/app/globals.css`:

| Role | Class | Desktop (`>=1024px`) | Mobile (`<1024px`) | Weight | Tracking |
|---|---|---|---|---|---|
| Display H1 | `.type-h1` | `64px / 72px` | `40px / 48px` | `500` | `-0.035em` |
| Section H2 | `.type-h2` | `40px / 48px` | `32px / 40px` | `500` | `-0.03em` |
| Card H3 | `.type-h3` | `24px / 32px` | `20px / 28px` | `500` | `-0.02em` |
| Lead P1 | `.type-p1` | `20px / 32px` | `18px / 28px` | `400` | `-0.01em` |
| Body P2 | `.type-p2` | `16px / 24px` | `16px / 24px` | `400` | `0em` |
| Caption / Eyebrow P3 | `.type-p3` | `13px / 20px` | `12px / 16px` | `500` | `0em` |

---

## 4. Button System — Option C: Forma Kinetic Pill

Always use `src/components/ui/Button.tsx` — **never** hand-code one-off button `<Link>` styles.

| Variant | Usage | Visual Spec |
|---|---|---|
| `primary` (`showArrow`) | Main conversion CTAs (Navbar, Hero, FAQ, Closing Band, Services header) | `rounded-full`, `#F24E1E` solid fill (`hover:#D94114`), left circular `#111111` dual-sliding-arrow badge, white label |
| `secondary` | Secondary navigation & card CTAs (Work, Services cards, Process) | `rounded-full`, surface background + `1px` border, vertical text-swap marquee on hover |
| `tertiary` | Inline editorial section links | Transparent background, underlined label with `#F24E1E` hover shift + optional arrow |
| `light-primary` | Primary CTA sitting on `#F24E1E` accent surfaces | `rounded-full`, `#111111` fill with `#F24E1E` sliding-arrow badge |

**Sizes:** `sm (36px)` · `md (44px)` · `lg (48px)`.

---

## 5. Shape Language — Balanced Modern (`8 / 12 / 16px`)

| Token | Radius | Where Used |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, icon boxes, small UI controls |
| `--radius-md` | `12px` | Inner cards, Problem chat bubbles, concept frames, media thumbnails inside cards |
| `--radius-lg` | `16px` | All primary cards (Work, Services deck, Process staircase, FAQ contact, Founder bento) |
| `--radius-pill` | `9999px` | All buttons, filter chips, milestone badges, theme toggle |

---

## 6. Spacing, Margins & Section Rhythm (`8px` Multiples)

- **Container (`.intent-container`):** `max-width: 1280px`
  - Horizontal outer margins: `24px` mobile · `32px` tablet (`>=768px`) · `48px` desktop (`>=1280px`)
- **Standard Section Padding:** `py-16 lg:py-24` (`64px` mobile / `96px` desktop), except sections intentionally capped to `100svh` (Problem) or `80svh` cards (Selected Work).
- **Universal Eyebrow (`src/components/ui/SectionEyebrow.tsx`):** `24px × 1px` `#F24E1E` dash + `.type-p3` sentence-case text.
- **Grid Gutters:** `16px` (`gap-4`) tight grids · `24px` (`gap-6`) standard cards · `48px` (`gap-12`) split columns.

---

## 7. Motion Grammar
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-intent`)
- **Durations:** `150ms` micro-interactions · `280ms` accordions/swaps · `500ms` hover/image reveals
- **Accessibility:** Full `prefers-reduced-motion` parity enforced in `globals.css` and Framer Motion hooks.
