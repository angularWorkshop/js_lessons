# Topic 9.1 - Todo Event Delegation

## Goal

This exercise shows why one listener on the list container can be enough for many items.
You will read the clicked target, find the related todo, and keep DOM and data in sync.

## What you are training

- use one click listener on a shared container
- find the actual action through `event.target`
- update both the todo array and the DOM item state

## Task

Finish `src/index.js`.

1. In `syncTodoItemUI`, update the item class, status text, and button label from `todo.done`.
2. In `attachTodoDelegation`, add one click listener to the list and toggle the correct todo.
3. In `buildTodoSnapshot`, replay a sequence of delegated clicks and return the final summary.

## Run locally

```bash
npm install
npm run test
```
