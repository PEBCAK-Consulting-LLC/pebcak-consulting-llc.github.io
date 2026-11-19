---
layout: page
title: Radical Rush - Privacy Policy
permalink: /radical-rush/privacy/
---

# Radical Rush — Privacy Policy

**Effective Date:** November 18, 2026  
**Last Updated:** November 19, 2026  
**Application:** Radical Rush / Radical Rush 90s (`com.pebcakconsulting.radicalrush` — iOS, iPadOS, Android)  
**Publisher:** PEBCAK Consulting LLC  
**Developer Contact:** [ryan@pebcakconsulting.com](mailto:ryan@pebcakconsulting.com) | [sonofagl1tch@pebcakconsulting.com](mailto:sonofagl1tch@pebcakconsulting.com)  

---

## 1. Executive Summary for Parents & Guardians

PEBCAK Consulting LLC is committed to protecting the safety and privacy of children and families. **Radical Rush** is engineered in strict compliance with the **Children's Online Privacy Protection Act (COPPA)**, **GDPR-K**, **Apple App Store 4+ & Kids Guidelines**, and the **Google Play Families Policy**:

- **Zero Custom Servers & Zero Personal Information (PII):** We operate zero custom backend servers and never request, collect, store, or transmit names, email addresses, phone numbers, photos, contacts, microphone audio, camera input, or precise geographic location.
- **No Accounts & No Social Chat:** All gameplay works immediately without registration, sign-in walls, free-text chat, or user-generated content.
- **Zero Advertising ID / Behavioral Tracking:** On Android, `com.google.android.gms.permission.AD_ID` and Privacy Sandbox AdServices permissions are explicitly removed from the application manifest. On iOS/iPadOS, Apple App Tracking Transparency (IDFA) is never requested or accessed (`NSPrivacyTracking = false`).
- **Child-Directed, G-Rated Contextual Ads Only:** When optional ads are active on the free tier, all requests are locked *before* SDK initialization to child-directed, non-personalized, General-Audience (`G`) creatives only.

---

## 2. Information Processed & Stored

### A. Local Save Integrity & Optional Platform Cloud Sync
- **Data Stored:** Unlocked cartoon vehicles, paint wraps, blaster levels, coins, career points, Holo-Pogs, daily quest progress, and audio/accessibility preferences.
- **Local Security:** Stored locally inside the app sandbox with cryptographic HMAC-SHA256 integrity verification backed by **Apple Keychain** (iOS/iPadOS) or **Android Keystore** (Android).
- **Optional Platform Cloud Sync:** If your device is signed into **Apple iCloud / Game Center** (iOS/iPadOS) or **Google Play Games Services / Android Auto Backup** (Android), your save progress, high-score leaderboards, and achievements sync directly through Apple's or Google's native platform services under their respective privacy policies. PEBCAK Consulting LLC never receives or stores your Apple ID, Google account, or save payloads on any external server.

### B. Kid-Safe Non-Personalized Advertising & Ad-Free Passes
- **Partner:** Google AdMob (Google Mobile Ads SDK — Google Play Families Self-Certified Ads SDK). See [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites){:rel="noopener noreferrer"} and the [Google Privacy Policy](https://policies.google.com/privacy){:rel="noopener noreferrer"}.
- **Strict Pre-Initialization Child-Safe Configuration:** Before initializing the Google Mobile Ads SDK (`GADDelayAppMeasurementInit = true` on iOS; `DELAY_APP_MEASUREMENT_INIT = true` on Android), *Radical Rush* enforces:
  - `tagForChildDirectedTreatment = true` (COPPA child-directed treatment)
  - `tagForUnderAgeOfConsent = true` (GDPR-K under-age-of-consent treatment)
  - `maxAdContentRating = "G"` (General Audiences / family-safe creatives only)
  - `npa = 1` (`nonPersonalizedAds: true` — contextual delivery only; zero behavioral profiling or remarketing)
- **SDK Technical Diagnostics:** Under child-directed non-personalized mode (with `AD_ID` removed), the Google Mobile Ads SDK processes only transient IP-derived coarse region, app interaction events (ad impressions/clicks), crash diagnostics, and scoped app-set/install identifiers over TLS strictly for fraud prevention, frequency capping, and contextual ad delivery.
- **Ad-Free Controls:** Players can activate free 1-Hour or 6-Hour Ad-Free Passes, and parents can permanently disable all advertisements forever via the one-time **Radical Club Pro** unlock (`com.pebcakconsulting.radicalrush.pro.lifetime`).

### C. Parental Gate & In-App Purchases
- **Platform Billing:** All purchases and restores are processed exclusively by **Apple StoreKit 2** (iOS/iPadOS) or **Google Play Billing** (Android). PEBCAK Consulting LLC never sees or stores credit card numbers or billing addresses.
- **Adult Parental Gate:** All parent settings, external support/privacy links, purchase buttons, and **Restore Purchases** actions are protected behind a randomized multi-digit adult arithmetic **Parental Gate** with cooldown lockout on repeated incorrect answers.

---

## 3. Children's Privacy (COPPA & GDPR-K) & Data Deletion

We do not knowingly collect personal information from children under 13 (or under 16 in applicable jurisdictions).
- **Local & Cloud Data Deletion:** You can delete all local game progress at any time by uninstalling *Radical Rush* or clearing app storage in device settings, and you can manage or delete platform cloud save data directly in your Apple iCloud / Game Center or Google Play Games account settings.
- **Parent Inquiries:** If you believe a child has sent personal information to us via an email support request, please contact [ryan@pebcakconsulting.com](mailto:ryan@pebcakconsulting.com) and we will delete that correspondence immediately.

---

## 4. Contact Information

**PEBCAK Consulting LLC**  
Email: [ryan@pebcakconsulting.com](mailto:ryan@pebcakconsulting.com) | [sonofagl1tch@pebcakconsulting.com](mailto:sonofagl1tch@pebcakconsulting.com)  
Website: [https://pebcak-consulting-llc.github.io/radical-rush/]({{ "/radical-rush/" | relative_url }})

---

[Back to Home]({{ "/" | relative_url }}) &bull; [Radical Rush Overview]({{ "/radical-rush/" | relative_url }}) &bull; [Support]({{ "/radical-rush/support/" | relative_url }}) &bull; [Terms of Use]({{ "/radical-rush/terms/" | relative_url }})
