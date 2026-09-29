---
id: p03
order: 4
title: "Active Directory Security Assessment and Privileged Access Hardening"
tagline: "Found and closed the paths an attacker would use to take over the domain"
status: planned
roles: [sysadmin]
skills: ["PingCastle", "Purple Knight", "BloodHound CE", "Windows LAPS", "Protected Users", "gMSA", "Kerberos", "Fine-Grained Password Policies"]
jd_bullets:
  - "System hardening and access controls based on least privilege"
  - "Identify and respond to vulnerabilities and unauthorized access"
  - "Perform regular security checks and support remediation"
repo_path: projects/p03-ad-security
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Every workstation has the same local admin password, IT uses one Domain Admin account for everything, and service account passwords have not changed in years. One phished laptop can reach the whole domain.

## What will be built

A full AD security assessment (PingCastle, Purple Knight, BloodHound CE) with a risk-rated findings register and a 1-page executive summary, then remediation: a 3-tier admin model with GPO logon restrictions, Windows LAPS with encrypted AD backup, gMSAs, Protected Users, FGPP and legacy-protocol hardening — all re-assessed and re-scored.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
