# Japan Trip 2026

A personalized travel companion app built for a Japan trip. Designed to work offline so it's useful exactly when you need it — on the ground, without relying on data.

## Intent

Most travel apps are built around discovery. This one is built around a plan that already exists. The itinerary is baked directly into the app as structured data, so there's no login, no sync, no account — just the trip.

It's meant to be shared with travel companions so everyone has the same information in their pocket.

## Features

- **Today view** — the current day's itinerary at a glance, including bookings, places to see, food, and logistics
- **Destination pages** — browse all days by city (Tokyo, Mt. Fuji, Kyoto, Yokohama)
- **Day detail pages** — full breakdown of any day: bookings with confirmation numbers, notes, travel logistics
- **Offline-first** — installable as a PWA; works without an internet connection once loaded
- **No backend** — the itinerary lives in the app itself; nothing to sign into or sync

## Stack

- React + Vite
- React Router (HashRouter for static hosting compatibility)
- vite-plugin-pwa for service worker and offline support
- Deployed to GitHub Pages at [vientang.github.io/japan-trip](https://vientang.github.io/japan-trip/)

## Install on your phone

Open the deployed URL in your mobile browser and use **Add to Home Screen**. The app will install like a native app and work offline from that point on. Updates are pulled automatically in the background when a new version is deployed.

## Local development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```
