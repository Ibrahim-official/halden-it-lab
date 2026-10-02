# P06: Network Segmentation, Secure Remote Access VPN and Enterprise Wi-Fi

> Home-lab project in an isolated, simulated 85-user company ("Halden Distribution Ltd").
> Presented as a home lab on the portfolio site — never as employment experience.

**Status:** build kit complete — **lab execution pending** · **Build order:** 8 of 10 · **Depends on:** P1, P3

**Plan:** [`docs/plan/P06-network-segmentation-vpn-wifi.md`](../../docs/plan/P06-network-segmentation-vpn-wifi.md) · **Design:** [`docs/00-design.md`](./docs/00-design.md) · **As-built:** [`docs/as-built.md`](./docs/as-built.md) · **Showcase page source:** [`showcase.md`](./showcase.md) · **Progress:** [`PROGRESS.md`](../../PROGRESS.md)

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
