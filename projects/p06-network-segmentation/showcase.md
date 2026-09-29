---
id: p06
order: 8
title: "Network Segmentation, Secure Remote Access VPN and Enterprise Wi-Fi"
tagline: "From one flat network to six firewall-enforced zones, an MFA VPN and certificate-based Wi-Fi"
status: planned
roles: [sysadmin]
skills: ["OPNsense", "VLANs", "WireGuard", "OpenVPN", "NPS/RADIUS", "AD CS", "802.1X / EAP-TLS", "nmap", "DNS filtering"]
jd_bullets:
  - "Support firewall, network, VPN and Wi-Fi infrastructure"
  - "Access controls based on least privilege (network level)"
  - "Maintain network diagrams and configuration documentation; prevent unauthorized access"
repo_path: projects/p06-network-segmentation
lab_note: "Home-lab project in an isolated, simulated 85-user company (Halden Distribution Ltd). Every number published on this page will come from a real run in the lab."
---

## The problem

Guest Wi-Fi, CCTV, printers, scanners, laptops and servers all share one subnet; the Wi-Fi password is written on the break-room wall; and remote staff use a port-forwarded RDP to the file server.

## What will be built

Six firewall-enforced VLAN zones with a default-deny, documented rule matrix, egress and DNS filtering, removal of internet-exposed RDP in favour of an AD-integrated OpenVPN with MFA, a WireGuard site-to-site tunnel to the warehouse, and certificate-based 802.1X (EAP-TLS) Wi-Fi on an internal AD CS PKI — all verified with an automated nmap test matrix.

> Status: **planned**. Metrics, diagrams and evidence are only published once the project is Done
> (the Definition of Done is in `AGENTS.md`, Section 4.7). Progress is tracked in `PROGRESS.md`.
