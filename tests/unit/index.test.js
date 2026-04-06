import { describe, expect, it } from 'vitest';
import { countComments } from '../../src/index.js';

describe('count nested comments', () => {
  it('returns zero for an empty discussion', () => {
    expect(countComments([])).toBe(0);
  });

  it('counts comments across all nesting levels', () => {
    const comments = [
      {
        id: 1,
        children: [
          { id: 2, children: [] },
          { id: 3, children: [{ id: 4, children: [] }] },
        ],
      },
      { id: 5, children: [] },
    ];

    expect(countComments(comments)).toBe(5);
  });

  it('treats missing children as empty arrays', () => {
    expect(countComments([{ id: 1 }, { id: 2, children: [] }])).toBe(2);
  });
});
