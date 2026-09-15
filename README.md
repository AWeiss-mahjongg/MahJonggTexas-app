# MahJonggTexas App

Expo (React Native) + TypeScript companion for [MahJonggTexas.com](https://mahjonggtexas.com). Managed workflow, Expo Router tabs, stock Expo modules only — no backend, EAS, ads, or analytics.

## Run with Expo Go

```bash
cd MahJonggTexas-app
npm install
npx expo start
```

Scan the QR code with **Expo Go** (Android) or the Camera app (iOS). Same Wi‑Fi as your computer helps.

### Web preview

```bash
npx expo start --web
```

Opens a browser tab (often `http://localhost:8081`).

## Tabs

| Tab | What it does |
|-----|----------------|
| **Tournaments** | Seeded event list (`constants/tournaments.ts`) — Paw Jongg, Kingsland 4th Annual, plus extras scraped from the site. Edit that file to update. Links to the website + YouTube. |
| **Watch** | Opens the [MahJongg Texas YouTube](https://www.youtube.com/@MahJonggTexas) channel via Linking / in-app browser. |
| **Shop** | Deep links only: Amazon storefront, Apohl Atelier / word search store, optional book short link. |
| **Join** | Name, email, consent checkbox. Submit via **mailto** (blank To — fill recipient) or **Share / export** (system share / clipboard on web). No server. |

## Customize

- Events: `constants/tournaments.ts`
- URLs: `constants/links.ts`
- Colors: `constants/Colors.ts` (deep teal + cream)

## Stack

Expo SDK 57 · Expo Router · TypeScript · `expo-linking` · `expo-web-browser` · `expo-sharing`
