# PECANetwork Design System

## What is PECANetwork
PECANetwork is an international research network exploring clinical applications of the **network approach to psychopathology** — the idea that mental disorders are better understood as systems of mutually reinforcing symptoms, rather than as symptoms of one hidden underlying cause. The network connects researchers, clinicians, and institutions building and testing this framework (e.g. PECAN — Perceived Causal Networks — mapping methods, network intervention analysis, idiographic case conceptualization).

## Sources
No brand assets, codebase, or Figma file were attached for PECANetwork itself. This system was built from:
- The client-supplied brand brief: tone (rigorous/academic), palette direction (clinical blue/teal, gradient, "innovative/techy"), and a structural reference to a Clay.com-style B2B SaaS system (spacing scale, radius scale, type-scale shape, card/section rhythm) — used only for *structure*, not palette, illustrations, or copy.
- Four reference screenshots supplied by the user for visual direction: a "Quantum" biotech-style hero (soft lavender/mint gradient mesh, thin line-art overlay), a "HeartWave" cardiac-research hero (pinned diagram callouts on an illustration), an abstract iridescent gradient-mesh texture, and a "FemAI" publication-card grid layout. These informed the gradient-mesh backgrounds, network-diagram/callout motifs, and publication-card pattern below — none of their brand names, logos, or copy belong to PECANetwork and none are reproduced here.

**If you have PECANetwork's actual logo, website, deck, or a Figma file, attach it.** This system currently uses a plain wordmark and originated illustrations because no real PECANetwork assets were provided — treat the palette, type substitution, and network-diagram motif as a strong starting proposal, not ground truth.

## Design lineage
The structural system (4px spacing scale, radius scale, type-scale shape, ~96–112px section rhythm) is adapted from a Clay.com-style B2B SaaS system the client referenced for its clarity. The palette, illustration language, and tone were rebuilt from scratch for a clinical/academic research network — no Clay colors, illustrations, copy, or brand assets are used.

---

## Content Fundamentals

**Voice**: third-person institutional, not first-person startup voice. PECANetwork describes itself as a network of researchers, not as "we build tools for you." Prefer "PECANetwork connects…" / "the network approach…" over "We help you…".

**Register**: academic-precise, not promotional. Claims are qualified and cite mechanisms (symptom networks, centrality, hysteresis) rather than making outcome promises. No hype adjectives ("revolutionary", "game-changing"). Compare:
- On-brand: *"PECANetwork develops and tests methods for mapping symptom networks in individual patients."*
- Off-brand: *"Unlock the future of mental health with our revolutionary AI-powered platform."*

**Casing**: sentence case for headlines and nav labels (never Title Case, never ALL CAPS except short uppercase caption labels like section eyebrows and badges, which use letter-spacing to signal their smallness — see `--text-caption-upper-*` tokens).

**Person**: refers to "researchers", "clinicians", "member institutions" — not "users" or "customers". When addressing a visitor directly (a CTA), "you" is acceptable in short imperative CTAs ("Join the network") but body copy stays descriptive/third-person.

**Emoji**: none. This is an academic/clinical brand; emoji would undercut credibility.

**Numbers & citations**: publication metadata (authors, journal, year) is treated as content, not decoration — always show journal name and year on a publication card, never omit for visual cleanliness.

**Vibe**: precise, calm, quietly confident. Optimism is expressed through clarity and rigor (clean diagrams, real numbers), not through exclamation points.

---

## Visual Foundations

**Canvas**: near-white with a faint cool tint (`--color-canvas`, #fbfcff) — never stark #fff, never Clay's cream. Sections alternate `--color-canvas` and `--color-surface-soft` for gentle rhythm; no dark sections in the marketing site body. Footer stays light (`--color-surface-soft`), matching the "no dark footer" instinct but for a different reason here: the brand reads as open/transparent research, not playful warmth.

**Backgrounds**: the signature background is a soft multi-stop **gradient mesh** (`--gradient-mesh-hero`) — overlapping radial gradients in blue/violet/mint/peach at low opacity over the cool-white canvas, used behind hero sections and section dividers. Layered over it, thin (1px, ~14% opacity) **network line-art** — nodes and edges evoking the network approach itself — sits as a full-bleed decorative layer (`assets/illustrations/network-mesh.svg`). No photography, no claymation/3D illustration, no hand-drawn texture.

**Color**: clinical blue (`--color-accent-blue`) is the primary accent; violet, mint, cyan, and peach are secondary accents used as *tints* (10–15% strength backgrounds, `--color-tint-*`) behind feature cards and badges — never as full-saturation fills the way Clay uses its 6-color cards. This keeps the clinical/academic register: color signals category, not decoration.

**Type**: display headlines use Manrope (rounded-geometric, weight 600–700, tight negative tracking) — modern and precise rather than playful; body/UI uses Inter. See `tokens/typography.css` for the full scale.

**Animation**: minimal. No bounce, no elastic easing (would read as playful/SaaS, wrong for this brand). Where used: opacity/translate-Y fade-ins on scroll (200–400ms, ease-out), and a slow (20–40s) ambient drift on the gradient-mesh background. No infinite decorative loops on foreground content.

**Hover states**: links darken slightly toward `--color-ink`; primary buttons scale to 0.97 on press (see `Button.jsx`), no color-darkening on buttons — the gradient CTA stays constant, only the press-scale communicates interactivity.

**Press states**: `transform: scale(0.97)` on mousedown, released on mouseup/mouseleave. No shadow removal or color shift.

**Borders**: 1px hairline (`--color-hairline`, #e6e9f2) on cards, inputs, and card grids — never colored borders, never left-border accent stripes (explicitly avoided — reads as generic SaaS/AI-slop).

**Shadows**: very soft, low-alpha (`--shadow-card`) — a faint double-shadow (tight + diffuse) for elevated cards; flat (no shadow) for cards already differentiated by a tint background. No heavy drop shadows anywhere.

**Corner radii**: tighter than Clay's — 10px standard (`--radius-md`) for buttons/inputs, 16px (`--radius-lg`) for content/publication/member cards, 20px (`--radius-xl`) for tinted feature cards. Slightly less rounded than the Clay reference on purpose — reads more precise/clinical, less "friendly consumer app".

**Cards**: three families — (1) tinted `FeatureCard` (colored tint fill, no border, no shadow, rounded-xl), (2) hairline `ContentCard`/`PublicationCard`/`MemberCard` (white fill, 1px hairline border, soft shadow, rounded-lg), (3) small `CalloutChip` annotations (white fill, hairline, soft shadow, pinned onto diagrams/illustrations — a direct nod to the "Genomics / Biomarkers" pin pattern in the reference screenshots).

**Layout**: single 12-column grid, max content width 1200px, generous section padding (`--space-section`, 112px) between major bands. Hero uses a 7/5 or centered layout with the gradient-mesh + network-line background behind centered headline copy (per the "Quantum"-style reference), not a strict image-right split.

**Transparency/blur**: the top nav uses `backdrop-filter: blur` at ~85% opacity white so page content is visible scrolling underneath — the only place blur is used. No frosted-glass cards elsewhere.

**Imagery color vibe**: N/A — no photography is used yet (none was provided; see Iconography/assets note below). If photography is added, it should stay cool/clinical (blues, neutrals, natural light) rather than warm, to match the palette.

---

## Iconography
No icon set was provided with PECANetwork's brand. **Lucide** (open, CDN-available, thin 1.5–1.75px stroke — matching the thin line-art used in the network-mesh motif) is substituted; load it via `<script src="https://unpkg.com/lucide@latest"></script>` where icons are needed. This substitution should be confirmed or replaced once real brand assets are available.
- No emoji are used as icons or decoration (see Content Fundamentals).
- No unicode glyphs are used as icons.
- The network line/node motif (`assets/illustrations/network-mesh.svg`, `network-diagram-accent.svg`) functions as the brand's *decorative* visual signature, distinct from functional UI icons — it is an originated abstraction (nodes + edges), not a licensed illustration set, since none was provided.
- No logo was provided. Wherever a mark would appear, the plain wordmark "PECANetwork" is used (see `TopNav`, `Footer`). Do not invent a logomark.

---

## Known substitutions (flagged)
- **Display font**: brief did not specify a typeface; Manrope was chosen (Google Fonts, weights 500–800) for a modern-but-precise rounded-geometric display face, paired with Inter for body/UI — both loaded via `tokens/typography.css`.
- **Icons**: Lucide (CDN) substituted — see Iconography above.
- **Illustration**: no illustration assets exist for PECANetwork; the network line/node motif was originated to visualize "the network approach" literally, per direction from the user. Replace with real commissioned illustration or diagrams if/when available.
- **Logo**: none provided; plain wordmark used throughout.

---

## Index

**Tokens** (`tokens/`, imported via `styles.css`)
- `colors.css` — base palette + semantic surface/text/accent aliases + gradient-mesh tokens
- `typography.css` — Manrope/Inter font-face import + full type scale
- `spacing.css` — 4px-based spacing scale + container width
- `radii.css` — radius scale + shadow scale

**Assets** (`assets/illustrations/`)
- `network-mesh.svg` — full-bleed decorative node/edge background
- `network-diagram-accent.svg` — small accent diagram used in feature/publication cards

**Components** (`components/<group>/`, each with `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` HTML)
- `core/Button` — primary/secondary/ghost/onColor button
- `feedback/Badge` — `Badge`, `Tag` (status pill, filter chip)
- `forms/Input` — `Input`, `Select`, `Checkbox`, `Radio`
- `navigation/TopNav` — sticky translucent nav with dot-marker links
- `layout/Footer` — 4-column cream-adjacent footer
- `cards/FeatureCard` — `FeatureCard`, `ContentCard`, `CalloutChip`
- `cards/PublicationCard` — `PublicationCard`, `MemberCard`, `StatBlock`

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design System tab (Colors, Type, Spacing, Radii/Shadow, Brand/gradient-mesh).

**UI kit** (`ui_kits/marketing-site/`) — click-through recreation of the PECANetwork public site: homepage (hero, research areas, publications preview, member network preview, CTA), Publications page, Members page.

## Intentional additions
No source defined a component inventory (brand-guidelines-only run), so a standard set was authored, sized to a research network's public marketing site: navigation, buttons, form inputs, badges/tags, three card families, and footer.
