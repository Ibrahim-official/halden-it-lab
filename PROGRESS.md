# Progress

Mode: **A (Advisor)** — the agent has no direct access to the lab VMs. Scripts, configs and
docs are written by the agent; the owner runs them and pastes back output. Change to Mode B only
when the owner grants shell access to hosts listed in `LAB-INVENTORY.md`.

Build order: **P1 → P2 → P9 → P3 → P4 → P8 → P5 → P6 → P7 → P10** (from
`docs/plan/01-candidate-fit-and-tailored-roadmap.md`, not the numeric order).

**Current position:** every project now has its build kit written (scripts, configs, runbooks,
business artifacts and a showcase page). **Nothing has been executed in the lab yet**, so no
project is `done` and no metric is published. The next real step is lab execution, starting with
P1 Phase 1.

| Project | Status | Started | Done | Site page | Notes |
|---|---|---|---|---|---|
| P1 Core infrastructure | in-progress | 2026-09-29 | | in-progress | Build kit complete: design, 11 scripts, 5 runbooks, as-built, diagram, 3 business artifacts. **Next: run Phase 1 on DC01 (snapshot first).** |
| P2 Identity lifecycle | in-progress | 2026-10-02 | | in-progress | Build kit complete (JML engine, hybrid identity, CA, ScubaGear, access reviews). M365 trial: start at Phase 3, finish cloud work inside 30 days |
| P9 Service desk / CMDB | in-progress | 2026-10-02 | | in-progress | Build kit complete (GLPI/Uptime Kuma/BookStack on OPS01). Install Uptime Kuma here for P8's backup heartbeat |
| P3 AD security | in-progress | 2026-10-02 | | in-progress | Build kit complete (PingCastle, BloodHound CE, LAPS, tiering). Only run the attack tooling inside the isolated lab |
| P4 Endpoint hardening | in-progress | 2026-10-02 | | in-progress | Build kit complete (baseline, ASR, BitLocker, compliance reporting). Needs P3 (LAPS, tiering) |
| P8 Backup & DR | in-progress | 2026-10-02 | | in-progress | Build kit complete (3-2-1-1-0, PBS, immutability, restore tests, DR drill). BKP01 stays non-domain-joined |
| P5 Patch & vulnerability mgmt | in-progress | 2026-10-02 | | in-progress | Build kit complete (WSUS rings, OpenVAS, the Python prioritizer + unit tests). The prioritizer is the standout project |
| P6 Network, VPN & Wi-Fi | in-progress | 2026-10-02 | | in-progress | Build kit complete (VLANs, rule matrix, segmentation tests, WireGuard MFA, EAP-TLS). Needs a VLAN-aware bridge on the lab host |
| P7 SIEM & IR | in-progress | 2026-10-02 | | in-progress | Build kit complete (Wazuh, custom rules, ATT&CK mapping, tabletop IR). Needs the most RAM; run it when everything else exists |
| P10 Governance & reporting | in-progress | 2026-10-02 | | in-progress | Build kit complete (CIS IG1, change/CAB, KPI dashboard, monthly report) |

## Licences and trials

| Item | Started | Expires |
|---|---|---|
| Windows Server 2025 eval (180 days) | not started | +180 days from install |
| Windows 11 Enterprise eval (90 days) | not started | +90 days from install |
| M365 Business Premium trial (30 days) | not started | **start only at P2 Phase 3** |

## Definition of Done — open items

Every project shares the same open items, because the remaining work is execution rather than
authoring:

| # | Open item | Applies to |
|---|---|---|
| 1 | Run the phases in the lab and record each success criterion with a source file | all |
| 2 | Fill the acceptance-test tables with real results | all |
| 3 | Capture evidence into `evidence/raw/`, sanitize into `evidence/public/` | all |
| 4 | Fill each `showcase.md` results table from measured values, then set `status: done` | all |
| 5 | Run `npm run docs:pdf:all` again after any business-artifact edit; re-commit PDFs | all |
| 6 | Owner reads and can answer the interview questions for each project | all |
| 7 | Publish the site (needs the owner's explicit "publish" — R6) | site |
| 8 | Sign the permission matrix at the first real review | P1, P2 |

## Session log

### 2026-09-29: repository setup + P1 Phase 0
- Done: `halden-it-lab` repo skeleton per AGENTS.md Section 3 (folders, root files, workflows,
  Astro site with P1–P10 as "planned"), `docs/plan/` spec copy, `projects/p01-core-infrastructure/docs/00-design.md`.
- Done: CV data filled with real values (ChamStore numbers, GitHub `ibrahim-official`, graduation
  Oct 2027); site CV PDF is 1 page; placeholder + alt-text checks clean.
- Evidence: none — Phase 0 writes documents only.
- Problems/fixes: `P10` plan file initially missed in the docs/plan copy (glob `P0*` does not match
  `P10`); fixed the same session. `astro preview` in Astro 7 is a per-project daemon, so the CV PDF
  script serves `dist/` itself instead of shelling out to `astro preview`.

### 2026-10-02: P1 build kit + the other nine projects' build kits
- Done (P1): minimal-spec lab design (Hyper-V, dynamic memory, Server Core where useful), 11
  lab-guarded idempotent scripts for Phases 1–8, the synthetic 85-user staff CSV (+ generator),
  as-built document, logical diagram (`.drawio` + `.svg`), 6 runbooks, an ACL audit script, and 3
  business artifacts (staff brief, permission matrix, change record) built to PDF.
- Done (P2–P10): build kit for every remaining project in the tailored build order — scripts,
  configs, docs/runbooks, business artifacts and `showcase.md`, all honest about evidence being
  pending.
- Done (tooling): `site/scripts/md-to-pdf.mjs` + `npm run docs:pdf:all` render every business
  Markdown artifact to A4 PDF with the Playwright Chromium already used for the CV; the showcase
  asset copier now also publishes `business/*.pdf` to the site.
- Evidence: **none yet** — nothing has been executed in the lab. Every results table says
  "not measured" on purpose (AGENTS.md rule R2).
- Problems/fixes: `astro build` failed with `Tsconfig not found astro/tsconfigs/strict`. Cause: a
  stray `/home/ibrahim/Downloads/tsconfig.json` left behind by an earlier unzip, which Vite 8
  (rolldown) picked up by walking up from `site/`. Fixed by removing the stray file; the site builds
  and both checks pass. Recorded in `DECISIONS.md` (D13).
- Next: push the repo to GitHub, confirm the lab host and RAM, download the ISOs, snapshot the host,
  then **P1 Phase 1** — `scripts/01-Initialize-DC01.ps1 -Stage Promote` (snapshot DC01 first).
