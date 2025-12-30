# Start Network Configuration

Initial network configuration in MOS is performed through the web interface under:

**Settings → Network Interfaces**

This section defines how the system connects to the network and how services such as Docker, LXC, VMs, and Shares are exposed.

Example:

<img width="2545" height="769" alt="image" src="https://github.com/user-attachments/assets/e9c356e7-71d9-4b3b-a5b7-b3144c4ba545" />


---

## Network Interfaces

The **Network Interfaces** page allows configuring physical and logical network interfaces used by the system.

Each interface can be configured individually and assigned a specific networking mode.

---

### Interface

Specifies the physical network interface.

**Example:**
- `eth0`

This is usually the primary Ethernet interface detected by the system.

---

### Type

Defines how the network interface is used by MOS.

The following interface types are available:

---

#### ethernet

Uses the physical network interface directly without creating a bridge.

**Characteristics:**
- Simple and minimal configuration
- Interface receives the IP address directly
- No virtual bridge is created

**Use cases:**
- Systems without Docker, LXC, or VMs
- Simple standalone servers
- Minimal network setups

**Limitations:**
- Not suitable for advanced container or VM networking
- Containers and virtual machines cannot be attached directly

---

#### bridged (recommended)

Creates a Linux bridge and attaches the physical interface to it.

**Characteristics:**
- The system and all services share the same network
- Containers and VMs appear as full devices on the LAN
- Required for advanced networking features

**Use cases:**
- Docker containers with custom networks
- LXC containers
- Virtual machines
- Most server setups

**Recommendation:**
This is the **default and recommended mode** for most installations.

---

#### bond

Combines multiple physical network interfaces into a single logical interface.

**Characteristics:**
- Increased redundancy and/or throughput
- Multiple NICs act as one interface
- Requires compatible switch configuration

**Use cases:**
- High availability setups
- Increased network bandwidth
- Multi-NIC servers

**Notes:**
- Switch-side configuration may be required (LACP or static bonding)
- Misconfiguration can lead to loss of network connectivity

---

## Type Selection Guide

| Scenario | Recommended Type |
|--------|------------------|
| Single NIC, Docker / VMs | `bridged` |
| Single NIC, no containers | `ethernet` |
| Multiple NICs, redundancy | `bond` |
| High-performance networking | `bond` |

### IPv4 DHCP

Enables or disables automatic IPv4 configuration via DHCP.

- **Enabled:**  
  IP address, gateway, and DNS are assigned automatically by the network.
- **Disabled:**  
  Static IPv4 configuration is required.

**Recommended:**  
Disable DHCP for servers and use a static IP address.

---

### IPv4 Address

Defines the static IPv4 address of the system.

**Example:**
- `192.168.11.254`

This address is used to access the MOS web interface and network services.

---

### IPv4 Gateway

Specifies the default gateway for outbound network traffic.

**Example:**
- `192.168.11.1`

This is typically the router IP address.

---

### IPv4 DNS (comma separated)

Defines DNS servers used for name resolution.

**Example:**
- `1.1.1.1, 1.0.0.1`

Multiple DNS servers can be specified, separated by commas.

---

### Enable IPv6

Enables or disables IPv6 support for the interface.

- **Enabled:**  
  System will accept and configure IPv6 addresses.
- **Disabled:**  
  IPv6 traffic is ignored.

**Note:**  
Only enable IPv6 if your network infrastructure fully supports it.

---

## Best Practices

- Use a **static IPv4 address** for servers
- Keep **bridged networking** enabled for container and VM support
- Configure reliable DNS servers
- Avoid changing network settings remotely without console access

---

## Summary

The Network Interfaces configuration defines how MOS connects to your network and how services are exposed.

Correct configuration is essential for:
- Web interface accessibility
- Container and VM networking
- Stable server operation
