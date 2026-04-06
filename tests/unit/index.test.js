import { describe, expect, it } from 'vitest';
import { formatCurrency, formatDifficulty } from '../../src/formatters.js';
import { canShowCertificate, resolveEnrollmentStatus } from '../../src/rules.js';
import { buildWorkshopReport } from '../../src/index.js';

describe('workshop report modules', () => {
  it('formats currency and difficulty labels', () => {
    expect(formatCurrency(49)).toBe('$49.00');
    expect(formatDifficulty('beginner')).toBe('Beginner');
    expect(formatDifficulty('advanced')).toBe('Advanced');
  });

  it('applies enrollment and certificate rules', () => {
    expect(resolveEnrollmentStatus({ isPublished: true, seatsLeft: 5 })).toBe('open');
    expect(resolveEnrollmentStatus({ isPublished: false, seatsLeft: 5 })).toBe('closed');
    expect(canShowCertificate({ completedLessons: 8, totalLessons: 8, finalScore: 72 })).toBe(true);
    expect(canShowCertificate({ completedLessons: 7, totalLessons: 8, finalScore: 72 })).toBe(false);
  });

  it('builds the final workshop report from separate modules', () => {
    expect(
      buildWorkshopReport(
        {
          title: 'JS Basics',
          price: 49,
          level: 'intermediate',
          isPublished: true,
          seatsLeft: 2,
        },
        {
          completedLessons: 10,
          totalLessons: 10,
          finalScore: 88,
        },
      ),
    ).toEqual({
      title: 'JS Basics',
      priceLabel: '$49.00',
      difficultyLabel: 'Intermediate',
      enrollmentStatus: 'open',
      canGetCertificate: true,
    });
  });
});
