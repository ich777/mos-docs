# Sensors

MOS supports hardware and system sensors that can be displayed on the Dashboard.
Sensors allow you to monitor values such as temperatures, voltages, fan speeds, or custom metrics collected from the system.

This page explains how to view, configure, and display sensors in MOS.

---

## 📍 Accessing Sensors

Navigate to:

**Settings → Hardware → Sensors**

This view shows all detected and configured sensors.

<img width="1919" height="698" alt="image" src="https://github.com/user-attachments/assets/8faff22c-ba8b-4d71-b9ce-c1695c429245" />


---

## 🖥️ Sensors Overview

The Sensors page displays a table with the following columns:

- **#** – Internal sensor index
- **Name** – Display name of the sensor
- **Type** – Sensor category (e.g. temperature, voltage)
- **Subtype** – Optional classification
- **Manufacturer** – Hardware manufacturer
- **Model** – Device or chip model
- **Value** – Current sensor reading
- **Unit** – Measurement unit (e.g. °C, V)

If no sensors are configured yet, the table will be empty.

Example:

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/123d6787-3d38-4b95-ba45-e44dddd70830" />

---

## ⚙️ View Customization

You can customize which columns are visible in the sensor table.

- Click the three-dot menu in the bottom-right corner

- Select Edit View

- Enable or disable columns as needed

- Click Save

<img width="644" height="685" alt="image" src="https://github.com/user-attachments/assets/f8ba1738-ffc3-40e1-9ae8-fc81ea5be135" />

---

## ➕ Creating a Sensor

To create a new sensor:

- Open Settings → Hardware → Sensors

- Click the three-dot menu

- Select Create Sensor

This opens the sensor creation dialog.

<img width="1209" height="867" alt="image" src="https://github.com/user-attachments/assets/63ecd228-4a2b-4b53-ad8a-b130fc0e24c4" />

---

## 🧩 Create Sensor Fields

### Required Fields

- Name

  Human-readable sensor name shown in the UI

- Type

  Sensor type (e.g. Temperature, Voltage, Fan)

- Source

  Raw sensor input source detected by the system

- Unit

  Measurement unit (e.g. `°C`, `V`, `RPM`)

### Optional Fields

- Subtype

  Additional classification

- Multiplier / Divisor

  Used to scale raw values

- Manufacturer

  Hardware vendor

- Model

  Sensor or chip model

<img width="1209" height="867" alt="image" src="https://github.com/user-attachments/assets/63ecd228-4a2b-4b53-ad8a-b130fc0e24c4" />

---

## 🔎 Unmapped Sensors

On the right side of the Create Sensor dialog, MOS displays Unmapped Sensors.

These are raw sensor values detected on the system but not yet configured.
They are typically provided as structured data (e.g. temperatures per CPU core).

You can use this data to select the correct source when creating a sensor.

<img width="576" height="668" alt="image" src="https://github.com/user-attachments/assets/6ba6df7b-b2f9-402d-b66d-343d05a4a509" />


---

## 📊 Displaying Sensors on the Dashboard

Once sensors are created, they can be displayed on the Dashboard.

- Sensors automatically become available as Dashboard widgets

- Values update in real time

- Useful for monitoring system health at a glance

Typical dashboard use cases:

- CPU temperature monitoring

- Disk temperature tracking

- Voltage or power readings

- Custom system metrics

<img width="1920" height="914" alt="image" src="https://github.com/user-attachments/assets/9f332bf8-154b-41ca-9e90-8a424bb1b2df" />

---

## ⚙️ Opening the Visibility Settings

1. Open the **Dashboard**
2. Click the **Dashboard Settings / Filter icon**
3. Select **Visibility**

This opens the visibility configuration dialog.

<img width="486" height="711" alt="image" src="https://github.com/user-attachments/assets/6b24a075-0bb0-48ba-9488-7ccc24befae5" />

---

## ⚠️ Notes & Best Practices

- Sensor availability depends on hardware and drivers

- Not all systems expose the same sensor data

- Use meaningful names for dashboard readability

- Verify units and scaling (multiplier/divisor) carefully

---

## ✅ Summary

- Sensors provide real-time hardware and system metrics

- Sensors are managed via Settings → Hardware → Sensors

- Custom sensors can be created from unmapped system data

- Configured sensors can be displayed on the Dashboard
