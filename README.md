# Topic 15.1 - File Preview State

## Goal

This exercise turns a raw browser file object into a predictable UI model.
You will format the file size and decide whether preview data should be shown.

## What you are training

- convert raw file properties into a UI-friendly state
- decide whether preview is allowed from the MIME type
- keep one stable state shape for different file types

## Task

Finish `src/index.js`.

1. Implement `formatFileSize(bytes)`.
2. Implement `buildFilePreviewState(file, createObjectUrl)`.
3. Create preview URLs only for image files.

## Run locally

```bash
npm install
npm run test
```
