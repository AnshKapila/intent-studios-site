# Visual Design Audit (Before Refinement) — Intent Studios

**Audit Date:** 22 November 2026  
**Branch:** `feature/website-v1`  
**Screenshots Captured (Taste Skill `shoot.mjs`):**
- `shots/before-1440.png` (1440×12497, 14 screens, 10 sections)
- `shots/before-390.png` (390×19023)
- Per-section desktop tiles: `shots/tiles/desktop-sec-01-a.jpg` through `desktop-sec-10-a.jpg`

---

## Executive Diagnosis: Why v1 Looked Like an AI-Generated Template

Inspecting the actual rendered screenshots at `1440×900` revealed six systemic visual weaknesses that made the site feel generic and "vibe-coded" rather than art-directed by a serious digital design studio:

### 1. Oversized, Shouting Typography & Weak Hierarchy
- **Hero H1 (`clamp(2.65rem, 6.2vw, 5.25rem)` = ~84px)** wraps across three heavy lines, pushing the anchored Proof Bar down so its bottom descriptions are **sliced off at the 900px viewport fold** (`desktop-sec-01-a.jpg`).
- **Section H2s (`clamp(2rem, 4.5vw, 3.75rem)` = 52–60px)** are excessively large relative to their body copy, creating shouting headers instead of calm, architectural authority.
- **Overused Instrument Serif cliché:** Nearly every section heading (`Hero`, `Problem`, `Work`, `Client Quote`, `Services`, `Founder`, `Closing`) repeats the exact same formula — bold sans-serif followed by 2 italic Instrument Serif words — diluting the editorial accent into a predictable AI trope.
- **Undersized secondary/card copy:** Card bodies and metadata rely heavily on `12px` (`text-xs`) and `11px` (`text-[11px]`), violating Taste Skill's `16px` readable-copy discipline and flattening visual hierarchy.

### 2. Repetitive "Glowing-Dot ALL-CAPS Pill" Eyebrows
- Every single section opens with an identical pill badge (`• AI-POWERED CREATIVE...`, `• THE REAL PROBLEM`, `• SELECTED WORK`, `• SERVICES`, `• FOUNDER & COMMUNITY`). This is one of the strongest visual tells of AI-generated SaaS templates.

### 3. Drawn Skeleton Wireframe Boxes & Visible Placeholder Debug Copy
- `WorkShowcaseSection` (`desktop-sec-03-a.jpg`) and `ServicesDeckSection` (`desktop-sec-05-a.jpg`) rely on dark grey drawn UI rectangles with empty placeholder bars and literal `"ASSET SLOT · READY FOR CLIENT MEDIA"` / `"Verified Client Name [Pending]"` / `"Real Photography Slot"` labels printed visibly on the page.
- Taste Skill explicitly flags visible placeholder labels and drawn wireframe boxes standing in for real photography.

### 4. Generic Pill Buttons with Glow Shadows & Inconsistent Variants
- Primary buttons use full-pill (`rounded-full`) geometry with an orange glow drop-shadow (`shadow-[0_8px_28px_rgba(242,78,30,0.22)]`), while inner sections introduce mismatched button treatments (white pill turning orange on Services cards, black pill on Founder Bento, differing heights across header/hero/cards).

### 5. Box-Inside-a-Box-Inside-a-Box Nesting
- In `ProblemBentoSection` (`desktop-sec-02-a.jpg`), white `rounded-[24px]` cards wrap `#F7F4F1` inner rounded containers which in turn wrap white rounded pills — three nested boxes deep, making the layout feel heavy and templated instead of editorial and architectural.

### 6. Motion & Section Pacing
- Every section fades up identically on scroll rather than reserving deliberate motion for: (1) a disciplined hero entrance on load, (2) two Taste Skill dealt moments (`picture-develops` on the featured work photograph + `word-highlight` scroll statement), and (3) crisp, consistent hover/press micro-interactions (`1px` button step, `0.985` press, `2px` linked-card lift, `1.02–1.03` image zoom inside frame, `3px` arrow nudge).

---

## Refinement Plan (Incremental — Preserving All 30 Routes & Copy)
1. **Recalibrate Typography & Eyebrows:** Tighten H1 (`36px–56px`) so Hero + Proof Bar fit cleanly inside `1440×900`; tighten Section H2 (`28px–38px`), enforce `15px–16px` readable body/card copy, restrict *Instrument Serif Italic* to **two** purposeful moments (Hero & Closing Band), and replace ALL-CAPS glowing-dot pill eyebrows with clean sentence-case architectural labels (`13px`, `font-medium`, zero pill border).
2. **Unify Button & Navigation System:** Standardize on architectural `rounded-[8px]` buttons, uniform `44px` height, zero glow shadows, crisp 1px borders, opaque `#0A0A0A` header with 1px bottom hairline and clean 2px underline active state.
3. **Integrate Real Locally-Stored Photography (`public/images/`):** Replace drawn skeleton boxes in Work, Services, Process, and Founder/Studio slots with vetted, locally optimized WebP photographs fetched via Taste Skill's `photos.mjs`, removing all visible `[Placeholder]` / `ASSET SLOT` debug strings from the UI while logging every stand-in in `IMAGE-MANIFEST.md`.
4. **Flatten Nested Boxes:** Simplify `ProblemBentoSection` and `FounderCircleBentoSection` to crisp single-level architectural cards with hairline dividers and cleaner negative space.
5. **Apply Taste Skill Motion & Dealt Moments:** Implement `picture-develops` on the Featured Work photograph and `word-highlight` on the studio positioning statement, plus consistent CSS micro-interactions (`motion.md`).
