# LeadingZone — UAE Business Setup & Corporate Services

A lightweight, fully static marketing site for LeadingZone Consultancy, a private
UAE business setup and corporate services firm.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · lucide-react
**Output:** static HTML/CSS/JS — no database, no CMS, no backend, no auth.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm run preview    # serve the built ./out locally
```

`npm run build` runs `next build` with `output: 'export'`, producing a plain
folder of files in `out/`. There is no Node server at runtime.

---

## Before you go live

Two things need a human decision. Both are in **one file**:
`src/content/site.ts`.

### 1. Contact details

| Field | Current value | Status |
| --- | --- | --- |
| `contact.whatsapp` | +971 52 668 6449 | Taken from the current leadingzone.ae site |
| `contact.phone` | +971 52 668 6449 | **Placeholder** — set the real landline/mobile |
| `contact.email` | info@leadingzone.ae | **Placeholder** — confirm the real inbox |
| `contact.address` | Business Bay, Dubai | **Placeholder** — set the real office address |
| `contact.hours` | Mon–Fri 9:00–18:00 GST | **Placeholder** — confirm |
| `social.*` | FB / IG / YouTube handles | Confirm; set any to `null` to hide the icon |

Every page — header, footer, contact page, floating WhatsApp button, JSON-LD
structured data — reads from this file. Nothing is hard-coded elsewhere.

### 2. The contact form

`src/components/contact/ContactForm.tsx` has **no backend**. Submitting opens the
visitor's own mail client with the enquiry pre-filled; a second button hands the
same summary to WhatsApp. Nothing is transmitted or stored by the site.

To wire it to a real endpoint, replace `handleSubmit` with a `fetch()` POST to a
form service (Formspree, Web3Forms, Basin) or a Vercel/Cloudflare function. The
field names are already usable as payload keys. No other file needs to change.

---

## Deployment

### Vercel

Import the repo and deploy — no dashboard configuration needed.

#### Why `outputDirectory` is pinned to `.next`

`vercel.json` sets `"outputDirectory": ".next"`. That looks wrong for a project
that exports to `out/`, but it is correct and deliberate.

Vercel's Next.js builder reads build manifests (`routes-manifest.json` and
friends) from the Next.js **`distDir`**, which is `.next`. It then detects
`output: 'export'` from `next.config.mjs` and serves the exported `out/`
directory on its own. `outputDirectory` names the *build* directory, not the
directory that gets served.

Pointing it at `out` — which is the intuitive but wrong reading — makes the
builder hunt for `out/routes-manifest.json`, a file that never exists there,
and the deploy fails after an otherwise successful build:

```
Error: The file "/vercel/path0/out/routes-manifest.json" couldn't be found.
```

It is pinned rather than omitted because `vercel.json` takes precedence over
Project Settings in the Vercel dashboard. Leaving it unset lets a stale
dashboard override (`Output Directory = out`) reintroduce the same failure,
which is exactly what happened during the first deployment of this project.
Pinning it makes the repo the single source of truth.

Routing (`trailingSlash`) comes from `next.config.mjs`, not from here.

### Cloudflare Pages

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or later |

`public/_headers` supplies security and caching headers on Cloudflare. Vercel
ignores that file and uses `vercel.json` instead.

### Any static host

The contents of `out/` can be uploaded as-is to S3 + CloudFront, Netlify, GitHub
Pages, or plain nginx. Routes use trailing slashes (`/services/`), and `404.html`
is the custom not-found page.

---

## Project structure

```
src/
  app/                     One folder per route; all statically prerendered
    layout.tsx             Fonts, metadata, header/footer, Organization JSON-LD
    page.tsx               Homepage
    not-found.tsx          404
    sitemap.ts robots.ts   Generated at build time into out/
    <service-slug>/        Nine service pages, each ~20 lines over a shared template
  components/
    layout/                Header (mega-menu + mobile sheet), Footer, WhatsApp FAB
    ui/                    Button, Section, Container, Reveal, Faq, PageHero,
                           CtaBand, Logo, Skyline
    home/                  Homepage sections
    service/              Shared service-page template + structure comparison
    contact/               Contact form
    legal/                 Prose wrapper for policy pages
  content/                 ALL copy and data lives here
    site.ts                Brand, contact details, navigation
    services.ts            The nine services: copy, highlights, steps, FAQs
    home.ts                Homepage sections: trust, benefits, process, FAQs
  lib/utils.ts             `cn()` class-name joiner
```

### Content is separated from presentation

Editing copy almost never requires touching a component. Adding a service means:

1. Append an entry to the `services` array in `src/content/services.ts`.
2. Create `src/app/<slug>/page.tsx` — copy any existing one and change the slug.
3. Add it to `primaryNav` / `footerNav` in `src/content/site.ts`.

The card grid, related-services links, sitemap and FAQ schema all pick it up
automatically.

---

## Design system

### Colours

Defined once as CSS custom properties in `src/app/globals.css` under `:root`, as
space-separated RGB channels so Tailwind opacity modifiers keep working
(`bg-navy-900/70`). `tailwind.config.ts` maps them to utility names.

| Token | Role |
| --- | --- |
| `navy-950 … navy-500` | Primary — deep navy through to slate blue |
| `gold-700 … gold-100` | Champagne gold, used as an **accent only** |
| `sand-50 … sand-200` | Warm off-white section grounds |
| `slateink-900 … 100` | Text and hairlines |

Rebranding is a single-file edit to the `:root` block.

### Typography

Plus Jakarta Sans for headings (`font-display`), Inter for body text — both via
`next/font`, self-hosted at build time, so there are no runtime font requests to
Google.

### Motion

`components/ui/Reveal.tsx` fades content up on scroll using an
`IntersectionObserver`, fires once, and is skipped entirely under
`prefers-reduced-motion: reduce`. Transitions elsewhere are short and use a
single easing curve (`ease-premium`).

### The skyline

`components/ui/Skyline.tsx` is an inline SVG Dubai skyline — roughly 4KB, no
network request, no licensing constraints, crisp at any width. To swap in real
photography, replace the `<DubaiSkyline />` usage in `components/home/Hero.tsx`
with an `<img>`/`<picture>`; the surrounding gradient and scrim stack is built to
work with either.

---

## Content accuracy

The copy was written to avoid claims that cannot be substantiated:

- **No invented figures** — no client counts, success rates or years in business.
- **No guarantees** — licence, visa and bank approvals are explicitly described
  as decisions of the relevant authority or institution.
- **Clear positioning** — the footer, About page and Terms state plainly that
  LeadingZone is a private consultancy, not a government authority, bank, law
  firm or licensed tax agent.
- **No specific thresholds or fees** — VAT and Corporate Tax pages refer to FTA
  rules rather than quoting numbers that change.

If marketing wants to add figures or credentials later, they belong in
`src/content/` and should be verifiable.

---

## Accessibility & SEO

- Skip-to-content link; semantic landmarks; visible focus rings on every control.
- Mega-menu and mobile sheet close on `Escape`; the mobile sheet locks body
  scroll while open.
- FAQ accordion uses `aria-expanded`/`aria-controls` and marks collapsed panels
  `inert`.
- Per-page `title`, `description` and canonical URL; Open Graph and Twitter tags.
- `ProfessionalService` JSON-LD sitewide; `FAQPage` JSON-LD on the homepage and
  every service page.
- `sitemap.xml` and `robots.txt` generated at build time from the route list.

### Note on the previous site

The existing WordPress site at leadingzone.ae is serving cloaked spam — Polish
casino pages and injected classified-ad content, with scripts that redirect
visitors arriving from Google. Do not migrate content, plugins or the database
from it. It should be taken down or cleaned independently of this rebuild, and
the domain's search presence will likely need a reconsideration request once the
new site is live.
