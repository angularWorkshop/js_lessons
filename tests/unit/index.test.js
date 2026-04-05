import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildLessonHandlers, normalizeLegacyStudents } from '../../src/index.js';

describe('normalizeLegacyStudents', () => {
  it('normalizes name, track and score', () => {
    const result = normalizeLegacyStudents([
      { name: '  Alice  ', track: 'Frontend', score: '42' },
      { name: 'Bob', track: undefined, score: 5 },
    ]);

    expect(result).toEqual([
      { id: 'student-1', name: 'Alice', track: 'frontend', score: 42 },
      { id: 'student-2', name: 'Bob', track: 'general', score: 5 },
    ]);
  });

  it('falls back to 0 for non-numeric scores', () => {
    const result = normalizeLegacyStudents([{ name: 'Eve', track: 'QA', score: 'oops' }]);
    expect(result[0].score).toBe(0);
  });
});

describe('buildLessonHandlers', () => {
  it('creates a handler per title', () => {
    const handlers = buildLessonHandlers(['Intro', 'Variables', 'Functions']);
    expect(handlers).toHaveLength(3);
  });

  it('keeps stable index and title for each handler', () => {
    const handlers = buildLessonHandlers(['Intro', 'Variables', 'Functions']);

    expect(handlers[0]()).toBe('[0] Intro');
    expect(handlers[1]()).toBe('[1] Variables');
    expect(handlers[2]()).toBe('[2] Functions');
  });
});

describe('style guard', () => {
  it('does not use var in final solution', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source).not.toMatch(/\bvar\b/);
  });
});
