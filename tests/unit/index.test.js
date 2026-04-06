import { describe, expect, it } from 'vitest';
import {
  buildProgressLabel,
  calculateRemainingLessons,
} from '../../src/progress.js';
import { buildStudentCard } from '../../src/student-card.js';
import { buildWorkshopDashboardState } from '../../src/index.js';

describe('compose a mini project from modules', () => {
  it('calculates remaining lessons and a readable label', () => {
    expect(calculateRemainingLessons(4, 10)).toBe(6);
    expect(buildProgressLabel(4, 10)).toBe('Progress: 4/10');
  });

  it('builds a student card from several imported modules', () => {
    expect(buildStudentCard('  Anna  ', 4, 10)).toEqual({
      studentName: 'Anna',
      track: 'javascript',
      completedLessons: 4,
      totalLessons: 10,
      remainingLessons: 6,
      label: 'Progress: 4/10',
    });
  });

  it('builds the final dashboard state from the card module', () => {
    expect(buildWorkshopDashboardState('  Anna  ', 4, 10)).toEqual({
      card: {
        studentName: 'Anna',
        track: 'javascript',
        completedLessons: 4,
        totalLessons: 10,
        remainingLessons: 6,
        label: 'Progress: 4/10',
      },
      readyToContinue: true,
    });
  });
});
