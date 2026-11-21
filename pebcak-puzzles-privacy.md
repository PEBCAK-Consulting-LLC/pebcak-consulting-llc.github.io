---
layout: page
title: PEBCAK Puzzles - Privacy Policy
permalink: /pebcak-puzzles/privacy/
---

# PEBCAK Puzzles — Privacy Policy

**Effective Date:** November 20, 2026  
**Last Updated:** November 21, 2026  
**Application:** PEBCAK Puzzles (`com.pebcakconsulting.pebcakpuzzles` — iOS, iPadOS, Android)  
**Publisher:** PEBCAK Consulting LLC  
**Developer Contact:** [ryan@pebcakconsulting.com](mailto:ryan@pebcakconsulting.com)  

---

## 1. Executive Summary for Players, Parents & Guardians

PEBCAK Consulting LLC builds **PEBCAK Puzzles** in strict compliance with **COPPA**, **GDPR-K**, **Apple App Store 4+ Guidelines**, and the **Google Play Families Policy**:

- **Zero Custom Servers & Zero Personal Information (PII):** We operate zero custom backend servers and never collect, store, or transmit names, email addresses, phone numbers, photos, contacts, microphone audio, camera input, or location data.
- **100% Offline Gameplay & No Accounts:** All 30 puzzle modes and 1,200 local SQLite catalog pages run locally on your device without registration, sign-in walls, chat, or user-generated content.
- **Zero Advertising ID / Behavioral Tracking:** On Android, `com.google.android.gms.permission.AD_ID` and Android AdServices permissions are explicitly stripped from the manifest (`tools:node="remove"`). On iOS/iPadOS, Apple App Tracking Transparency (`IDFA`) is never requested or accessed (`NSPrivacyTracking = false`).
- **Child-Directed, G-Rated Contextual Ads Only:** When optional banner, interstitial, or rewarded ads are active on the free tier, every request is locked *prior* to SDK initialization to child-directed, non-personalized, General-Audience (`G`) creatives only.

---

## 2. Information Processed & Stored

### A. Local Save Vault & Optional Platform Cloud Sync
- **Data Stored Locally:** Solved puzzle counts, active board state, Passport Stamps, Merit Badges, Traveler Rank XP, Coins, active play-time odometer counters, and visual/audio accessibility preferences.
- **Hardware-Backed Integrity:** Stored locally inside your app sandbox with HMAC-SHA256 integrity verification backed by **Apple Keychain** (iOS/iPadOS) or **Android Keystore** (Android).
- **Optional Platform Sync:** If signed into **Apple iCloud / Game Center** (iOS/iPadOS) or **Android Auto Backup / Google Play Games** (Android), progress and high-score leaderboards sync directly through Apple's or Google's native platform services under their respective privacy policies. PEBCAK Consulting LLC never receives or accesses your Apple ID, Google account, or save files.

### B. Kid-Safe Non-Personalized Advertising & Ad-Free Flight Passes
- **Partner:** Google AdMob (Google Mobile Ads SDK). See the [Google Privacy Policy](https://policies.google.com/privacy){:rel="noopener noreferrer"}.
- **Strict Pre-Initialization Configuration:** Before `MobileAds.instance.initialize()` runs (`GADDelayAppMeasurementInit = true` on iOS; `DELAY_APP_MEASUREMENT_INIT = true` on Android), *PEBCAK Puzzles* enforces:
  - `ageRestrictedTreatment = AgeRestrictedTreatment.child` (COPPA child-directed treatment)
  - `maxAdContentRating = MaxAdContentRating.g` (General Audiences `G` creatives only, enforced both in SDK and AdMob server-side Blocking Controls)
  - `nonPersonalizedAds = true` (`npa = 1` — contextual delivery only; zero behavioral profiling)
- **Ad-Free Controls:** Players never see ads during active puzzle solving, can claim free 1-Hour or 6-Hour Ad-Free Flight Passes (with an offline Airplane-Mode fallback), and adults can permanently remove all ads via the one-time **PEBCAK Puzzles Pro** (`com.pebcakconsulting.pebcakpuzzles.pro.lifetime`) unlock.

### C. Parental Gate & In-App Purchases
- All external links, purchase buttons, and restore-purchase actions are protected behind a randomized adult multiplication **Parental Gate** with a 3-strike lockout.
- Purchases and restores are processed natively by **Apple StoreKit** or **Google Play Billing**. PEBCAK Consulting LLC never receives payment card or billing details.

---

## 3. Children's Privacy & Contact

Because we store zero personal data on external servers, uninstalling the application deletes all local data from your device (and iCloud / Google cloud backups can be managed directly in your device settings). For any privacy questions, contact **PEBCAK Consulting LLC** at [ryan@pebcakconsulting.com](mailto:ryan@pebcakconsulting.com).

---

[PEBCAK Puzzles Home]({{ "/pebcak-puzzles/" | relative_url }}) &bull; [Support]({{ "/pebcak-puzzles/support/" | relative_url }}) &bull; [Terms of Use]({{ "/pebcak-puzzles/terms/" | relative_url }})
