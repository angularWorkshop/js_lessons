# Topic 9.2 - Search Form State

## Goal

This exercise treats search not as one filter call, but as a small UI state machine.
You will distinguish invalid, empty, success, and error states and reflect them in the DOM.

## What you are training

- normalize search input before validation
- build explicit UI states from one query
- keep status text and result count aligned with state

## Task

Finish `src/index.js`.

1. In `normalizeSearchQuery`, trim the raw value and convert it to lower case.
2. In `createSearchState`, return `invalid`, `empty`, `success`, or `error` with a helpful message.
3. In `syncSearchUI`, write the current state into the DOM.

## Run locally

```bash
npm install
npm run test
```
