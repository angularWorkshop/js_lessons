# Topic 6.2 - Fix a Shared Reference Bug

## Goal

This exercise teaches one of the most common object bugs:
you think you created a draft, but you are still editing the original object.

## What you are training

- notice when two variables point to the same object
- create a shallow copy with spread
- prove through tests that the original was not mutated

## Task

Finish `src/index.js`.

1. In `createEditableProfile`, create a copy instead of returning the same object.
2. In `renameDraftProfile`, change only the draft name.
3. In `buildReferenceBugState`, show the original name, draft name, and whether both variables point to the same object.

