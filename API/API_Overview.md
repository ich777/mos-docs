# MOS API Overview

MOS provides a fully documented REST API that is used internally by the web interface.
The WebUI does not perform direct system actions on its own — it communicates exclusively through the MOS API.

This makes the system:
- Fully automatable
- Scriptable
- Integrable with external tools and services

---

## API Documentation

The API documentation is available via the built-in Swagger UI.

Open the following URL in your browser:

`http://<MOS-IP>/api-docs/`

The API documentation provides:
- A complete list of available endpoints
- Detailed parameter descriptions
- Request and response schemas
- Live execution of API calls

Example:

<img width="1458" height="1233" alt="image" src="https://github.com/user-attachments/assets/315c6542-1d66-495f-bcd8-4ca20455e8cf" />

---

## API Structure

The API is organized into logical sections, such as:
- Authentication
- Disks
- Pools
- Shares
- Docker
- LXC
- Virtual Machines
- etc.

Each section groups all related endpoints for that subsystem.

---

## Authentication & Authorization

Most API endpoints require authentication.

The MOS API uses **Bearer Token authentication**.

---

### Creating an API Token

API tokens can be created in the WebUI.

Navigate to:

**User Settings → Admin API Tokens**

From there you can:
- Create a new API token
- Copy the token value
- Delete existing tokens

**Important:**  
Store API tokens securely. Tokens provide administrative access depending on user permissions.

Example:

<img width="2546" height="812" alt="image" src="https://github.com/user-attachments/assets/f3fbb4a6-a709-4a51-8819-6c73b3009f6f" />

---

### Authorizing in the API Docs

The API documentation UI includes an **Authorize** button.

Steps to authorize:

1. Open the API documentation

`http://<MOS-IP>/api-docs/`

2. Click **Authorize**

3. Enter the token:

<img width="652" height="289" alt="image" src="https://github.com/user-attachments/assets/edfb863c-0858-4f73-9d1c-bbdab7ca3ed2" />

4. Confirm authorization

Once authorized:
- Protected endpoints become accessible
- API calls can be executed directly from the documentation UI

---

## Executing API Calls

After authorization, API endpoints can be executed directly using the **Try it out** feature.

This allows you to:
- Test API requests
- Inspect live responses
- Understand required parameters
- Explore system behavior safely

Some endpoints support optional parameters, such as:
- Performance metrics
- Filtering
- Standby handling for disks

---

## Example: Disk Listing

The `GET /disks` endpoint returns a live overview of all detected disks, including:
- Device path
- Model and serial
- Size and power state
- Partition layout

Optional parameters allow controlling:
- Whether performance data is included
- Whether disks in standby should be skipped

---

## Important Notes

- The API uses **live system data** (no caching)
- Actions performed via the WebUI are equivalent to API calls
- API access respects user permissions and roles

This ensures consistent behavior between:
- Web interface
- API usage
- Automation scripts

---

## Summary

The MOS API is the central control layer of the system.

- The WebUI is a client of the API
- All system actions are exposed via REST endpoints
- The API documentation provides full visibility and control
- API tokens enable secure automation and integration

For advanced users, the API unlocks the full potential of MOS.
