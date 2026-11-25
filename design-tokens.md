# design-tokens.md — Intent Studios Locked Design System

Single source of truth for Intent Studios across Light Mode (`#FFFFFF`) and Dark Mode (`#111111`). All tokens are implemented in `src/app/globals.css`.

---

## 1. Color System

### Core Anchors
| Role | Light Mode | Dark Mode |
|---|---|---|
| Primary Canvas (`--color-bg-global`) | `#FFFFFF` | `#111111` |
| Secondary Surface (`--color-bg-section`) | `#F7F4F1` | `#181817` |
| Elevated Card (`--color-bg-card`) | `#FFFFFF` | `#1F1E1C` |
| Primary Brand Accent (`--color-accent`) | `#F24E1E` | `#F24E1E` |
| Soft Brand Accent (`--color-accent-soft`) | `#FFD1C2` | `#FFD1C2` |
| Primary Ink (`--color-text-primary`) | `#111111` | `#FFFFFF` |
| Secondary Ink (`--color-text-secondary`) | `#52504C` | `#A3A09A` |
| Muted Ink (`--color-text-muted`) | `#7C756D` | `#7A7772` |

### Harmonized 4-Step Editorial Tints — Muted Multi-Hue
Used consistently in **How We Work** process cards and **Problem** inline highlights:
| Step | Name | Light Mode | Dark Mode |
|---|---|---|---|
| `01` | Muted Sage | `#E5EFE9` | `#16221C` |
| `02` | Soft Peach | `#FCE6D4` | `#281C14` |
| `03` | Pale Slate | `#E4EDF4` | `#151F28` |
| `04` | Soft Mist | `#EAE6F5` | `#1E1A2A` |

---

## 2. Typography Scale (8px Grid × Golden Ratio `1.618`)

- **Primary Sans:** `Inter` (`400`, `500`, `600`, `700`)
- **Selective Editorial Accent:** `Instrument Serif Italic` (`.font-editorial`, max 1–2 emphasis words per H1/H2)

| Token | Class | Desktop (size / lh) | Mobile (size / lh) | Weight | Tracking |
|---|---|---|---|---|---|
| Display H1 | `.type-h1` | `64px / 72px` | `40px / 48px` | `500` | `-0.035em` |
| Section H2 | `.type-h2` | `40px / 48px` | `32px / 40px` | `500` | `-0.03em` |
| Card H3 | `.type-h3` | `24px / 32px` | `20px / 28px` | `500` | `-0.02em` |
| Lead P1 | `.type-p1` | `20px / 32px` | `18px / 28px` | `400` | `-0.01em` |
| Body P2 | `.type-p2` | `16px / 24px` | `16px / 24px` | `400` | `0em` |
| Meta / Eyebrow P3 | `.type-p3` | `13px / 20px` | `12px / 16px` | `500` | `0em` |

---

## 3. Button System — Option C: Forma Kinetic Pill

Implemented in `src/components/ui/Button.tsx`:
- **Primary (`variant="primary"`):** `rounded-full`, `#F24E1E` solid fill, left circular `#111111` dual-sliding-arrow badge (on `showArrow`), white label, smooth hover darken (`#D94114`).
- **Secondary (`variant="secondary"`):** `rounded-full`, surface background + `1px` border, vertical text-swap hover animation.
- **Tertiary / Ghost (`variant="ghost"` / `variant="tertiary"`):** Clean inline text + subtle underline / arrow micro-shift, `#F24E1E` hover accent.

---

## 4. Shape Language — Balanced Modern (`8 / 12 / 16px`)

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, small icon containers, tight UI chips |
| `--radius-md` | `12px` | Inner cards, Problem bubbles, concept previews, rhythm pills |
| `--radius-lg` | `16px` | Primary cards, Work cards, Services deck cards, Process cards, FAQ quick-contact, Founder bento |
| `--radius-pill` | `9999px` | All buttons, filter chips, milestone badges, theme toggle |

---

## 5. Spacing & Layout Grid (8px Rhythm)

- **Max Container:** `1280px` (`.intent-container`)
- **Outer Horizontal Margins:** `24px` mobile · `32px` tablet · `48px` desktop
- **Standard Section Padding:** `64px` mobile (`py-16`) · `96px` desktop (`lg:py-24`)
- **Universal Eyebrow:** `24px × 1px` `#F24E1E` hairline dash + `.type-p3` sentence-case label (`SectionEyebrow`)
