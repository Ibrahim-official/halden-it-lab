---
id: p07
order: 9
title: "Security Monitoring, SIEM and Incident Response"
tagline: "ATT&CK-mapped detections, validated with Atomic Red Team, plus a tested incident response plan"
status: planned
roles: [sysadmin, it-support]
skills: ["Wazuh", "Sysmon", "MITRE ATT&CK", "Atomic Red Team", "Uptime Kuma", "IR Playbooks", "NIST SP 800-61r3", "Tabletop Exercise"]
jd_bullets:
  - "Monitor system health, availability, logs, alerts and security events"
  - "Identify and respond to security incidents and unauthorized access"
  - "Provide technical support and escalation assistance; communicate issues to management"
repo_path: projects/p07-siem-incident-response
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

At Halden nobody would notice an attacker until the ransom note appeared; logs sit on each machine and get overwritten within days; and there is no answer to 'who do we call?'.

## What will be built

A Wazuh SIEM with Sysmon, tuned Windows advanced auditing and firewall/VPN syslog across the environment, 12 ATT&CK-mapped custom detections for AD attacks validated with Atomic Red Team, availability monitoring with a backup heartbeat and a staff status page, and an incident response capability: plan, severity matrix, five playbooks and a management tabletop exercise with tracked actions.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
