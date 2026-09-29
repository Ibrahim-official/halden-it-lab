---
id: p02
order: 2
title: "Identity Lifecycle and Access Governance: JML Automation, MFA, Conditional Access, Access Reviews"
tagline: "Joiner-mover-leaver access automated from an HR file, with MFA enforced for everyone"
status: planned
roles: [sysadmin, it-support]
skills: ["PowerShell", "Entra ID", "Conditional Access", "MFA", "Cloud Sync", "ScubaGear", "Access Reviews", "gMSA"]
jd_bullets:
  - "Manage user accounts, permissions, groups, MFA and access controls on least privilege"
  - "Follow access-management standards; identify unauthorized access"
  - "Work with departments (HR, department heads) on process improvement"
repo_path: projects/p02-identity-lifecycle
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

HR emails IT when someone joins, moves or leaves — sometimes. New starters wait days for access, movers keep their old permissions, leavers stay active for weeks, and there is no MFA.

## What will be built

A PowerShell joiner-mover-leaver pipeline driven by an HR source-of-truth export (with dry-run, a mass-change circuit breaker and a full audit trail), hybrid identity to Entra ID, Conditional Access with MFA for all users, quarterly access reviews signed by department heads, and a CISA ScubaGear before/after assessment.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
