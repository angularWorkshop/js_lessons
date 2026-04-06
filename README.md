# Topic 5.3 - Filter Paid Orders and Sum the Total

## Goal

This exercise introduces a common two-step pattern:
keep only the needed records, then calculate one final total from them.

## What you are training

- use `filter()` to keep only matching items
- use `reduce()` to accumulate one number
- build a state object from filtered data

## Task

Finish `src/index.js`.

1. In `filterPaidOrders`, keep only orders with `status === 'paid'`.
2. In `calculatePaidTotal`, use `reduce()` to sum the amounts.
3. In `buildPaidOrdersState`, return the count, total, and label.
