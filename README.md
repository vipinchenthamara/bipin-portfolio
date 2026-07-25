# Bipin Chenthamara — Portfolio

A dark, 3D-scrolling one-page portfolio for a Microsoft Security Architect & Engineering Lead.
Built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React**, adapted
from a "3D creator" template and re-themed around enterprise-security content and a trust-coded
blue accent.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```

## ⚠️ One manual step — add your portrait

The hero references `public/portrait.png`. Save your headshot (the attached 3D portrait) to:

```
public/portrait.png
```

Until you do, a placeholder avatar shows in its place. No code change needed — just drop the file in.

## Sections

1. **Hero** — magnetic portrait, "Hi, i'm bipin", nav, Contact pill
2. **Stats bar** — 18 · 12.4K · 197K · 15K+ (all grounded in real figures)
3. **Marquee** — two scroll-reactive rows of your toolset & certs (Defender XDR, Entra ID, Sentinel, Intune, Purview, Security Copilot, SC-100, AZ-500…)
4. **About** — "Architecture that survives reality." + 18-year bio with per-character scroll reveal
5. **Expertise** — your 5 capability areas (white section)
6. **Case Studies** — 4 sticky-stacking cards (national Defender E5 · 197K-mailbox migration · 15K+ device delivery · AI-driven SecOps/MDR)
7. **Experience** — "Built over 18 years." career timeline (white section)
8. **Contact** — "Let's secure what comes next." closing CTA + footer

All content is now drawn from Bipin's real LinkedIn profile — stats (18 yrs · 150+ projects ·
200K+ identities · €3M+ presales), the 7-role career timeline (vCyberiz → Unzer → medmix → HWS →
ITC Infotech → …), certifications (TOGAF 10, Teams Admin Associate), LinkedIn, and personal-site links.

## ⚠️ Remaining before publishing

- Save the headshot to `public/portrait.png` (placeholder shows until then).
- **"Read Case Study" buttons** still link to `#` — point them at write-ups if you have them.

## Where to edit content

Almost everything lives in **`src/data.ts`** — marquee tiles, capabilities, case studies, and nav.
Copy strings for the hero and about bio are in `src/sections/HeroSection.tsx` and `AboutSection.tsx`.

## Personalization notes / TODO

- Case-study "images" are self-contained CSS metric panels (no fragile hotlinks). Swap `Panel`
  in `src/sections/ProjectsSection.tsx` for real sanitized diagrams/screenshots if you have them.
- The "Read Case Study" buttons currently link to `#`. Point them at LinkedIn / resume / detail pages.
- Accent color is defined once as `.accent-gradient` in `src/index.css`.
