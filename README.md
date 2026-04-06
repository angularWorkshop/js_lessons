# Topic 14.2 - Safe Comment Rendering

## Goal

This exercise teaches you to treat user input as data, not raw HTML.
You will escape dangerous characters before building a comment card string.

## What you are training

- escape special HTML characters
- reuse safe text instead of raw user input
- keep output readable for normal text and safe for dangerous text

## Task

Finish `src/index.js`.

1. Escape &, <, >, ", and ' in `escapeHtml`.
2. Use the escaped string in `renderCommentCard`.
3. Keep the final HTML string shape stable.

## Run locally

```bash
npm install
npm run test
```
