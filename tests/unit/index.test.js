import { describe, expect, it } from 'vitest';
import {
  createFallbackDraft,
  parseLessonDraft,
  restoreDraftTitle,
} from '../../src/index.js';

describe('safe lesson draft parser', () => {
  it('returns a normalized draft for valid JSON', () => {
    const result = parseLessonDraft(
      JSON.stringify({
        title: 'Section 11 draft',
        lessons: ['A', 'B'],
        status: 'ready',
      }),
    );

    expect(result).toEqual({
      title: 'Section 11 draft',
      lessons: ['A', 'B'],
      status: 'ready',
    });
  });

  it('returns a fallback draft for broken JSON', () => {
    expect(parseLessonDraft('{ broken json')).toEqual(createFallbackDraft());
  });

  it('returns a fallback draft for invalid object shape', () => {
    const result = parseLessonDraft(
      JSON.stringify({
        title: 42,
        lessons: 'not-an-array',
        status: 'draft',
      }),
    );

    expect(result).toEqual(createFallbackDraft());
    expect(restoreDraftTitle('{ broken json')).toBe('Untitled draft');
  });
});
