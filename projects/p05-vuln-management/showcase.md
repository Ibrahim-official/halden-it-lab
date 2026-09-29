---
id: p05
order: 7
title: "Risk-Based Patch and Vulnerability Management Program"
tagline: "A Python prioritizer that turns hundreds of scan findings into a short, ranked action list"
status: planned
roles: [sysadmin]
skills: ["Python", "pandas", "Greenbone CE", "WSUS", "Ansible", "CISA KEV", "FIRST EPSS", "CISA BOD 26-04", "Power BI"]
jd_bullets:
  - "Maintain patching and updates"
  - "Perform regular security checks and support vulnerability remediation"
  - "Coordinate with vendors (firmware advisories)"
repo_path: projects/p05-vuln-management
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Halden patches when someone has time. A scan by the cyber-insurance provider returned 400 'critical' findings, and IT cannot tell which ones attackers would actually use.

## What will be built

Ring-based Windows patching (WSUS with GPO client-side targeting), Ansible-automated Linux patching with pre/post health checks, weekly authenticated Greenbone scans, and a Python engine that enriches findings with CISA KEV and FIRST EPSS data, exposure and asset criticality to assign P0-P4 priorities and SLAs — reported through a remediation dashboard (MTTR, SLA compliance, KEV exposure).

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
