# Topic 10.3 - Fetch JSON Success State

## Goal

This exercise walks through the full path from fetch response to parsed JSON and final app state.
You will validate the response, read JSON, and build a success result for the UI.

## What you are training

- wait for a fetch response
- validate `response.ok` before parsing
- convert parsed server data into clean app state

## Task

Finish `src/index.js`.

1. Call `fetchImpl('/api/lessons')` and wait for the response.
2. Throw an error when `response.ok` is false.
3. Parse JSON and return a success state with lesson titles and a message.

## Run locally

```bash
npm install
npm run test
```
