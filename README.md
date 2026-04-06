# Topic 10.2 - Promise Dashboard Chain

## Goal

This exercise turns dependent async steps into one readable Promise chain.
You will load a course, then its lessons, and return one final summary object.

## What you are training

- describe async order with `then`
- pass results from one step to the next
- return one predictable summary from a Promise chain

## Task

Finish `src/index.js`.

1. In `loadDashboardWithPromise`, call `api.loadCourse()` first.
2. After the course is loaded, call `api.loadLessons(course.id)`.
3. Return one summary object with the course title, lesson count, and `ready` status.

## Run locally

```bash
npm install
npm run test
```
