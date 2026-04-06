# Topic 11.2 - Session Draft Autosave

## Goal

This exercise treats a form draft as temporary user state that deserves protection.
You will save a draft to `sessionStorage`, restore it safely, and clear it when the form is done.

## What you are training

- normalize draft data before saving it
- restore session-based draft state with a fallback
- clear temporary storage when the draft is no longer needed

## Task

Finish `src/index.js`.

1. Implement `saveRegistrationDraft` so it stores a normalized JSON draft.
2. Implement `loadRegistrationDraft` so it restores the draft or returns defaults safely.
3. Implement `clearRegistrationDraft` so old drafts disappear after cleanup.

## Run locally

```bash
npm install
npm run test
```
