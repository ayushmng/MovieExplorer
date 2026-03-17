# Movie Explorer 🎬

## 1. Architecture Overview

The project follows a modular React Native (Expo) structure:

- `components/` – Reusable UI components (cards, buttons, video, carousel, etc.)
- `screens/` – App screens (MainScreen, MovieDetails, SearchScreen, Favorites, SplashScreen)
- `navigation/` – Navigation setup using stack navigator
- `store/` – Global state management (favorites) using Zustand
- `hooks/` – Custom hooks (e.g., theme handling)
- `themes/` – Theme configuration and context
- `constants/` – Static/mock data and strings
- `types/` – TypeScript type definitions for mock data and theme
- `utils/` – Helper functions (e.g., rating utilities)

---

## 2. Libraries Used

- `expo` – App framework and development environment
- `react-native` – Core mobile UI framework
- `@react-navigation/native` & `native-stack` – Navigation between screens
- `zustand` – Lightweight state management
- `@react-native-async-storage/async-storage` – Local storage
- `react-native-reanimated` & `gesture-handler` – Animations & gestures
- `react-native-reanimated-carousel` – Carousel UI
- `lottie-react-native` – Animations (e.g., splash/loading)
- `expo-video` – Video playback support
- `react-native-vector-icons` / `@expo/vector-icons` – Icons

---

## 3. API Source

This project **does not use a real API**.  
All movie data is mocked inside:
`src/constants/data.ts`

---

## 4. Setup & Run

### Prerequisites

- Node.js installed
- Expo CLI (optional)

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the project:
   ```bash
   npm start
   ```
3. Target the OS:
   You can press a for (Android) or i for (iOS) in the Expo terminal after starting the project.
