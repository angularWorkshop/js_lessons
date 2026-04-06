import { describe, expect, it } from 'vitest';
import {
  buildLessonsIndex,
  buildLookupState,
  uniqueTags,
} from '../../src/index.js';

const tags = ['objects', 'json', 'objects'];
const lessons = [
  { id: 'js-1', title: 'Objects Basics' },
  { id: 'js-2', title: 'JSON Basics' },
];

describe('set and map basics', () => {
  it('removes duplicate tags with Set', () => {
    expect(uniqueTags(tags)).toEqual(['objects', 'json']);
  });

  it('builds a Map index for quick lookup by id', () => {
    const index = buildLessonsIndex(lessons);

    expect(index).toBeInstanceOf(Map);
    expect(index.get('js-2')).toBe('JSON Basics');
  });

  it('builds a readable lookup state', () => {
    expect(buildLookupState(tags, lessons)).toEqual({
      uniqueTags: ['objects', 'json'],
      uniqueCount: 2,
      titleById: 'JSON Basics',
    });
  });
});
