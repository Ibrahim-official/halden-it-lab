# Progress

Mode: **A (Advisor)** — the agent has no direct access to the lab VMs yet. Scripts, configs and
docs are written by the agent; the owner runs them and pastes back output. Change to Mode B only
when the owner grants shell access to hosts listed in `LAB-INVENTORY.md`.

Build order: **P1 → P2 → P9 → P3 → P4 → P8 → P5 → P6 → P7 → P10** (from
`docs/plan/01-candidate-fit-and-tailored-roadmap.md`, not the numeric order).

| Project | Status | Started | Done | Site page | Notes |
|---|---|---|---|---|---|
| P1 Core infrastructure | in-progress | 2026-09-29 | | planned | Phase 0 (design doc) done; Phase 1 next — snapshot before changes |
| P2 Identity lifecycle | planned | | | planned | M365 Business Premium trial: start at Phase 3, finish cloud work inside 30 days |
| P9 Service desk / CMDB | planned | | | planned | Moved up (build order #3). Install Uptime Kuma here for P8's backup heartbeat |
| P3 AD security | planned | | | planned | Builds on P1/P2 while fresh |
| P4 Endpoint hardening | planned | | | planned | Needs P3 (LAPS, tiering) |
| P8 Backup & DR | planned | | | planned | Moved up (#6). BKP01 stays non-domain-joined; moves to MGMT VLAN in P6 |
| P5 Patch & vulnerability mgmt | planned | | | planned | Python prioritizer is the standout project |
| P6 Network, VPN & Wi-Fi | planned | | | planned | Needs VLAN-aware bridge on the lab host |
| P7 SIEM & IR | planned | | | planned | Needs the most RAM; run it when everything else exists |
| P10 Governance & reporting | planned | | | planned | Ties the portfolio together |

## Licences and trials

| Item | Started | Expires |
|---|---|---|
| Windows Server 2025 eval (180 days) | not started | +180 days from install |
| Windows 11 Enterprise eval (90 days) | not started | +90 days from install |
| M365 Business Premium trial (30 days) | not started | **start only at P2 Phase 3** |

## Session log

### 2026-09-29: repository setup + P1 Phase 0
- Done: `halden-it-lab` repo skeleton per AGENTS.md Section 3 (folders, root files, workflows,
  Astro site skeleton with P1–P10 as "planned"), `projects/p01-core-infrastructure/docs/00-design.md`
  (IP plan, naming standards, OU tree, site layout, DNS/DHCP design).
- Evidence: none yet — Phase 0 writes documents only.
- Problems/fixes: `P10` plan file initially missed in the docs/plan copy (glob `P0*` does not match
  `P10`); fixed in the same session.
- Next: confirm the lab host choice (Proxmox vs Hyper-V) and RAM, download the ISOs, snapshot the
  host, then start P1 Phase 1 (DC01).
