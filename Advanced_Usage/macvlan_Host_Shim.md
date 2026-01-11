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

## ⚙️ Script

```
#!/bin/bash

# Get interface name depending if bridged or not
bridged=$(jq -r '.interfaces[] | select(.name == "eth0") | .type' /boot/config/network.json)
if [ "$bridged" == "bridged" ] ; then
  interface_name="br0"
else
  interface_name="eth0"
fi

# Set shim name
shim_name="shim-${interface_name}"

# Get host IP
host_ip=$(ip -o -f inet addr show ${interface_name} | awk '{print $4}' | cut -d/ -f1 | head -1)

# Get Docker network mode
docker_net_mode=$(jq -r '.docker_net.mode' /boot/config/docker.json)
if [ "$docker_net_mode" == "ipvlan" ] ; then
  ip_link_add="ipvlan mode l2"
else
  ip_link_add="macvlan mode bridge"
fi

# Set up shim if not found
if ! ip link | grep "${shim_name}" &> /dev/null ; then
   echo "No $shim_name found, creating it now"
   ip link add "$shim_name" link $interface_name type $ip_link_add
   ip link set "$shim_name" up
   ip route add ${host_ip%.*}.0/25 dev "$shim_name"
   ip route add ${host_ip%.*}.128/25 dev "$shim_name"
else
   echo "$shim_name network already found, nothing todo"
fi

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
