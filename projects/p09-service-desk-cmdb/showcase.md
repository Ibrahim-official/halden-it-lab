---
id: p09
order: 3
title: "IT Service Desk, Asset Inventory (CMDB) and Documentation Hub"
tagline: "A real ITSM platform: asset discovery, SLAs, knowledge base, vendors and config-as-code"
status: planned
roles: [it-support, sysadmin]
skills: ["GLPI", "BookStack", "PHP/MySQL", "Asset Discovery", "SLAs", "CMDB", "Git config-as-code", "Vendor Management"]
jd_bullets:
  - "Maintain accurate infrastructure inventory, configurations, diagrams and technical documentation"
  - "Coordinate with vendors and service providers"
  - "Provide technical support and escalation assistance to the IT Support team"
  - "Maintain accurate records and ensure timely completion (SLAs)"
repo_path: projects/p09-service-desk-cmdb
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Support requests arrive by email, Teams, WhatsApp and people walking up to the desk. Nothing is tracked, the asset spreadsheet is 40% wrong, and the firewall support contract expired unnoticed.

## What will be built

GLPI with agent-based automatic asset discovery (reconciled to 0 unknown devices via script), a helpdesk with SLAs and an L1->L2->vendor escalation matrix, a vendor/contract/licence register with renewal alerts, a BookStack documentation hub with owners and review dates, and nightly config-as-code exports to Git with drift detection tied to change records.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
