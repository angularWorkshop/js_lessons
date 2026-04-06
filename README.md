# Topic 12.2 - Notification Widget Inheritance

## Goal

This exercise teaches you to extend a base class without duplicating its logic.
You will build a child widget that reuses base state and adds notification-specific behavior.

## What you are training

- call `super` correctly in a child constructor
- add child-specific state and behavior on top of a base class
- reuse the base snapshot instead of rewriting it

## Task

Finish `src/index.js`.

1. In the child constructor, initialize the base widget through `super`.
2. Implement the method that marks a notification as read.
3. Extend the base snapshot with child-specific fields.

## Run locally

```bash
npm install
npm run test
```
