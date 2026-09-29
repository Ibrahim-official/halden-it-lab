# The online CV website (Astro, static)

This is the public face of the portfolio: a digital CV plus one case-study page per project,
built from `projects/*/showcase.md` and `site/src/data/cv.yaml`. The lab itself is never online —
the site publishes evidence (write-ups, diagrams, sanitized screenshots, documents).

## Run it locally

```bash
cd site
npm install
npm run dev          # http://localhost:4321
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server (copies showcase assets first) |
| `npm run build` | Static build into `dist/` (copies showcase assets first) |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Placeholder check + alt-text check (warnings by default) |
| `PLACEHOLDER_STRICT=1 npm run check` | Fail on unresolved placeholders (deploy gate) |
| `npm run build:cv` | Print `/cv` to `dist/cv/Muhammad-Ibrahim-Akmal-CV.pdf` with Playwright (run `npm run build` first; needs `npx playwright install chromium` once) |

## Content sources

| Content | File |
|---|---|
| CV (home page, `/cv`, PDF) | `site/src/data/cv.yaml` |
| Case studies | `../projects/<folder>/showcase.md` |
| Evidence images/documents | `../projects/<folder>/evidence/public/` (copied to `site/public/projects/` at build) |

## Before the first deploy

1. Set the real `github` URL in `cv.yaml` and in `src/consts.ts` (`GITHUB_REPO`).
2. Set `SITE_URL` in `astro.config.mjs` (or the `SITE_URL` environment variable) and update
   `public/robots.txt`.
3. Replace every placeholder in `cv.yaml` — `PLACEHOLDER_STRICT=1 npm run check` must pass.
4. Deploy: GitHub Pages via `.github/workflows/deploy-site.yml`, or Cloudflare Pages
   (build command `npm run build && npm run build:cv`, output directory `site/dist`).
5. Show the owner a preview and get an explicit "publish" first (AGENTS.md R6 and 5.8).

## Private CV variant (with the phone number)

The phone number is never committed and never deployed. For a private PDF to send to employers:

```bash
CV_PHONE="+92 3XX XXXXXXX" npm run build && npm run build:cv
```

This writes the same file name; copy it out of `dist/` before rebuilding without the phone.
