# WebUI Overview

The MOS web interface provides a centralized management dashboard for monitoring system health, managing storage, and operating services such as Docker, LXC, and virtual machines.

The interface is divided into three main areas:

- **Top Bar** – Global status and quick access  
- **Left Navigation Menu** – Main system sections  
- **Main Content Area** – Detailed views and controls  

---

Example:

<img width="2546" height="1271" alt="image" src="https://github.com/user-attachments/assets/997205a6-e26e-41a9-aaf4-fb0ac6b8adc0" />

---

## Top Bar

The top bar is always visible and provides quick access to global functions.

- **MOS Logo**  
  Returns you to the Dashboard from any page.

- **Theme / Display Controls**  
  Allows switching the UI appearance (for example light or dark mode, if available).

- **Notifications**  
  Displays system alerts, warnings, and important events.

---

## Left Navigation Menu

The navigation menu on the left provides access to all major system components.

### Dashboard
The main system overview page.

Displays real-time information about:
- Operating system and MOS version
- CPU load and per-core utilization
- Memory usage
- Network traffic
- Storage pool usage
- Disk activity and temperatures

This is the first place to check overall system health.

---

### Disks
Lists all detected physical storage devices.

Here you can:
- View disk health and temperatures
- Identify devices

---

### Pools
Used to create and manage storage pools.

From this section you can:
- Create new pools
- Assign disks to pools
- Monitor pool usage and status

Pools are the foundation for shares, containers, and virtual machines.

---

### Shares
Manages shared folders provided by the system.

Typical use cases:
- Network shares (SMB / NFS)
- Media storage
- Backup destinations

Shares are always backed by a storage pool.

---

### MOS Hub
Central place for Docker Templates

---

### Docker
Manages Docker containers and images.

From this section you can:
- Deploy containers
- Start, stop, and update services
- Monitor container resource usage

Common use cases include media servers, download services, and automation tools.

---

### LXC
Manages Linux Containers (LXC).

Used for:
- Lightweight system containers
- Isolated service environments
- Advanced Linux-based workloads

LXC containers behave more like small virtual systems compared to Docker containers.

---

### VMs
Manages full virtual machines.

Here you can:
- Create and manage virtual machines
- Assign CPU, memory, and storage
- Run complete operating systems

Best suited for workloads that require a full OS.

---

### Users
User and permission management.

Allows you to:
- Create and manage user accounts
- Assign access rights
- Control permissions for shares and services

---

### Web Terminal
Provides terminal access directly through the browser.

Useful for:
- Advanced configuration
- Troubleshooting
- Manual system administration

---

### User Settings
Personal settings for the currently logged-in user.

Includes:
- Interface preferences
- Account-related options

---

### Settings
Global system configuration.

This section is used to configure:
- Network settings
- System behavior
- Security and access control
- Advanced MOS features

---

### Logout
Ends the current session and returns to the login screen.

---

## Dashboard Panels Overview

The Dashboard displays multiple information panels providing a real-time system overview.

- **OS Panel**  
  Displays operating system details, MOS version, kernel, uptime, and hostname.

- **Processor Panel**  
  Shows CPU model, architecture, temperature, load, and per-core utilization.

- **Memory Panel**  
  Visual overview of RAM usage, including system processes, Docker, LXC, cache, and free memory.

- **Network Panel**  
  Displays real-time network traffic for active interfaces.

- **Pools Panel**  
  Shows storage pool usage and capacity.

- **Disks Panel**  
  Displays disk activity and temperature for active devices.

---

## Summary

The MOS WebUI is designed to provide:
- Immediate visibility into system health
- Clear separation of storage, services, and virtualization
- Scalability from simple setups to advanced server configurations

For most users, daily interaction will focus on:

**Dashboard, Pools, Shares, Docker, and Settings**
