# Capstone 3.1 - Safe Comment Feed

## Goal

This capstone combines security thinking with realtime-style external input.
You will sanitize comment text and accept only trusted incoming comment events.

## What you are training

- escape user text before it reaches HTML
- validate origin, type, and payload shape for external messages
- update feed state only after the input becomes trusted UI data

## Task

Finish `src/index.js`.

1. Implement `escapeHtml`.
2. Implement `applyIncomingComment`.
3. Reject invalid events and append safe comment data for valid ones.

## Run locally

```bash
npm install
npm run test
```
