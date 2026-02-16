# 🌐 Network Ports Used by MOS

This page lists the network ports currently used by MOS and their purpose.

Understanding which ports are in use is important for:

- 🔐 Firewall configuration

- 🌍 Reverse proxy setups

- 🧩 Network segmentation

- 🛠 Troubleshooting connectivity issues

---

## 📡 Default Ports
| Port	| Service	| Purpose
| ----------- | --------------|------------- |
| 80 |	WebUI |	Access to the MOS Web Interface |
| 998 |	API	| Internal and external API communication |
| 999 |	Notify |	System notifications and real-time events |

---

##🔎 Port Details

---

## 🌍 Port 80 — WebUI

- Provides access to the MOS Web Interface

- Default HTTP access

- Intended for local network use only

> **⚠️ Security Notice**
> 
> The MOS WebUI is not designed to be exposed directly to the public Internet.
> 
> Do not forward port 80 on your router or firewall.
>
> If remote access is required use a VPN connection
>
> Direct public exposure of the WebUI may lead to unauthorized access.

Example:
```
http://<mos-ip>
```

---

## 🔗 Port 998 — API

- Used for MOS API communication

- Required for internal services and automation

---

## 🔔 Port 999 — Notify Service

- Handles real-time notifications

- Used for system events and UI updates

---

# 🧭 Optional Port

---

## 🧩 Port 53 — DNS (dnsmasq)

If dnsmasq is enabled in MOS settings:

| Port	| Service	| Purpose
| ----------- | --------------|------------- |
| 53 |	DNS (dnsmasq) |	Local DNS resolution |

- Used when MOS acts as a local DNS server

- Only active if enabled in settings

---

## 🔐 Firewall Considerations

If MOS is running behind a firewall:

- Ensure required ports are open internally

- Only expose ports externally if necessary

- Consider using a reverse proxy for secure public access

---

## 🧪 Summary

MOS currently uses the following ports:

- 80 → WebUI

- 998 → API

- 999 → Notify Service

- 53 → DNS (only if dnsmasq is enabled)
