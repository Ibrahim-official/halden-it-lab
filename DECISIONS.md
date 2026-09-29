# Decisions

Deviations from the plan files, with the reason, per AGENTS.md rule R5. Newest first.
The owner must approve any new entry before the change is made.

| # | Date | Decision | Reason | Status |
|---|---|---|---|---|
| D8 | 2026-09-29 | The placeholder check warns locally (exit 0) and blocks only in strict mode (`PLACEHOLDER_STRICT=1`), which the deploy workflow sets | Keeps day-to-day CI useful while a project is in progress, while still guaranteeing that nothing with `[N]`/`[X]`/`TODO`/`your-username` can be **deployed** (AGENTS.md 5.5 intent) | owner to review |
| D7 | 2026-09-29 | The site loads `projects/*/showcase.md` via Astro's `glob()` loader with `base: '../projects'`, and a prebuild script copies `projects/*/evidence/public/**` into `site/public/projects/` | Keeps each project's content and evidence in its own folder (single source of truth) while giving the static site clean asset URLs | owner to review |
| D6 | 2026-09-29 | `site/scripts/check-placeholders.mjs` flags `[N]`, `[X]`, `TODO` (as required) **and** `your-username` in `cv.yaml` | The GitHub username is a placeholder for the same reason; catching it early prevents a broken public link | owner to review |
| D5 | 2026-09-29 | The CV with the real phone number lives outside this repository (`../cv-work/`), never in Git. The site's `/cv` page and generated PDF omit the phone number by default; `CV_INCLUDE_PHONE=1` produces a private local variant | Privacy: this repository will be public; the phone number goes only in CVs sent to employers (AGENTS.md 5.4) | owner to review |
| D4 | 2026-09-29 | Session mode is A (Advisor) until the owner grants Mode B access to hosts in `LAB-INVENTORY.md` | No shell access to the lab exists yet; Mode A is the safe default | open — owner confirms per session |
| D3 | 2026-09-29 | `docs/plan/` holds `00`, `01`, `02` and `P01`–`P10`. The build-and-showcase guide lives at the repo root as `AGENTS.md` + `CLAUDE.md` (not duplicated in `docs/plan/`) | Matches AGENTS.md Sections 1 and 3; one canonical copy of the guide avoids drift | done |
| D2 | 2026-09-29 | Site styling uses plain CSS with design tokens (no Tailwind) | AGENTS.md 5.2 allows either; plain CSS keeps the skeleton dependency-light and still supports light/dark mode | owner to review |
| D1 | 2026-09-29 | The site is built with Astro (current stable) and deploys as a static site; hosting target (GitHub Pages or Cloudflare Pages) is not chosen yet | AGENTS.md 5.2 recommends Astro; hosting choice can wait until the first deploy (after P1 is Done) | open |
