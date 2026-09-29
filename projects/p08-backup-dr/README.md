# P08: Backup, Recovery and Disaster Recovery with Automated Restore Verification

> Home-lab project in an isolated, simulated 85-user company ("Halden Distribution Ltd").
> Presented as a home lab on the portfolio site — never as employment experience.

**Status:** planned · **Build order:** 6 of 10 · **Depends on:** P1-P4 (P7 provides the backup heartbeat monitor; moved up in the tailored order)

**Plan:** [`docs/plan/P08-backup-dr-restore-verification.md`](../../docs/plan/P08-backup-dr-restore-verification.md)
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
