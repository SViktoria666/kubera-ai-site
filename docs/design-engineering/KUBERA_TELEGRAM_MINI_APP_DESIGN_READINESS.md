# Telegram Mini App Design Readiness

Status: architecture ready for the first bounded Mini App; runtime implementation not started.

## Primary foundation

Use official Telegram Web Apps documentation as the platform contract and validate `@tma.js/sdk-react`/TMA.js as the React bridge. Use TelegramUI as a component/reference source only after checking the exact package/version and bundle behavior. Do not treat ordinary browser rendering as proof of Telegram behavior.

Sources:

- https://core.telegram.org/bots/webapps
- https://core.telegram.org/api/bots/webapps
- https://github.com/telegram-mini-apps
- https://github.com/telegram-mini-apps-dev/TelegramUI
- https://github.com/Telegram-Mini-Apps/reactjs-template

## Required adapter contract

The first app needs a small `TelegramPlatformAdapter` that exposes:

- launch/init data boundary and server validation ownership;
- Telegram theme params and dark/light color scheme;
- viewport height/width, expansion, fullscreen, stability, and safe-area insets;
- Back Button show/hide/click handling;
- Main Button/secondary controls only when the task actually needs them;
- haptic feedback behind a capability check;
- dialog/alert/confirm capability checks;
- outside-Telegram mock for local browser QA;
- platform classification for iOS, Android, and Desktop Telegram;
- payment/Stars UI guidance without embedding payment logic in primitives.

## First-week component priority

### NOW — required before the first app

1. safe-area and viewport tokens;
2. 44px minimum touch targets and focus/keyboard fallback;
3. mobile typography scale and text truncation rules;
4. app shell and top bar with Back Button integration;
5. bottom navigation;
6. sheets/drawers and modal scrims;
7. cards, lists, status chips, empty/loading states;
8. search and filter controls;
9. forms, validation, toast, and error states;
10. theme adapter plus outside-Telegram mock;
11. Playwright viewport coverage and no-overflow checks.

### NEXT

- favorites and galleries;
- profile/onboarding patterns;
- upload/media progress;
- Telegram Main Button and haptics policy;
- Stars/payment presentation guidance;
- reduced-motion and low-end Android performance profile.

### LATER

- advanced gestures;
- shared registry distribution;
- Telegram-specific Design Studio frame;
- cross-platform visual baseline corpus.

## Platform rules

- iOS: respect bottom safe area, keyboard/viewport changes, swipe/back expectations, and reduced motion.
- Android: test keyboard resize, back navigation, WebView performance, and haptic availability.
- Desktop Telegram: do not assume mobile bottom navigation is the best layout; preserve keyboard and pointer access.
- Outside Telegram: show a clear mock mode and never require Telegram globals for basic component rendering.

## Performance budget

- no continuous shader/particle loop for ordinary app UI;
- no more than a small number of simultaneous optical glass lenses on a mobile viewport;
- measure first load, interaction latency, scroll, and memory on a representative low-end Android device/WebView;
- prefer CSS/SVG and static lighting over canvas/WebGL;
- keep loading and error states useful without decorative effects.

## Acceptance checklist

- theme adapter receives Telegram colors and maps them to semantic roles;
- safe-area padding is visible in an emulator/mock frame;
- Back Button state follows navigation state;
- all touch targets meet the project rule;
- sheets do not hide behind the keyboard or safe area;
- contrast/focus works in dark and light Telegram themes;
- Android/iOS/Desktop test notes are attached;
- no production Telegram bot/token/webhook changes are part of the UI phase.
