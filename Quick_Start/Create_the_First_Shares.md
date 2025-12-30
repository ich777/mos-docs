# Create the First Shares

Shares define how directories on a storage pool are exposed to users and services.
They are typically used for:
- File access over the network
- Application data
- Media libraries
- Backups

Example:

<img width="2547" height="1270" alt="image" src="https://github.com/user-attachments/assets/98b7b3c1-c3f2-404e-9069-5ddebd1dbbdb" />


Navigate to:

**Shares → Create Share**

---

## Share Configuration Fields

Example:

<img width="504" height="827" alt="image" src="https://github.com/user-attachments/assets/0e5a4e28-90ac-4670-a9db-c380984a9d8a" />


### Share Name

Defines the name of the share as it appears in the system and on the network.

**Best practices:**
- Use short, descriptive names
- Avoid spaces and special characters

**Examples:**
- `appdata`
- `media`
- `backup`
- `downloads`

---

### Selected Directory

Defines the directory path of the share.

- The directory is created automatically if it does not already exist
- The directory name is derived from the selected path

**Example:**
`/mnt/main/media`

In this example:
- `main` is the selected pool
- `media` is the directory created for the share

---

### Pool

Selects the storage pool where the share will be created.

**Example:**
- `main`

The share directory will always be created inside the selected pool.

---

### Read Rights

Defines which users are allowed to read from the share.

- Multiple users can be selected
- If no user is selected, access may be restricted depending on configuration

---

### Write Rights

Defines which users are allowed to write to the share.

- Only selected users can modify files
- Write access implies read access

---

### Comment

Optional description for the share.

Useful for documenting the purpose of the share.

---

## Advanced Options

### Enabled

Enables or disables the share.

- Disabled shares are not accessible
- Data remains untouched

---

### Browseable

Controls whether the share is visible when browsing available shares.

- **Enabled:** Share is visible
- **Disabled:** Share is hidden but still accessible if the path is known

---

### Read Only

Forces the share into read-only mode.

- Prevents any write operations
- Overrides write permissions

---

### Guest OK

Allows access without authentication.

**Warning:**  
Enable this option only in trusted networks.

---

## Managing Existing Shares

The Shares overview displays all configured shares.

Each share shows:
- Share name
- Directory path
- Associated pool

Example:

<img width="1947" height="146" alt="image" src="https://github.com/user-attachments/assets/30b19e43-539e-449b-bf6d-c90b6624df8a" />

---

### Share Actions

Each share provides a context menu with the following actions:

- **Edit**  
  Modify share configuration and permissions.

- **Delete**  
  Remove the share.

Example:

<img width="174" height="202" alt="image" src="https://github.com/user-attachments/assets/579940de-0069-4c6c-aedb-493da9c2d351" />


When deleting a share, an additional option is available:

- **Delete directory**  
  Permanently removes the share directory and all its contents.

**Warning:**  
This action cannot be undone.

Example:

<img width="414" height="283" alt="image" src="https://github.com/user-attachments/assets/f2125468-17dd-4c04-9510-7c904c1a916b" />


---

## Summary

To create your first share:

1. Choose a clear share name
2. Select a pool
3. Define the directory path  
   *(the directory is created automatically if missing)*
4. Assign read and write permissions
5. Adjust advanced options if required

Shares are the primary way to expose storage to users and applications.
