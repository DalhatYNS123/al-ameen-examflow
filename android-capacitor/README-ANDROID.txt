AL-AMEEN EXAMFLOW 3.5.6 — ANDROID CAPACITOR PACKAGE

This is the Android project source scaffold, not a compiled APK.
Requirements: Node.js LTS, Android Studio, Android SDK, JDK supported by the installed
Capacitor/Android Gradle plugin. A computer is required for the normal APK build.

Build:
  npm install
  npx cap add android
  npx cap sync android
  npx cap open android

In Android Studio:
  Wait for Gradle sync, then Build > Build Bundle(s) / APK(s) > Build APK(s).
The debug APK is normally under android/app/build/outputs/apk/debug/.

For a signed release APK, configure a release keystore in Android Studio/Gradle.
Do not publish a debug APK as the official school release.

The original EXAMFLOW HTML is bundled locally in www/index.html, so the UI does not
need a network connection. WhatsApp/email still require internet. Browser storage
is origin-specific: export a backup from the old v3.5.6 file and import it into
the installed app before official use. Keep the old file and backup unchanged.
