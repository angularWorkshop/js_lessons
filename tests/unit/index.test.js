import { describe, expect, it } from 'vitest';
import {
  buildAverageDurationState,
  calculateAverageLessonMinutes,
  formatAverageMinutes,
} from '../../src/index.js';

describe('average duration formatting', () => {
  it('calculates an average number of minutes', () => {
    expect(calculateAverageLessonMinutes(55, 3)).toBe(55 / 3);
  });

  it('guards against division by zero', () => {
    expect(calculateAverageLessonMinutes(12, 0)).toBe(0);
  });

  it('formats the average with one decimal digit', () => {
    expect(formatAverageMinutes(55 / 3)).toBe('18.3 min');
  });

  it('builds a predictable average-duration state', () => {
    expect(buildAverageDurationState(55, 3)).toEqual({
      totalMinutes: 55,
      lessonsCount: 3,
      averageMinutes: 55 / 3,
      averageLabel: '18.3 min',
    });
  });
});
