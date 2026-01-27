# Testing MOS in a Virtual Machine

MOS can be tested easily inside a virtual machine.  
This is useful for evaluation, development, or getting familiar with the WebUI before installing MOS on physical hardware.

> **Note:**  
> MOS supports **UEFI boot only** by default.  
> Legacy BIOS / CSM boot is **not supported**.

---

### Virtual Machine Installation
```
mos_amd64.img.xz
```

- Intended for **virtual machines**
- Prebuilt disk image
- No manual partitioning required

---

## 🧰 Preparing the VM Image

### Extract the Image (Linux)

To extract the VM image, run:

```
unxz --decompress mos_amd64.img.xz
```

This will produce:

```
mos_amd64.img
```

---

## 🖥 Creating the Virtual Machine

You can use MOS with common hypervisors such as:

- KVM / QEMU

- Proxmox

- VMware

- VirtualBox (UEFI enabled)

### Recommended VM Settings

| Setting     | Value                        |
| ----------- | ---------------------------- |
| Firmware    | **UEFI**                     |
| CPU         | 4 cores or more              |
| Memory      | 8 GB recommended             |
| Network     | Bridged or NAT               |

---

## 🔌 Attaching the Image to the VM

The extracted image must be mounted as a USB device.

**Important**

- Do not attach the image as a regular virtual hard disk

- MOS expects the image to behave like a bootable USB stick

How this is done depends on the hypervisor:

- **KVM / QEMU / Proxmox**

  Attach the image as a USB storage device

- **VMware / VirtualBox**

  Use USB passthrough or raw image support with UEFI enabled

> The image already contains everything needed to boot MOS.

---

## ▶️ First Boot

- Start the virtual machine

- Ensure it boots via UEFI

- MOS will boot automatically

- Obtain the IP address from the VM console or DHCP server

- Open the MOS WebUI in your browser:

```
http://<mos-ip-address>
```

---

## ✅ What to Expect

- Full MOS WebUI available

- Pools, Docker, LXC and VM features can be explored

- Ideal for testing workflows and configuration

---

## ⚠️ Limitations in Virtual Machines

- Hardware-specific features may be unavailable

- GPU or PCI passthrough depends on the hypervisor

- Not intended for production workloads

---

🧪 Summary

- MOS can be tested easily in a VM

- Use mos_amd64.img.xz

- Extract the image and attach it as a USB device

- UEFI boot is mandatory

- Ideal for evaluation and development
