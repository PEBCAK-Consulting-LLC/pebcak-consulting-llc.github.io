---
layout: page
title: Mepp - Mise en Place
permalink: /mepp/
---

# Mepp: Mise en Place

### Calm, 100% On-Device Personal Operating System for Quests, Goals, Reflection & Life Tracking

**Mepp** brings your daily habits, annual and quarterly objectives, decision calibration journal, custom metrics, reading library, mood check-ins, 15-minute time blocks, and personal CRM into one native experience across **Android, Wear OS, iPhone, and Apple Watch** — sealed inside a hardware-backed **SQLCipher AES-256** vault with **zero PEBCAK backend servers**.

---

## Key Capabilities

### 🔒 Hardware-Backed SQLCipher AES-256 Vault
Every table and index is encrypted locally at rest using SQLCipher 4 (`cipher_memory_security = ON`), with your raw vault key sealed inside the **Android Keystore** or **iOS Keychain** (biometric/passcode protected) and recoverable only via your 30-character offline recovery key (150-bit Crockford Base32 + HKDF-SHA256 + AES-256-GCM).

### 🎯 Quests, Rituals, Focus & Guilt-Free Rest Mode
Plan one-off quests and recurring rituals with part-of-day anchors, Focus countdown sessions, daily All-Clear chests, weekly streak rings, and explicit **Rest Periods** so vacations and sick days pause obligations cleanly without breaking your streak.

### 🏆 Annual & Quarterly Goals (+600 / +150 XP)
Define annual objectives and ladder quarterly goals beneath them with linked quests and live custom metric targets (`at least` / `at most`), earning permanent XP milestones when achieved.

### 🧭 Decisions & Confidence Calibration
Record high-stakes decisions alongside your `0–100%` confidence prediction. Mepp automatically schedules a `+10 XP` 90-day review quest and charts your real-world hit rate across four calibration buckets.

### 📊 Custom Metrics & Task Impact Insights
Create structured Categories → Subcategories → Metrics (numbers, durations, currency, ratings, booleans, enums) and inspect how quest completion rates correlate with your real-world outcomes.

### 📓 Guided Weekly Reviews & On-Device Journal Reflection
Close each ISO week with automatically assembled stats across quests, XP, journal word count, mood valence, and goals — plus 100% offline Socratic reflection prompts that never leave your device.

### ⌚ Wear OS & Apple Watch Wrist Companions
Check your daily progress ring, streak flame, top quests, quick mood capture, and focus timer directly from your wrist via local peer-to-peer sync (`Wearable.DataClient` on Wear OS with zero internet permissions; `WatchConnectivity` on watchOS).

### ☁️ Portable Sealed Backups (`.meppbackup`)
Export and restore cross-platform `MEPPBK01` `.meppbackup` archives encrypted client-side with AES-256-GCM via Android Storage Access Framework (SAF), iOS Files, or your own personal Google Drive / iCloud Drive account.

---

## Transparent, Subscription-Free Pricing

- **Core App:** Free to use with every feature unlocked locally.
- **Complimentary Ad-Free Passes:** Watch one short sponsor clip anytime for **1 Hour** or **6 Hours** completely ad-free.
- **Mepp Ad-Free Lifetime Unlock (\$4.99):** Single one-time purchase via Google Play Billing or Apple StoreKit 2. Permanently disables all ad SDK initialization forever — zero recurring subscriptions.

---

## Open-Source Origin & Attribution

Mepp is adapted from the original open-source [**Mepp**](https://github.com/saw-your-packet/mepp){:rel="noopener noreferrer"} project created by [**saw-your-packet**](https://github.com/saw-your-packet){:rel="noopener noreferrer"} under the MIT License, ported and maintained for Android, Wear OS, iOS, and watchOS by **PEBCAK Consulting LLC**.

---

## Support & Resources

- [Support & User Hub]({{ "/mepp/support/" | relative_url }})
- [Privacy Policy]({{ "/mepp/privacy/" | relative_url }})
- [Terms of Service (EULA)]({{ "/mepp/terms/" | relative_url }})
- Direct Support Inquiries: [mepp@pebcakconsulting.com](mailto:mepp@pebcakconsulting.com) | [support@pebcakconsulting.com](mailto:support@pebcakconsulting.com)
- Security Disclosures: [mepp-security@pebcakconsulting.com](mailto:mepp-security@pebcakconsulting.com)

---

[Back to Home]({{ "/" | relative_url }}) &bull; [Support]({{ "/mepp/support/" | relative_url }}) &bull; [Privacy Policy]({{ "/mepp/privacy/" | relative_url }}) &bull; [Terms of Service]({{ "/mepp/terms/" | relative_url }})
