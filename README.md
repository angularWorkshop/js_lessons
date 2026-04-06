# Topic 8.1 - Toggle an Active Menu Item

## Goal

This exercise trains a very common interface state pattern:
exactly one menu item must stay active after an update.

## What you are training

- loop through DOM candidates and update them consistently
- toggle a class and an accessibility attribute from one rule
- read the active item back into a plain JavaScript object

## Task

Finish `src/index.js`.

1. In `setActiveMenuItem`, keep only the target item active.
2. In `readActiveMenuItem`, return the id and label of the current active item.
3. In `buildMenuState`, apply the update and return the final menu state.

## Run locally

```bash
npm install
npm run test
```
