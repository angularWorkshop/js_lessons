# Topic 13.1 - Flatten Menu Paths

## Goal

This exercise uses recursion to turn a nested menu tree into a flat list of paths.
You will carry parent path context into every child node.

## What you are training

- accumulate context while traversing a tree
- build flat output from nested input
- preserve traversal order in a recursive solution

## Task

Finish `src/index.js`.

1. Build the current path from the parent path and the current item slug.
2. Add the current path to the result.
3. Recurse into children and merge their paths into the same array.

## Run locally

```bash
npm install
npm run test
```
