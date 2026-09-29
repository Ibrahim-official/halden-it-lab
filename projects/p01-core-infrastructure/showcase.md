---
id: p01
order: 1
title: "Core Infrastructure Build: AD DS, DNS, DHCP, File Services, GPO and Linux Integration"
tagline: "The redundant Windows Server foundation the whole portfolio stands on"
status: planned
roles: [sysadmin, it-support]
skills: ["Active Directory", "DNS", "DHCP", "Group Policy", "Windows Server 2025", "PowerShell", "Linux (Ubuntu)", "DFS", "FSRM"]
jd_bullets:
  - "Administer Windows/Linux servers, Active Directory, DNS, DHCP and file services"
  - "Access based on least privilege (AGDLP)"
  - "Accurate configurations, diagrams and technical documentation"
repo_path: projects/p01-core-infrastructure
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Halden has one aging server doing everything: DC, file server and print server, with no redundancy and everyone holding Full Control on the shared drive. If it dies, nobody can log in, get an IP address or open a file.

## What will be built

Two replicating Windows Server 2025 domain controllers, AD-integrated DNS with reverse zones and scavenging, DHCP failover, an AGDLP group model, DFS file services with ABE/FSRM/shadow copies, a tiered GPO baseline, and Ubuntu servers joined to AD with group-based SSH and sudo.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
