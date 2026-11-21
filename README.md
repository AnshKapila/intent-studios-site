# Intent Studios — Website Redesign (`intent-studios-site`)

Production-grade Next.js (App Router) website for **Intent Studios** — an AI-powered creative and digital product studio (*"We design for conversion, not just for looks."*).

## Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + Three-Layer CSS Design Tokens (`Primitive → Semantic → Component`)
- **Typography:** `Inter` (primary display, heading, body & UI) + `Instrument Serif Italic` (selective editorial accent only)
- **Motion:** Framer Motion (`prefers-reduced-motion` aware, compositor-only `transform`/`opacity`)
- **Icons:** Lucide React

## Architecture (30 Launch Routes)
- `/` — Homepage (13 authoritative sitemap sections mapped to 9 visual wireframe compositions)
- `/work/` + 11 `/work/[project]/` project case studies
- `/services/` + 4 core service pages + 2 website type pages (`/services/website-design/ecommerce/`, `/services/website-design/business/`)
- `/about/` — Studio & founder story
- `/contact/` + `/thank-you/` (`noindex`)
- `/who-we-help/` + `/who-we-help/fitness-wellness/` + `/who-we-help/d2c-brands/`
- `/intent-circle/` — Community / network page
- `/privacy/`, `/terms/`, custom `404`
- Technical SEO: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, per-page canonical URLs & metadata

## Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

### Production Build & Typecheck
```bash
npm run typecheck
npm run build
```

## Design & Content Documentation
- [DESIGN.md](./DESIGN.md) — Unified visual & interaction design system
- [design-tokens.md](./design-tokens.md) — Three-layer CSS token specification
- [design-inputs/homepage-wireframe-mapping.md](./design-inputs/homepage-wireframe-mapping.md) — 9-block wireframe-to-sitemap visual mapping
- [CONTENT-REQUIREMENTS.md](./CONTENT-REQUIREMENTS.md) — Open decisions, content placeholders & integration checklist

## GitHub Repository Connection
Local Git is initialized with `main` (stable) and `feature/website-v1` (active development), pointed at `https://github.com/AnshKapila/intent-studios-site.git`.
If the remote repository has not been created yet on GitHub:
1. Create a new **private** repository named `intent-studios-site` under `AnshKapila` on GitHub (do not initialize with README/license).
2. Push both branches:
   ```bash
   git push -u origin main
   git push -u origin feature/website-v1
   ```
