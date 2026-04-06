# Topic 15.1 - Realtime Notifications State

## Goal

This exercise models a realtime channel as a stream of typed events.
You will update notification state differently depending on the message type.

## What you are training

- map incoming event types to explicit state updates
- keep notification state stable across different message kinds
- ignore unsupported events safely

## Task

Finish `src/index.js`.

1. Return the default state in `createNotificationState`.
2. In `applyRealtimeMessage`, handle `notification` events.
3. Handle `heartbeat` separately and ignore unsupported types.

## Run locally

```bash
npm install
npm run test
```
