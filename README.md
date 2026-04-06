# Topic 10.2 - async/await Dashboard Fallback

## Goal

This exercise rewrites the loading scenario with async/await and one clear fallback path.
You will keep the success path linear and return a stable object on error.

## What you are training

- read async code as a linear scenario with `await`
- handle errors in one place with `try/catch`
- keep return shape stable in success and failure

## Task

Finish `src/index.js`.

1. Make `loadDashboardAsync` an async function.
2. Wait for the course and lessons with `await`.
3. In `catch`, return an `error` fallback object with empty data.

## Run locally

```bash
npm install
npm run test
```
