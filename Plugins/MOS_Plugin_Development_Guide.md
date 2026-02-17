# 📦 MOS Plugin Repository

This repository contains a plugin for **MOS**.
It explains how to create and configure your own MOS plugin, including the required project structure, configuration files, optional settings, functions, and build workflow.

---

## 📁 Repository Structure

A typical MOS plugin repository is structured as follows:

```
.
├── page/
│   ├── plugin.config.js
│   ├── index.html
│   └── src/
│       └── Plugin.vue
├── functions            # Optional: bash functions executed by MOS
├── settings.json        # Optional: plugin settings
├── .github/
│   └── workflows/
│       └── release.yml  # Example GitHub Actions workflow
└── README.md
```

---

## 🖼️ Required: Plugin Page (Vue)

Every MOS plugin must provide a Vue-based configuration page, or at minimum a basic page.

### `page/plugin.config.js`

This file defines the plugin metadata and **must be configured**:

```js
export default {
  name: "pluginname",              // Folder name used by MOS (no spaces!)
  displayName: "Plugin Name",      // Human-readable plugin name
  description: "Short plugin description",
  icon: "",                        // "" if image.png exists, or e.g. "mdi-nas"
  author: "Author Name or GitHub",
  homepage: "https://example.com"
}
```

| Field | Description |
|---|---|
| `name` | Internal plugin name and folder name on MOS. Must not contain spaces. |
| `displayName` | Display name shown in the MOS UI. |
| `description` | Short description of what the plugin does. |
| `icon` | Use `""` if you provide a custom `image.png`, or specify an MDI icon (e.g. `mdi-nas`). |
| `author` | Plugin author — real name or GitHub handle. |
| `homepage` | Project or plugin homepage URL. |

---

### `page/index.html`

Set the browser page title for your plugin:

```html
<title>DVB Driver Plugin</title>
```

This title is displayed as the page title in the browser.

---

### `page/src/Plugin.vue`

The main Vue component must be named exactly **`Plugin.vue`**.

This file contains the UI and frontend logic of the plugin.

> ⚠️ `Plugin.vue` is mandatory and must not be renamed.

---

## ⚙️ Optional: Plugin Settings

Plugins can optionally provide a `settings.json` file in the root of the repository.

**Example:**

```json
{
  "driver": "libreelec"
}
```

### Settings API

Settings can be accessed via the MOS API:

```
/mos/plugins/settings/{pluginName}
```

`{pluginName}` must match the `name` field from `plugin.config.js`.

| Method | Description |
|---|---|
| `GET` | Retrieve settings |
| `POST` | Update settings |

---

## 🛠️ Optional: Plugin Functions

Plugins may provide a `functions` file containing bash functions.

### Default Functions Executed by MOS

If present, MOS will automatically call the following functions:

| Function | Trigger |
|---|---|
| `install` | Executed when the plugin is installed |
| `uninstall` | Executed when the plugin is uninstalled |
| `plugin_update` | Executed when the plugin is updated |
| `mos_start` | Executed when MOS starts |
| `mos_osupdate` | Executed during an OS or kernel update |

### Custom Functions

You can define additional custom bash functions inside the `functions` file.
These can be executed using the MOS API.

**Endpoint:** `POST /mos/plugins/executefunction`

```json
{
  "plugin": "string",
  "function": "string"
}
```

| Field | Description |
|---|---|
| `plugin` | Value of `name` from `plugin.config.js` |
| `function` | Name of the function inside the `functions` file |

---

## ▶️ Executing Binaries

Plugins can execute binaries using the MOS API endpoint:

```
/mos/plugins/query
```

### ⚠️ Execution Rules

- Only binaries located in `/usr/bin/plugins/` are allowed to be executed
- The plugin must provide the binary itself
- Symlinks to other binaries are allowed
- Executing binaries from any other location is not permitted

### API Request

```json
{
  "command": "nvidia-smi",
  "args": [
    "-q",
    "-x"
  ],
  "timeout": 5,
  "parse_json": false
}
```

| Field | Description |
|---|---|
| `command` | Name of the executable located in `/usr/bin/plugins/` |
| `args` | Array of command-line arguments passed to the executable |
| `timeout` | Maximum execution time in seconds before the command is terminated |
| `parse_json` | `true` → MOS tries to parse the output as JSON / `false` → raw output is returned |

> 💡 Always set a proper `timeout` value to avoid blocking behavior. Output is returned directly by the API.

---

## 📡 Driver Information Endpoint

Plugins that provide kernel drivers can query driver-related information using the following endpoint.

> ⚠️ This endpoint is **only available** if the plugin template is configured with `driver: true`.

**Endpoint:** `GET /mos/plugins/driver/{pluginName}`

`{pluginName}` must match the `name` field from `plugin.config.js`.

This endpoint returns information about the currently available or installed driver package for the given plugin and kernel version. It is typically used by driver plugins to detect the active kernel version, locate the correct driver package, and determine installation paths.

**Response Example:**

```json
{
  "plugin": "dvb-drivers",
  "kernel": "6.18.5-mos",
  "package": "dvb-digital-devices_20251201-1+mos_amd64.deb",
  "path": "/boot/optional/drivers/dvb-drivers/6.18.5-mos/dvb-digital-devices_20251201-1+mos_amd64.deb",
  "directory": "/boot/optional/drivers/dvb-drivers/6.18.5-mos"
}
```

---

## 🚀 GitHub Actions & Releases

An example GitHub Actions workflow is provided at:

```
.github/workflows/build-plugin.yml
```

This workflow automatically builds the plugin, packages it, and uploads it as a GitHub Release.

### Required GitHub Repository Settings

To allow the workflow to create releases:

1. Open **Repository Settings**
2. Go to **Actions → General**
3. Under **Workflow permissions**, select **Read and write permissions**
4. Click **Save**

> ⚠️ This step is required — the workflow will fail without it.

---

## 📝 Notes

- The plugin `name` must always match the folder name used by MOS
- The Vue page must always be located inside the `page/` directory
- `Plugin.vue` is mandatory and must not be renamed

---

*Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information.*
