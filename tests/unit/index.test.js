import { describe, expect, it } from 'vitest';
import {
  buildStudentCardState,
  buildStudentFullName,
  calculateProgressPercent,
} from '../../src/index.js';

describe('split script into functions', () => {
  it('builds a full name from two parts', () => {
    expect(buildStudentFullName('Anna', 'Petrova')).toBe('Anna Petrova');
  });

  it('calculates a rounded progress percent', () => {
    expect(calculateProgressPercent(3, 4)).toBe(75);
  });

  it('returns 0 percent when totalLessons is 0', () => {
    expect(calculateProgressPercent(5, 0)).toBe(0);
  });

  it('builds a predictable student card state object', () => {
    expect(buildStudentCardState('Max', 'Lee', 6, 10)).toEqual({
      fullName: 'Max Lee',
      completedLessons: 6,
      totalLessons: 10,
      progressPercent: 60,
      hasStarted: true,
      statusLine: 'Max Lee: 60% completed',
    });
  });
});
