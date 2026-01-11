# Network Host Shim (shim_bridge.sh)

This script creates a persistent **host shim interface** to enable communication between the MOS host and container networks using **macvlan** or **ipvlan**.

It automatically adapts to:
- Bridged or non-bridged network setups
- macvlan or ipvlan Docker network modes
- The active host interface and IP address

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

## 🧠 Background

Linux container networking modes such as **macvlan** and **ipvlan** isolate containers from the host by design.

As a result:
- Containers can access the LAN
- The host cannot communicate with containers directly

This script creates a dedicated shim interface on the host to restore host ↔ container connectivity in a controlled and safe way.

---

## 🔧 What This Script Does

- Detects whether the host is using a bridged or non-bridged network
- Automatically selects `br0` or `eth0` as the parent interface
- Detects the active host IP address
- Detects Docker network mode (`macvlan` or `ipvlan`)
- Creates the appropriate shim interface type
- Adds safe `/25` routing rules to avoid routing loops
- Recreates the setup automatically after reboot

---

## ⚙️ Automatic Configuration Logic

### Network Interface Detection

The script reads the MOS network configuration:

- If `eth0` is configured as **bridged** → `br0` is used
- Otherwise → `eth0` is used directly

This allows the same script to work on different network layouts without manual changes.

---

### Docker Network Mode Detection

The Docker configuration is evaluated automatically:

- `ipvlan` → creates an **ipvlan l2** shim
- otherwise → creates a **macvlan bridge** shim

This ensures compatibility with both Docker network modes.

---

## 🔁 Shim Interface Naming

The shim interface name is generated dynamically:

Examples:
```
shim-br0

shim-eth0
```

---

## 🌐 IP Address & Routing

The script automatically:

- Detects the host IP address

- Derives the subnet from the host IP

- Splits the subnet into two /25 ranges

Routing rules applied:

- <subnet>.0/25

- <subnet>.128/25

This prevents routing loops and ARP conflicts.

---

## 📜 Script Logic Overview

- Detect active host interface (br0 or eth0)

- Determine Docker network mode (macvlan or ipvlan)

- Generate shim interface name dynamically

- Detect host IP address

- Check if shim interface already exists

- Create shim interface if missing

- Bring the interface up

- Apply routing rules

- Skip setup if the shim already exists

---

## 🔁 Persistence via Cron Job

The shim interface is not persistent across reboots.
To ensure it is recreated automatically, the script must be executed at system startup.

### Cron Job Configuration

- Name: shim_bridge

- Schedule: @reboot

- Command:
```
bash /boot/optional/scripts/shim_bridge.sh
```

---

## 🖼️ Cron Job Configuration Screenshot

<img width="713" height="586" alt="image" src="https://github.com/user-attachments/assets/ee619a6b-12c2-43e5-8b39-994ded55e706" />

---

## ✅ Supported Use Cases

- Docker containers using macvlan networking

- Docker containers using ipvlan networking

- Host ↔ container communication

- Mixed bridged and non-bridged setups

---

## ⚠️ Notes & Best Practices

- This is an advanced networking feature

- Requires correct Docker and network configuration

- Not needed for standard bridge-only setups

- Always verify connectivity after reboot

---

## 🔍 Troubleshooting

Check if the shim interface exists:
```
ip link show shim-br0
```

Verify routing table:
```
ip route
```

## ✅ Summary

- Automatically adapts to MOS network configuration

- Works with bridged and non-bridged setups

- Supports macvlan and ipvlan transparently

- Ensures persistent host ↔ container connectivity
