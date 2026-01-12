## Disable MD5 Verification

MOS performs MD5 checksum verification to ensure data integrity during certain operations.
In advanced scenarios, this verification can be explicitly disabled.

### How to Disable MD5 Checks

- Create the following file on the system:

  ```
  /boot/config/system/md5check_disabled
  ```

- The file may be empty or contain any content

- The existence of the file alone is sufficient

- No restart is required unless the related operation is already running

- Once this file exists, MD5 verification is completely disabled.

---

## ⚠️ Important Notes

- Disabling MD5 checks is intended for advanced users only

- It may reduce data integrity protection

- Use this option only if you fully understand the implications

## ✅ Summary

- MD5 verification can be disabled via a marker file

- File path: /boot/config/system/md5check_disabled

- File content is irrelevant

- Recommended only for special or troubleshooting scenarios
