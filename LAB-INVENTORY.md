# Lab inventory (no passwords here)

> **Mode A (Advisor) is active — Mode B has not been granted.** Nothing in this table is
> reachable by an agent yet. Values below are the planned lab design from
> `projects/p01-core-infrastructure/docs/00-design.md`; update them as the lab is built.

| Host | Role | OS | VLAN | IP | Project | In scope (Mode B) |
|---|---|---|---|---|---|---|
| HOST01 | Hypervisor (Proxmox VE or Hyper-V) | Proxmox VE / Windows 11 Pro | — | 192.168.10.5 (mgmt) | P1+ | not yet — approval each time |
| FW01 | HQ firewall / VPN / DHCP relay | OPNsense | trunk | 192.168.10.1 | P1, P6 | not yet — read-only unless approved |
| DC01 | Domain controller, DNS, DHCP (primary) | Windows Server 2025 | 10 SERVERS | 192.168.10.10 | P1+ | not yet |
| DC02 | Domain controller, DNS, DHCP (failover partner) | Windows Server 2025 | 10 SERVERS | 192.168.10.11 | P1+ | not yet |
| FS01 | File services (DFS-N, FSRM, VSS); NPS role in P6 | Windows Server 2025 | 10 SERVERS | 192.168.10.20 | P1, P2, P6 | not yet |
| LNX01 | Linux app server (AD-joined) | Ubuntu Server 24.04 | 10 SERVERS | 192.168.10.30 | P1, P5, P7 | not yet |
| OPS01 | GLPI / BookStack / Uptime Kuma (docker) | Ubuntu Server 24.04 | 10 SERVERS | 192.168.10.40 | P5, P7, P9 | not yet |
| SIEM01 | Wazuh manager + indexer + dashboard | Ubuntu Server 24.04 | 10 SERVERS | 192.168.10.41 | P7 | not yet |
| BKP01 | Backup repository (PBS/Veeam, restic, MinIO); **not domain-joined** | Ubuntu Server 24.04 | 10 → 40 MGMT (P6) | 192.168.10.42 | P8 | not yet |
| CA01 | Internal Enterprise CA (AD CS), optional small VM | Windows Server 2025 | 10 SERVERS | 192.168.10.43 | P6 | not yet |
| WS01 | User workstation | Windows 11 Enterprise eval | 10 → 30 USERS-HQ (P6) | DHCP | P1+ | not yet |
| WS02 | Admin workstation / Tier 0 PAW | Windows 11 Enterprise eval | 10 → 40 MGMT (P6) | DHCP | P3, P4, P6 | not yet |
| FW02 | Warehouse firewall (site 2) | OPNsense | 20 WAREHOUSE | 192.168.20.1 | P6 | not yet |

**Domain:** `ad.halden.internal` · **NetBIOS:** HALDEN · **Functional level:** Windows Server 2025
**Lab marker file on Linux hosts:** `/etc/halden-lab` (scripts refuse to run without it)
**Guard for Windows scripts:** `(Get-ADDomain).DNSRoot -eq 'ad.halden.internal'`

## Network zones (target, after P6)

| VLAN | Zone | Subnet | DHCP |
|---|---|---|---|
| 10 | SERVERS | 192.168.10.0/24 | Static |
| 20 | WAREHOUSE (site 2) | 192.168.20.0/24 | Windows DHCP via relay |
| 30 | USERS-HQ | 192.168.30.0/24 | Windows DHCP via relay |
| 40 | MGMT | 192.168.40.0/24 | Static |
| 50 | GUEST | 192.168.50.0/24 | OPNsense (internet only) |
| 60 | IOT | 192.168.60.0/24 | OPNsense |
| — | VPN-USERS | 192.168.70.0/24 | VPN pool |

Credentials live in the owner's password manager, never in this repository.
