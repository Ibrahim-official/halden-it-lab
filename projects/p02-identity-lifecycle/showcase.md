---
id: p02
order: 2
title: "Identity Lifecycle and Access Governance: JML Automation, MFA, Conditional Access, Access Reviews"
tagline: "Joiner-mover-leaver access automated from an HR file, with MFA enforced for everyone"
status: in-progress
started: 2026-10-02
roles: [sysadmin, it-support]
skills: ["PowerShell", "Entra ID", "Conditional Access", "MFA", "Cloud Sync", "ScubaGear", "Access Reviews", "gMSA", "Python"]
jd_bullets:
  - "Manage user accounts, permissions, groups, MFA and access controls on least privilege"
  - "Follow access-management standards; identify unauthorized access"
  - "Work with departments (HR, department heads) on process improvement"
hero: ./evidence/public/p02-architecture.svg
documents:
  - title: "Executive brief: identity lifecycle and access governance"
    href: ./business/p02-exec-brief.pdf
  - title: "Executive brief: stopping access by memory, removing it by luck"
    href: ./business/p2-exec-brief.pdf
  - title: "Entitlements and role matrix (for department-head review)"
    href: ./business/p02-entitlements-matrix.pdf
  - title: "Change record: the JML engine, Conditional Access and MFA"
    href: ./business/p02-change-record.pdf
  - title: "Access review pack: how department heads sign off access"
    href: ./business/p02-access-review-pack.pdf
repo_path: projects/p02-identity-lifecycle
video: ""
cv_bullets:
  - "Built a PowerShell joiner-mover-leaver engine driven by an HR export, with dry-run, a mass-change circuit breaker, protected-account safeguards and a full audit trail."
  - "Implemented hybrid identity (Entra Connect cloud sync) with Conditional Access requiring MFA for all users and phishing-resistant MFA for privileged roles."
  - "Defined quarterly access reviews with department-head sign-off and automated identity-hygiene reporting for stale, disabled and over-privileged accounts."
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). The HR export is synthetic. This page shows a working build kit that is being executed in the lab phase by phase — numbers appear here only once they have actually been measured."
---

## The problem

HR emails IT when someone joins, moves or leaves — sometimes. New starters wait days for access, movers keep their old permissions, leavers stay active for weeks, and there is no MFA.

## What will be built

A PowerShell joiner-mover-leaver pipeline driven by an HR source-of-truth export (with dry-run, a
mass-change circuit breaker and a full audit trail), hybrid identity to Entra ID, Conditional Access
with MFA for all users, quarterly access reviews signed by department heads, and a CISA ScubaGear
assessment.

## How it is being built

The engine reads the HR export, diffs it against Active Directory, and produces a **plan** before it
changes anything: `scripts/jml-plan.py` is pure logic (types, no side effects) and is covered by unit
tests, and `scripts/01-Invoke-HaldenJML.ps1` applies that plan under `-WhatIf` first. Two safeguards
matter more than the happy path — a circuit breaker that aborts if the export implies an
implausibly large number of changes (usually a broken file, not 40 resignations), and a protected
list so the engine can never touch break-glass or service accounts.

## Results

**Not measured yet.** The pipeline, the Conditional Access policies and the review process are built
and tested at the code level, but nothing has been executed against the domain or the tenant, so no
number is published here. Each metric below will be filled from a real lab run with a file in
`evidence/public/` as its source.

| Metric | Before | After | Source |
|---|---|---|---|
| Accounts still holding access after the leaver process | not measured | not measured | pending |
| MFA registration coverage | not measured | not measured | pending |
| Legacy-authentication sign-ins after blocking | not measured | not measured | pending |
| Access reviews completed with department-head sign-off | not measured | not measured | pending |

## Business side

What the business gets: a joiner-mover-leaver process and RACI that HR and department heads can
follow, an entitlements matrix the business signs off (access is a business decision, not an IT one),
an executive brief, an access-review pack for department heads, and a change record in the shape the
change log expects. Sign-offs are left visibly unsigned until a review actually happens.

## What I learned / what I'd do differently

- **A circuit breaker is not paranoia.** The first thing to break a JML tool in real life is a bad
  input file, not a bug in the logic — aborting on an implausible diff is what stops an automation
  from becoming an incident.
- **Pure logic plus a thin shell is worth the extra file.** Putting the planning in a tested Python
  module and keeping PowerShell as the executor made the risky part reviewable on its own.
- **MFA is a process, not a switch.** Enforcing it is easy; getting 85 users registered without
  locking anyone out on a Monday morning needs the grace period and the communication to be designed
  first.

> Status: **in progress**. The build kit (scripts, configs, runbooks, business artifacts) is complete;
> lab execution runs phase by phase. Metrics, diagrams and evidence are published only from real runs
> (the Definition of Done is in `AGENTS.md`, Section 4.7), and progress is tracked in `PROGRESS.md`.
