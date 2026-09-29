---
id: p04
order: 5
title: "Endpoint Hardening Baseline and Windows 11 Readiness Program"
tagline: "A measurable Windows endpoint baseline, plus a costed Windows 10 replacement plan"
status: planned
roles: [sysadmin, it-support]
skills: ["Microsoft Security Baselines", "Defender ASR", "BitLocker", "LAPS", "HardeningKitty", "PowerShell", "Power BI", "Policy Analyzer"]
jd_bullets:
  - "Maintain endpoint protection, updates and system hardening"
  - "Perform regular security checks"
  - "Prepare reports and business updates; identify operational issues and communicate to management"
repo_path: projects/p04-endpoint-hardening
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

PCs were set up by whoever unboxed them: users are local admins, BitLocker is off, Defender runs on defaults, and about 30% of machines still run Windows 10, which lost support on 14 Oct 2025.

## What will be built

Microsoft security baselines imported via GPO with a documented overrides process, 16+ Defender ASR rules moved from audit to block, BitLocker with AD key escrow and a tested recovery runbook, local admin removal, an automated daily compliance report, and a costed Windows 11 readiness assessment for an 85-device (synthetic) fleet.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
