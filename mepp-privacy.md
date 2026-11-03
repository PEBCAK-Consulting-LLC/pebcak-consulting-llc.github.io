---
layout: page
title: Mepp - Privacy Policy
permalink: /mepp/privacy/
---

# Mepp: Mise en Place — Privacy Policy

**Effective Date:** November 2, 2026  
**Last Updated:** November 2, 2026  
**Application:** Mepp: Mise en Place (`com.pebcakconsulting.mepp` — Android, Wear OS, iOS, watchOS)  
**Publisher:** PEBCAK Consulting LLC  
**Developer Contact:** [mepp@pebcakconsulting.com](mailto:mepp@pebcakconsulting.com) | [support@pebcakconsulting.com](mailto:support@pebcakconsulting.com)  

---

## 1. Executive Summary & Zero-Server Architecture

PEBCAK Consulting LLC ("we", "us", or "our") designs **Mepp: Mise en Place** under strict **Local-First** and **Zero-Knowledge** engineering principles:

- **Zero PEBCAK Backend Servers:** PEBCAK Consulting LLC operates **no** remote application servers, cloud databases, or telemetry pipelines for Mepp. We never receive, view, store, or sell your personal habits, goals, journal entries, or life records.
- **No Mandatory Account or Login:** 100% of Mepp's features work offline on your device without creating an account or signing in.
- **Hardware-Backed SQLCipher AES-256 Encryption at Rest:** Every quest, ritual, goal, decision prediction, weekly review, custom metric, mood check-in, journal entry, book note, time block, and contact is stored exclusively on your device inside an encrypted **SQLCipher 4 (AES-256)** database (`android:allowBackup="false"`, `noBackupFilesDir` on Android; Keychain + Data Protection on iOS).
- **Open-Source Attribution:** Mepp was originally created by [`saw-your-packet`](https://github.com/saw-your-packet/mepp){:rel="noopener noreferrer"} under the MIT License and is maintained and published for Android, Wear OS, iOS, and watchOS by PEBCAK Consulting LLC.

---

## 2. Information Processed and How It Is Handled

### A. Encrypted Personal Vault Data (100% On-Device Only)
- **Data Stored Locally:** Quests, streaks, XP ledger, annual and quarterly goals, decision logs, custom metrics, mood valence/energy check-ins, journal pages, reading sessions, 15-minute time blocks, people/CRM notes, and optional local attachments.
- **Key Protection:** The 256-bit SQLCipher master key is wrapped by hardware-backed **Android Keystore (`AES-256-GCM`)** on Android or **Apple Keychain (`ThisDeviceOnly`)** on iOS, plus an offline 150-bit Crockford Base32 recovery code (`HKDF-SHA256` + `AES-256-GCM`).
- **On-Device Journal Reflection:** Optional Socratic reflection prompts are generated 100% locally on your device (via Apple's on-device `FoundationModels` where supported or Mepp's offline Socratic prompt engine). Journal text is never transmitted to external AI APIs.

### B. User-Initiated Encrypted Backups (`.meppbackup`) & Portable Exports
- **Storage Access Framework & Local Files:** On Android and iOS, you can export or import client-side encrypted `.meppbackup` (`MEPPBK01`, `AES-256-GCM`) archives or portable JSON/CSV exports directly to any folder or cloud drive you choose via the system file picker (`ACTION_CREATE_DOCUMENT` / `ACTION_OPEN_DOCUMENT` on Android; Files on iOS) without granting broad storage permissions.
- **Optional User Cloud Sign-In (iOS):** If you optionally connect your own Apple iCloud Drive or Google Drive (`drive.appdata`) account on your device, authentication uses your own credentials via OAuth 2.0 + PKCE stored in your device Keychain, and only client-side encrypted `.meppbackup` archives are uploaded to your personal cloud storage. Neither PEBCAK Consulting LLC, Apple, nor Google possesses your recovery key to decrypt `.meppbackup` files.

### C. Wear OS & Apple Watch Companion Sync
- **Data Exchanged:** Daily quest completion summary, streak count, active focus countdown, and quick-capture actions.
- **Transport:** Transmitted strictly peer-to-peer between your paired phone and watch via Google Play Services Wearable Data Layer (`Wearable.DataClient` / `MessageClient`) or Apple `WatchConnectivity`. The Mepp Wear OS module declares **zero** `android.permission.INTERNET` permission.

### D. Advertising & Optional Ad-Free Passes (Free Tier Only)
- **Partner:** Google AdMob (Google Mobile Ads SDK) with Google User Messaging Platform (**UMP**) consent management.
- **Data Handled by AdMob (Free Tier Only):** When ads are active on the free tier, the Google Mobile Ads SDK may collect and share your device advertising identifier (`AD_ID` on Android; contextual non-tracking ads with `NSPrivacyTracking = false` on iOS), coarse IP-derived location, app ad-interaction events (impressions/clicks), and SDK diagnostics for advertising, analytics, and fraud prevention, gated by UMP user consent in the EEA, UK, and applicable jurisdictions. Vault contents are **never** accessible to the ad SDK.
- **Partner Disclosures:** Learn more at [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites){:rel="noopener noreferrer"} and the [Google Privacy Policy](https://policies.google.com/privacy){:rel="noopener noreferrer"}.
- **User Controls & Permanent Ad Removal:**
  - Watch an optional short rewarded video anytime to activate a **1-Hour** or **6-Hour Ad-Free Pass**.
  - Manage ad privacy/consent in **Settings** or reset/delete your Advertising ID in **Android Settings → Security & privacy → Privacy → Ads**.
  - Purchase **Mepp Ad-Free Lifetime** (`com.pebcakconsulting.mepp.pro.lifetime`) once to permanently prevent Google Mobile Ads SDK initialization (`DELAY_APP_MEASUREMENT_INIT = true`).

### E. In-App Purchases & Tip Jar
- **Billing Providers:** Processed exclusively by **Google Play Billing** (Android) or **Apple StoreKit 2** (iOS) for `com.pebcakconsulting.mepp.pro.lifetime`, `com.pebcakconsulting.mepp.tip.coffee`, and `com.pebcakconsulting.mepp.tip.lunch`.
- **Financial Privacy:** PEBCAK Consulting LLC never receives or stores payment card numbers, bank details, or billing addresses; the app checks only on-device entitlement receipts to unlock Pro status.

---

## 3. Data Retention & How to Delete Your Data

Because PEBCAK Consulting LLC maintains zero user accounts or servers, you have immediate, complete control over data deletion:

1. **Instant In-App Vault Wipe:** Open Mepp → **Settings → Security & Data → Wipe / Reset Local Vault** to cryptographically destroy the local SQLCipher database and wrapped keys on your device.
2. **OS Storage / Uninstall:** Clear storage in **Android Settings → Apps → Mepp → Storage & cache → Clear storage** or uninstall Mepp on Android/iOS to erase all sandboxed app files immediately.
3. **Backup File Deletion:** Delete any exported `.meppbackup`, JSON, or CSV files directly in your device file manager, iCloud Drive, or Google Drive (`Settings → Manage Apps` in Google Drive).

---

## 4. Security Controls

- **SQLCipher 4 AES-256** full-database encryption with memory security enabled.
- **Biometric / Device Credential Lock** (`BiometricPrompt` on Android; Face ID / Touch ID on iOS) with automatic background lock timeout and `FLAG_SECURE` app-switcher privacy shield when locked.
- **Cleartext HTTP Disabled:** Network Security Configuration enforces HTTPS/TLS 1.3 (`cleartextTrafficPermitted="false"`).

---

## 5. Children's Privacy

Mepp is a general-audience personal productivity utility not directed to children under 13 (or under 16 in applicable jurisdictions). We do not knowingly collect personal information from children. If you believe a child has sent personal information via a support email, contact [mepp@pebcakconsulting.com](mailto:mepp@pebcakconsulting.com) and we will promptly delete that correspondence.

---

## 6. Contact Us

For privacy questions, GDPR/CCPA inquiries, or security disclosures, contact:

**PEBCAK Consulting LLC**  
Email: [mepp@pebcakconsulting.com](mailto:mepp@pebcakconsulting.com) | [support@pebcakconsulting.com](mailto:support@pebcakconsulting.com)  
Security: [mepp-security@pebcakconsulting.com](mailto:mepp-security@pebcakconsulting.com)  
Website: [https://pebcak-consulting-llc.github.io](https://pebcak-consulting-llc.github.io)

---

[Back to Home]({{ "/" | relative_url }}) &bull; [Mepp Overview]({{ "/mepp/" | relative_url }}) &bull; [Support]({{ "/mepp/support/" | relative_url }}) &bull; [Terms of Service]({{ "/mepp/terms/" | relative_url }})
