# P05: Risk-Based Patch and Vulnerability Management Program

> Home-lab project in an isolated, simulated 85-user company ("Halden Distribution Ltd").
> Presented as a home lab on the portfolio site — never as employment experience.

**Status:** planned · **Build order:** 7 of 10 · **Depends on:** P1, P4 (P9 CMDB criticality improves it later)

**Plan:** [`docs/plan/P05-patch-vulnerability-management.md`](../../docs/plan/P05-patch-vulnerability-management.md)
**Showcase page source:** [`showcase.md`](./showcase.md)
**Progress:** see [`PROGRESS.md`](../../PROGRESS.md)

The technical write-up is completed at project completion, following the template in
`AGENTS.md` (Appendix B): problem, what I built, architecture, how to reproduce,
results table (every metric with a source file), acceptance tests, business deliverables,
lessons learned and interview notes.

## Folder map

| Folder | Contents |
|---|---|
| `scripts/` | PowerShell / bash / Python / Ansible (idempotent, lab-guarded — see AGENTS.md 4.4) |
| `configs/` | Sanitized config exports (GPO backups, firewall rules, etc.) |
| `docs/` | As-built docs, runbooks, diagrams |
| `business/` | Reports, matrices, policies and slides for the business layer |
| `evidence/raw/` | Original screenshots/outputs — **git-ignored, never published** |
| `evidence/public/` | Sanitized, compressed evidence safe to publish |
