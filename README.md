# Topic 11.2 - Persist Theme and Filters

## Goal

This exercise teaches you to treat browser storage as simple UI memory.
You will normalize preferences before saving and restore them safely with a fallback.

## What you are training

- save objects to `localStorage` through JSON
- restore browser preferences defensively
- normalize theme and filter values before using them

## Task

Finish `src/index.js`.

1. In `savePreferences`, normalize the incoming value and store it as JSON.
2. In `loadPreferences`, read the storage key and restore preferences safely.
3. Return stable defaults when the key is missing or its value is broken.

## Run locally

```bash
npm install
npm run test
```
