---
id: p08
order: 6
title: "Backup, Recovery and Disaster Recovery with Automated Restore Verification"
tagline: "3-2-1-1-0 backups with an immutable copy and restore tests that actually run every week"
status: planned
roles: [sysadmin, it-support]
skills: ["Proxmox Backup Server", "Veeam CE", "restic", "MinIO Object Lock", "wbadmin", "BIA", "RTO/RPO", "DR Runbooks"]
jd_bullets:
  - "Maintain backup, recovery and disaster-recovery procedures and periodically verify backups"
  - "Work with different departments (business impact analysis)"
  - "Technical documentation; vendor coordination (offsite storage)"
repo_path: projects/p08-backup-dr
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Halden 'has backups': a nightly copy to a USB disk plugged into the same server, run as Domain Admin. Nobody has ever tested a restore, and the domain controllers are not backed up at all.

## What will be built

A department-level Business Impact Analysis defining RTO/RPO per system, a hardened non-domain-joined backup server, 3-2-1-1-0 backups with an immutable S3 Object Lock copy that resisted deletion with admin credentials, automated weekly restore tests (hash-checked files plus sandboxed VM boots), AD recovery drills and a timed ransomware DR runbook.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
