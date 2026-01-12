# MOS Docs

Welcome to the official documentation of **MOS**.

MOS is a modern, modular server operating system focused on **simplicity**, **performance**, and **full local control**.
It provides an intuitive WebUI for managing storage, containers, virtual machines, networking, and hardware — without hiding complexity from advanced users.

MOS is designed for:
- Home servers and homelabs
- Small to medium self-hosted environments
- Users who want full control without cloud dependencies

This documentation guides you from first installation to advanced system configuration and migration scenarios.

---

## 🔒 Privacy & Local-First Design

MOS is **local-first by design**.

It does **not collect telemetry**, **usage statistics**, or **analytics**, and it does **not phone home**.
Network connections are only made when explicitly triggered by the user (for example, during system or kernel updates).

Your system, your data, your control.

---

# 🏠 Introduction MOS

- [Overview of the OS](Introduction/Overview_of_the_OS.md)

# 📦 Installation

- [Releases / Changelog](https://github.com/ich777/mos-releases/releases)

- [Create Bootable Media](Installation/Create_Bootable_Media.md)

# 🧭 Quick Start

- [WebUI Overview](Quick_Start/WebUI_Overview.md)

- [Start Network Configuration](Quick_Start/Start_Network_Configuration.md)

- [Create a Storage Pool](Quick_Start/Create_a_Storage_Pool.md)

- [Start the First Container](Quick_Start/Start_the_First_Container.md)

- Create the First VM

- [Create the First Shares](Quick_Start/Create_the_First_Shares.md)

# 🚀 System Startup

- [Pre-Start Script](https://github.com/ich777/mos-docs/blob/master/System_Startup/Pre-Start_Script.md)

- [Post-Start Script](https://github.com/ich777/mos-docs/blob/master/System_Startup/Post-Start_Script.md)

- [Pool Mount Scripts](https://github.com/ich777/mos-docs/blob/master/System_Startup/Pool_Mount_Scripts.md)

# ⚙️ System Management

## 🔁 System Updates

- OS Updates

- Rollback Procedures

## 💻 System Configuration

- [System Settings](System_Management/System.md)

- [Cron Jobs](System_Management/Cron_Jobs.md)

- [Reading Logs](System_Management/Logs.md)

- [MOS HUB](System_Management/MOS_Hub_Settings.md)

## 🗂 Virtualization

- [Docker Service](System_Management/Docker_service.md)

- [LXC Service](System_Management/LXC_Service.md)
  
- [VM Service](System_Management/VM_service.md)

## 🌐 Network

- [Basic Configuration (DHCP, Static)](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_Network_Configuration.md#network-interfaces)

- [Interfaces & Bonds](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_Network_Configuration.md#type)

- Remote Access (SSH, WebUI)

## 🌐 Hardware

- [Drivers](System_Management/Drivers.md)

- [Boot](System_Management/Boot.md)

- [Sensors](https://github.com/ich777/mos-docs/blob/master/System_Management/Sensors.md)

# 💾 Storage

## 📚 Storage Pools

- [Creating Pools](Quick_Start/Create_a_Storage_Pool.md)

## 🧲 Filesystems

- [Supported Filesystems](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Create_a_Storage_Pool.md#filesystem)

## 📂 Shares

- SMB/NFS Configuration

- Access Control

- Attributes

# 🐳 Container

## Docker

- [Enable Docker](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_the_First_Container.md#docker-service-configuration)

- [Manage Images & Containers](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_the_First_Container.md#docker-action-menu)

- Logs & Monitoring

- Networking for Containers

- [Volumes & Persistence](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_the_First_Container.md#appdata)

- [Compose / Stack Management](https://github.com/ich777/mos-docs/blob/master/Quick_Start/Start_the_First_Container.md#docker-compose)

## LXC

- Create LXC Containers

- Snapshots & Backups

- Networking & Storage for LXC

# 🖥️ Virtual Machines

- Create VMs

- CPU & RAM Configuration

- Virtual Networks

- Virtual Disks

- GPU Passthrough

- USB Passthrough

- Snapshots

# 👤 User & Access Management

- [Create Users](User_&_Access_Management/Create_Users.md)

- Permissions & Roles

# 🔌 API

- [API Overview](API/API_Overview.md)

# 📖 Advanced Usage

- [macvlan Host Shim (shim_bridge.sh)](https://github.com/ich777/mos-docs/blob/master/Advanced_Usage/macvlan_Host_Shim.md#macvlan-host-shim-shim_bridgesh)

- [Disable MD5 Verification](https://github.com/ich777/mos-docs/blob/master/Advanced_Usage/Disable_MD5_Verification.md)

- [Early Boot Script (boot.sh)]

# 🔄 Migration

- Import Data from Other Systems

- Docker Import

- LXC Import

- VM Import

- Pool Migration

- Import Network Configuration

# 📜 Changelog

- [Releases](https://github.com/ich777/mos-releases/releases)
