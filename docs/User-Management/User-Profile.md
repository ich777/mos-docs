---
sidebar_label: ⚙️ User Profile
sidebar_position: 2
---

# ⚙️ User Profile

The User Profile menu allows you to customize your personal WebUI experience and interface preferences.

Navigate to:

> **User Settings → User Profile**

Example:

![User Profile](/img/users/User_Profile.png)

---

## 🌓 Dark Mode

Toggle between light and dark interface themes.

- **Enabled:** Dark theme with darker backgrounds and reduced eye strain
- **Disabled:** Light theme with bright backgrounds

---

## 🌐 Language

Select the interface language for the WebUI.

Available languages depend on the system configuration. The default language is English.

---

## 📊 Byte Unit

Defines how storage sizes are displayed throughout the interface.

Available options:

| Option | Description |
|--------|-------------|
| **Decimal** | Uses decimal prefixes (KB = 1000 bytes, MB = 1000 KB, etc.) |
| **Binary** | Uses binary prefixes (KiB = 1024 bytes, MiB = 1024 KiB, etc.) |

:::note
- Decimal is more intuitive for most users (matches hard drive manufacturer specifications)
- Binary is technically more accurate for computer systems
:::

---

## ⏱️ UI Session Expiry Time (days)

Defines how long your WebUI session remains active before requiring re-authentication.

- **Default:** 14 days
- **Range:** Typically 1-30 days

:::warning Security Note
Shorter session expiry times increase security by requiring more frequent re-authentication. Longer times improve convenience but may pose a security risk if you leave your browser unattended.
:::

---

## 👁️ Hide Inactive Menus

Controls the visibility of menu items for features that are not currently active or configured.

- **Enabled:** Menu items for inactive features are hidden from the left navigation
- **Disabled:** All menu items are shown, even if the corresponding feature is not active

:::tip
- **Enable** this option for a cleaner interface that only shows relevant menu items
- **Disable** this option to see all available features and explore the full interface
:::

---

## 📁 Group Menus

Organizes the left navigation menu into collapsible groups.

- **Enabled:** Menu items are grouped into categories (Storage, Network Access, Virtualization, MOS Tools, etc.)
- **Disabled:** All menu items are displayed in a flat list

:::tip
Grouped menus help organize large systems with many features enabled.
:::

---

## 🎨 Color Scheme

Select a custom accent color for the WebUI interface.

The color scheme affects:
- Active menu highlights
- Button accents
- Chart and graph colors
- Selection indicators

Choose from the available color palette to personalize your interface.

---

## ✅ Summary

The User Profile settings allow you to customize your MOS experience:

| Setting | Purpose |
|---------|---------|
| **Dark Mode** | Switch between light and dark themes |
| **Language** | Set interface language |
| **Byte Unit** | Choose decimal or binary size display |
| **Session Expiry** | Control session timeout duration |
| **Hide Inactive Menus** | Show/hide menus for inactive features |
| **Group Menus** | Organize navigation into groups |
| **Color Scheme** | Personalize interface accent color |

These settings are stored per-user and do not affect other users on the system.

---

_Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information._
