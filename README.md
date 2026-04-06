# Topic 6.3 - Save and Restore Data with JSON

## Goal

This exercise introduces JSON as a simple bridge between an object and a string.
That matters when data needs to be stored or transferred.

## What you are training

- turn an object into a JSON string
- restore the same data back into an object
- build one state object from serialized and restored data

## Task

Finish `src/index.js`.

1. In `serializeUserProgress`, return a JSON string.
2. In `restoreUserProgress`, parse the JSON string back into an object.
3. In `buildProgressSnapshotState`, return the serialized string and key restored values.

