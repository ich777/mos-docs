# Create Users

Users define who can access the MOS web interface and system resources.
Each user is assigned a role that determines their permissions.

Navigate to:

**Users → Add User**

Example:

<img width="2546" height="1271" alt="image" src="https://github.com/user-attachments/assets/ff8f2a46-ffd1-4f5f-8e5b-7e24027c4bed" />

---

## User Configuration Fields

<img width="402" height="554" alt="image" src="https://github.com/user-attachments/assets/3acc693c-c353-4f29-a46a-d3fd4e2c161d" />

### Username

Defines the login name of the user.

**Notes:**
- Must be unique
- Used for WebUI login and permissions
- Also used for share access if Samba is enabled

---

### Password

Defines the login password for the user.

- The password is required for WebUI access
- Use a strong password, especially for admin users

---

### Confirm Password

Re-enter the password to confirm correctness.

---

### Role

Defines the permission level of the user.

Available roles:

#### admin
- Full access to the system
- Can manage:
  - Disks and pools
  - Shares
  - Docker, LXC, and VMs
  - Users and settings
  - API tokens

Use this role only for trusted users.

---

#### samba_only
- No access to the MOS web interface
- Can only be used for file access via shares
- Intended for network file access users

---

### Samba User

Enables or disables Samba access for the user.

- **Enabled:**  
  User can authenticate against shares
- **Disabled:**  
  User cannot access shares via Samba

---

## Managing Existing Users

The Users overview lists all configured users.

For each user you can:
- **Edit** the password, role, or Samba access
- **Delete** the user

---

## Summary

To create a user:

1. Choose a username
2. Set a password
3. Assign the appropriate role
4. Enable Samba access if required

Use admin users sparingly and create separate users for file access where possible.
