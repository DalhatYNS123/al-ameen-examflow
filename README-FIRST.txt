AL-AMEEN EXAMFLOW v3.5.6 — INSTALLATION SOURCE PACK
Includes: PWA source, Android Capacitor source scaffold, Windows Electron source scaffold.

IMPORTANT STATUS
- The original v3.5.6 HTML and its embedded official school logo are bundled unchanged
  as the core application in each target.
- PWA manifest/service worker and desktop/mobile packaging shells are added around it.
- This package does NOT contain a compiled APK or EXE yet. Those require platform
  build environments and signing/hosting decisions.
- The PWA must be published on HTTPS before browser installation works.
- The PWA, Capacitor and Electron builds have separate browser storage origins.
  No automatic merging of localStorage is safe or possible. Use EXAMFLOW's existing
  Export Backup and Import Backup functions to migrate papers and drafts.

SAFE MIGRATION CHECKLIST
1. Open the current approved v3.5.6 HTML.
2. Use its Backup/Export function and save the JSON backup in a safe folder.
3. Keep the original HTML and backup; do not clear browser/site data.
4. Install the target version (PWA, APK or Windows app).
5. Open the target app and use Import Backup to import the JSON.
6. Confirm saved papers, drafts, and recovery behaviour before relying on it.
7. Repeat backup migration independently on each device. The devices do not sync
   automatically with one another.

PROJECT LAYOUT
pwa/                 HTTPS installable PWA source
android-capacitor/   Android wrapper source scaffold
windows-electron/    Windows desktop wrapper source scaffold
shared/              Extracted copy of the official embedded school emblem

Build the Android APK on a computer with Android Studio and SDK.
Build the Windows EXE on Windows with Node.js.
Publish the PWA to a static HTTPS host.
