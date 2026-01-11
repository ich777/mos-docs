# macvlan Host Shim (shim_bridge.sh)

This script creates a persistent macvlan **shim interface** on the host system.
It enables communication between the host and macvlan-based containers, which is not possible by default due to Linux kernel limitations.

---

## 🧠 Background

Linux macvlan interfaces are isolated from their parent interface by design.
As a result:

- Containers connected via macvlan **can reach the LAN**
- The host **cannot communicate with macvlan containers**

This script solves that limitation by creating a dedicated macvlan interface on the host itself.

---

## 🔧 What This Script Does

- Creates a macvlan interface (`shim-br0`) linked to `br0`
- Brings the interface up automatically
- Adds dedicated routing rules for the local LAN
- Prevents routing loops by splitting the LAN into two `/25` networks
- Recreates the setup automatically after every reboot

---

## ⚙️ Script Configuration

```
bash
shim_name="shim-br0"           # Name of the macvlan shim interface
lan_mask="192.168.1.0"         # First half of the LAN subnet
lan_route="192.168.1.128"      # Second half of the LAN subnet
```
---

## ⚠️ Important:
Adjust the IP ranges to match your local network layout.
Incorrect subnet definitions may result in routing issues.

---

## 🚀 Script Logic Overview

- Checks if the shim interface already exists

- Creates a macvlan interface on br0 if missing

- Activates the interface

- Adds routing rules for both LAN subnets

- Skips creation if the interface is already present

---

## 🔁 Persistence via Cron Job

The macvlan shim interface is not persistent across reboots.
To ensure the interface is recreated automatically, the script is executed at system startup using a cron job.

### Cron Job Configuration

- Name: shim_bridge

- Schedule: @reboot

Command: `bash /boot/optional/scripts/shim_bridge.sh`

---

## 🖼️ Cron Job Configuration (WebUI)

<img width="713" height="586" alt="image" src="https://github.com/user-attachments/assets/c0c34823-bc7a-44a2-aa90-4c63cba84f64" />

---

## ✅ Typical Use Cases

- Docker containers using macvlan networking

- Host ↔ container communication on bridged networks

---

## ⚠️ Notes & Warnings

- This is an advanced networking setup

- Not required when using ipvlan

- Always document custom IP ranges and routing rules

- Verify connectivity after reboot
