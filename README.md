# Topic 15.2 - Safe postMessage Filter

## Goal

This exercise treats postMessage as external input that must be validated.
You will filter messages by origin and type before applying a theme update.

## What you are training

- check origin before trusting a message
- validate message shape before changing state
- keep a stable result contract for accepted and rejected messages

## Task

Finish `src/index.js`.

1. Reject messages from the wrong origin.
2. Reject messages with unsupported types or invalid theme payloads.
3. Return a stable result object for both accepted and rejected messages.

## Run locally

```bash
npm install
npm run test
```
