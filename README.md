# Topic 6.1 - Update Nested Settings

## Goal

This exercise shows that a nested object is not just a big bag of values.
When one small setting changes, the rest of the structure should stay intact.

## What you are training

- read nested object fields
- return a new nested object with one changed value
- check that unchanged values are still there

## Task

Finish `src/index.js`.

1. In `buildBaseSettings`, return the base settings object.
2. In `updateEmailNotifications`, change only `notifications.email`.
3. In `buildSettingsState`, return a state object that proves nothing else was lost.

