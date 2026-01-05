# Driver

The **Driver** menu allows you to install and manage additional hardware driver packages.  
These drivers extend system functionality by enabling support for specific hardware components and features.

The **Driver** menu is located under:

**Settings → Hardware → Driver**

This section is intended for advanced hardware configuration.

Example:

<img width="1451" height="871" alt="image" src="https://github.com/user-attachments/assets/78030398-0179-4f30-bdd2-7bf7c1cc5d68" />

---

## Driver Management

### Install Driver

To install a new driver package, click the **Plus (+) icon**.

You will be prompted to define the following parameters:

---

### Driver

Defines the driver category or type.

**Examples:**
- `coral`
- `dvb`
- `nonraid`
- `nvidia`
- `sriov`

The available options depend on system compatibility and repository support.

---

### Name

Defines the specific driver package name.

**Examples:**
- `dvb-digital-services`
- `dvb-libreelec`
- `nvidia-driver`
- `nonraid-utils`

---

### Version

Defines the version of the selected driver package.

**Notes:**
- Available versions depend on the selected driver and repository
- Using the recommended or default version is advised unless a specific version is required

---

## Installed Drivers

All installed driver packages are displayed in a list.

For each installed driver, the following information is shown:
- Driver type
- Package name
- Version

---

### Remove Driver

Installed drivers can be removed from the system.

**Notes:**
- Removing a driver may disable related hardware or features
- A system reboot may be required after removal
- Ensure the driver is no longer in use before deleting it

---

## Best Practices

- Install only drivers required for your hardware
- Avoid unnecessary or experimental drivers on production systems
- Reboot the system after installing or removing drivers if prompted
- Keep track of installed driver versions for troubleshooting

---

## Summary

The Driver menu provides flexible management of additional hardware drivers.

**Key points:**
- Install drivers via the Plus (+) icon
- Select driver type, package name, and version
- View all installed drivers in one place
- Remove drivers when they are no longer needed

Proper driver management ensures optimal hardware compatibility and system stability.
