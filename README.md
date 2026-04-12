# expo-template

A starter [Expo](https://expo.dev) app using **Expo Router**, **HeroUI Native**, and **Uniwind** (Tailwind CSS on native). It targets the **New Architecture**, **React 19**, and **React Compiler** (see `app.json` experiments).

## Prerequisites

- [Bun](https://bun.sh) (this repo uses `bun.lock`; do not use npm)
- For device builds: Xcode (iOS), Android Studio / SDK (Android), or [Expo Go](https://expo.dev/go) for quick iteration

## Setup

```bash
bun install
```

## Scripts

| Command | Description |
|--------|-------------|
| `bun run start` | Start the Metro dev server (`expo start`) |
| `bun run ios` | Open the iOS simulator |
| `bun run android` | Open an Android emulator or device |
| `bun run web` | Run the web build |
| `bun run lint` | Run ESLint (`expo lint`) |
| `bun run reset-project` | Reset scaffolded files (see `scripts/reset-project.js`) |

## Project layout

- **`src/app/`** — File-based routes ([Expo Router](https://docs.expo.dev/router/introduction/)). `src/app/_layout.tsx` wraps the app with `HeroUINativeProvider` and `GestureHandlerRootView`.
- **`global.css`** — Tailwind / Uniwind entry; theme tokens and HeroUI styles are imported here.
- **`utils/`** — Shared helpers (e.g. `formatDate`, `capitalize`).
- **`src/components/`** — Reusable UI components.

Path alias: imports from `@/` resolve to the repo root (see `tsconfig.json`).

## Stack (high level)

- **UI:** HeroUI Native, `@expo/vector-icons`, React Native SVG
- **Styling:** Tailwind CSS 4 + Uniwind (`metro.config.js` wires CSS and generates `src/app/uniwind-types.d.ts`)
- **Navigation:** Expo Router (`Stack` in root layout)
- **Storage:** `react-native-mmkv`
- **Lists:** `@shopify/flash-list`
- **Sheets / gestures:** `@gorhom/bottom-sheet`, Reanimated, Gesture Handler

## Configuration

- **App identity & deep linking:** `app.json` (`name`, `slug`, `scheme`, iOS `bundleIdentifier`, Android `package`). Change these when you fork the template.
- **Typed routes:** Enabled via `experiments.typedRoutes` in `app.json`.
