AL-AMEEN EXAMFLOW 3.5.6 — WINDOWS ELECTRON PACKAGE

This is the Windows installer source scaffold, not a compiled .exe.
Requirements: Windows 10/11 64-bit, Node.js LTS, internet for first dependency install.

Build on Windows:
  npm install
  npm run dist:win

The NSIS installer will be created in windows-electron/dist/.
For code signing / SmartScreen reputation, a publisher certificate is required.

The app bundles www/index.html locally and is designed to run offline.
WhatsApp/email still require internet. Browser storage is origin-specific:
export a backup from the old v3.5.6 file and import it in the installed version.
Keep the old file and backup unchanged.
