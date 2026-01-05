# Boot

The **Boot** menu provides options for installing the system bootloader and managing boot configuration files.  
This section directly affects system startup behavior and should be used with caution.

The **Boot** menu is located under:

**Settings → Hardware → Boot**

Example:

<img width="1893" height="1124" alt="image" src="https://github.com/user-attachments/assets/38a0080a-cc70-43a3-8c17-08092908f43b" />

---

## Boot Options

### Install to Disk

Installs the system bootloader to a selected disk.

When clicking **Install to Disk**, an input form is displayed with the following options:

---

#### Device

Defines the target device where the bootloader will be installed.

**Notes:**
- Select the correct disk carefully
- Installing the bootloader may overwrite existing boot data

---

#### Filesystem

Defines the filesystem used for the boot installation.

**Notes:**
- Must be compatible with the selected device
- Existing data on the selected filesystem may be affected

---

#### Extra Partition

Optionally enables the creation or use of an additional partition.

**Options:**
- Enable
- Disable

**Use cases:**
- Separate boot-related data
- Custom partition layouts
- Advanced boot configurations

**Warning:**  
Incorrect partitioning may render the system unbootable.

---

### Edit `grub.cfg`

Opens an editor for the GRUB configuration file:

`/boot/grub/grub.cfg`

**Purpose:**
- Modify boot parameters
- Adjust kernel options
- Change boot behavior

**Important Warning:**
- This file is critical for system startup
- Incorrect changes can prevent the system from booting

**Recommendation:**
Only edit `grub.cfg` if you fully understand GRUB configuration and recovery procedures.

---

## Best Practices

- Verify the target device before installing the bootloader
- Backup important data before making boot-related changes
- Avoid manual edits to `grub.cfg` unless absolutely necessary
- Keep recovery media available when modifying boot settings

---

## Summary

The Boot menu allows low-level control over system startup configuration.

**Key points:**
- Install the bootloader to a selected disk and filesystem
- Optionally configure an extra partition
- Manually edit the GRUB configuration file if required
- Misconfiguration can affect system bootability

Use this section carefully and only when necessary.
