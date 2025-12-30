# Start the First Container

Before running applications in MOS, the Docker service must be configured and enabled.  
Containers can then be deployed either manually through the Docker section or via the MOS Hub.

MOS provides **two different ways** to start containers:
- **Docker** – manual container configuration
- **MOS Hub** – template-based container deployment (app store style)

---

## Docker Service Configuration

Before creating any containers, the Docker service must be configured.

Navigate to:

**Docker → Docker Service**

Example:


<img width="2546" height="1272" alt="image" src="https://github.com/user-attachments/assets/6d32f063-dc3d-4d49-9dc2-fb80f3a41822" />


---

### Docker Service

Enables or disables the Docker engine.

**Required:**  
Docker must be enabled before containers can be created.

---

### Directory

Defines where Docker stores internal data such as images and layers.

**Example:**

`/mnt/main/system/docker`

This directory should be located on a fast and reliable storage pool.

---

### AppData

Defines the base path for persistent container configuration data.

**Example:**

`/mnt/main/appdata`

This location is critical for container persistence and should be backed up.

---

### Filesystem

Defines the Docker storage driver filesystem.

**Default:**
- `overlay2`

This is the recommended and most stable option.

---

### Docker Network Mode

Defines how Docker networking is handled.

Common options:
- `ipvlan`
- `macvlan`
- `bridge`

Choose a mode that matches your network setup and container requirements.

---

### Start Wait

Defines the delay (in seconds) before Docker starts during system boot.

**Example:**

`30`

Useful when storage pools or network interfaces need additional time to become available.

<img width="514" height="369" alt="image" src="https://github.com/user-attachments/assets/6c2a18fe-3117-47c4-9b4e-aef2965d47d3" />

---

### Update Check

Enables automatic checks for container image updates.

---

### Auto Update

Automatically updates containers based on the configured schedule.

**Note:**  
Use with caution in production environments.

---

## Docker Overview Page

Navigate to:

**Docker**

This page lists all configured containers and provides an overview of:
- Container name and state
- Image
- Exposed ports
- IP address
- Network mode
- Autostart status


Example:

<img width="2546" height="705" alt="image" src="https://github.com/user-attachments/assets/1ae65d10-1209-45f4-b535-41aaad9d45f0" />


---

## Docker Compose

Navigate to:

**Docker → Docker Compose**

This allows deploying one or multiple containers using a Docker Compose YAML definition.

Available fields:
- **Stack Name**
- **Compose YAML**
- **Environment Variables**
- **Icon URL**
- **Web UI URL**

Docker Compose is recommended for complex multi-container applications.

---

## Docker Compose Stacks

Containers deployed using Docker Compose are displayed as a **stack** in the Docker overview.

A stack represents a group of containers that belong together and are managed as a single unit.

**Example:**
- `immich-compose` (4/4 started)

<img width="1939" height="167" alt="image" src="https://github.com/user-attachments/assets/603ea886-809d-48da-9604-bab40208bbb0" />

The stack header shows:
- Stack name
- Number of running containers
- Overall stack state

---

## Expanding Docker Stacks

Docker Compose stacks can be expanded to show the individual containers inside the stack.

Each container within a stack:
- Has its own state
- Can be monitored individually
- Shares the same Compose configuration

This allows visibility into complex applications while keeping the overview clean.

Example:

<img width="1947" height="384" alt="image" src="https://github.com/user-attachments/assets/ec6a3c8c-1a91-45ac-82d2-d4250ce9bea6" />

---

### Stack Actions

Clicking the stack menu provides the following actions:

- **Start Stack**  
  Starts all containers in the stack.

- **Stop Stack**  
  Stops all containers in the stack.

- **Restart Stack**  
  Restarts all containers in the stack.

- **Edit Stack**  
  Opens the Docker Compose configuration for editing.

- **Remove Stack**  
  Removes the entire stack and all associated containers.

- **Pull Stack Images**  
  Pulls the latest images for all containers in the stack.

Stack actions always apply to **all containers within the stack**.

---

## Docker Action Menu

The action menu (three-dot button) provides additional Docker management features.

Available actions:

- **Add container**  
  Create a new container manually.

- **Docker Compose**  
  Deploy containers using a Docker Compose YAML file.

- **Create Docker group**  
  Organize containers into logical groups.

- **Set Wait Times**  
  Define startup delays for individual containers.

- **Unused Docker Images**  
  View and remove unused container images.

- **Check for Updates**  
  Manually check for available image updates.

- **Update All**  
  Update all containers at once.


Example:

<img width="265" height="436" alt="image" src="https://github.com/user-attachments/assets/c0aa7783-dfbd-408c-b992-450ab1bdc562" />

---

## Container Context Menu

Each individual container provides a context menu with management actions.

Available actions:

- **Web UI**  
  Opens the container’s web interface (if configured).

- **Terminal**  
  Opens an interactive shell inside the container.

- **Stop**  
  Gracefully stops the container.

- **Restart**  
  Restarts the container.

- **Kill**  
  Immediately stops the container without graceful shutdown.

- **Edit**  
  Opens the container configuration for editing.

- **Logs**  
  Displays the container logs.

- **Force Update**  
  Pulls the latest image and recreates the container.

- **Delete**  
  Removes the container and its configuration.

These actions apply only to the selected container.

Example:

<img width="175" height="457" alt="image" src="https://github.com/user-attachments/assets/a160f5d9-7f88-4545-b771-d1efa9f6edff" />


---

## Creating a Docker Container (Manual)

Navigate to:

**Docker → Add container**

---

### Basic Configuration Fields

- **Template**  
  Optional predefined template.

- **Name**  
  Unique container name.

- **Repository**  
  Docker image repository (for example: `lscr.io/linuxserver/code-server`).

- **Network**  
  Docker network to attach the container to.

- **Custom IP**  
  Optional static IP (depending on network mode).

- **Default Shell**  
  Shell used for interactive container access.

- **GPU**  
  Assign GPU resources if supported.

- **Privileged**  
  Grants extended system permissions to the container.  
  Use only if required.

---

### Additional Configuration

- **Paths**  
  Map host directories to container paths.

- **Ports**  
  Expose container ports to the host.

- **Devices**  
  Pass through host devices.

- **Variables**  
  Environment variables used by the container.

---

### Web UI URL

Optional shortcut link to the container web interface.

---

### Icon

Defines the container icon shown in the UI.

Icons can be configured using **Material Design Icons (MDI)** identifiers.

**Example:**
`mdi-vpn`

---

## Docker Groups

Navigate to:

**Docker → Create Docker group**

Docker groups allow logical grouping of containers for better organization.

Configuration options:
- **Group Name**
- **Icon** (MDI identifier)
- **Select Containers**

---

## Autostart Behavior

Autostart behavior differs depending on how containers are deployed.

### Docker Compose Stacks
- Autostart is controlled at the **stack level**
- Individual containers inherit the stack behavior

### Single Containers
- Autostart can be enabled or disabled per container

**Recommendation:**
Use stack-level autostart for multi-container applications to ensure proper startup order.

---

## MOS Hub

The **MOS Hub** provides a template-based container deployment experience similar to an app store.

Features:
- Preconfigured Docker templates
- Simplified setup process
- Automatic path, port, and variable configuration

MOS Hub is the recommended starting point for new users.

Example:

<img width="2547" height="1273" alt="image" src="https://github.com/user-attachments/assets/f3763f4c-4b50-47e6-ba3c-7a1689830987" />


---

## Summary

To start your first container in MOS:

1. Configure and enable the **Docker Service**
2. Choose between:
   - **MOS Hub** for easy template-based deployment
   - **Docker** for manual or advanced configuration
3. Verify storage paths and network settings
4. Start and manage containers from the Docker overview

Once Docker is configured, MOS becomes a powerful platform for running applications and services.
