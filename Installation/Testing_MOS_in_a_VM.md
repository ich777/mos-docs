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

- **KVM / QEMU**

  Attach the image as a USB storage device

- **VMware / VirtualBox**

  Use USB passthrough or raw image support with UEFI enabled

> The image already contains everything needed to boot MOS.

---

## 🧱 Proxmox VE Configuration

The following steps describe how to run the MOS test image inside Proxmox VE.

> ⚠️ Important
> 
> MOS requires UEFI boot and Secure Boot must be disabled.

---

### 1️⃣ Create the VM

Create a new VM with the following settings:

| Setting	    | Value |
| ----------- | ---------------------------- |
| BIOS	      | OVMF (UEFI) |
| Display	    | VirtIO-GPU |
| Secure Boot | ❌ Disabled |
| Machine	q35 | (recommended) |
| Disk	      | Can be empty |

---

### 2️⃣ Disable Secure Boot

Proxmox enables Secure Boot by default when using OVMF.

You must disable it using one of the following methods:

#### Option A (Recommended)

During VM creation:

- Make sure “Pre-enrolled keys” is NOT checked

---

#### Option B

If Secure Boot is still active:

- Boot the VM

- Enter the UEFI Setup

- Disable Secure Boot

- Save and exit

---

### 3️⃣ Upload the MOS Image

Upload ```mos_amd64.img``` to:

```
/var/lib/vz/template/iso/
```

---

### 4️⃣ Move the Image

From the Proxmox host shell:

```
cp /var/lib/vz/template/iso/mos_amd64.img /var/lib/vz/images/mos_amd64.img
```

---

### 5️⃣ Modify the VM Configuration

Edit the VM config:

```
nano /etc/pve/qemu-server/<vmid>.conf
```

Add:

```
usb0: spice,usb3=1
args: -drive file=/var/lib/vz/images/mos_amd64.img,format=raw,if=none,id=usbdisk -device usb-storage,drive=usbdisk
```
This attaches the MOS image as a USB storage device.

---

### ▶️ Start the VM

Start the VM and MOS will boot automatically.

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
