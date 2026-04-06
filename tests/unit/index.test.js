import { describe, expect, it } from 'vitest';
import { calculateProgressPercent } from '../../src/calculate-progress.js';
import { formatDisplayName } from '../../src/format-name.js';
import { buildStudentCard } from '../../src/index.js';

describe('split utilities into modules', () => {
  it('formats the display name in a separate module', () => {
    expect(formatDisplayName('  aNNa  ')).toBe('Anna');
  });

  it('calculates the rounded progress percent in a separate module', () => {
    expect(calculateProgressPercent(7, 10)).toBe(70);
    expect(calculateProgressPercent(0, 0)).toBe(0);
  });

  it('builds the final student card from imported helpers', () => {
    expect(buildStudentCard('  aNNa  ', 7, 10)).toEqual({
      displayName: 'Anna',
      progressPercent: 70,
      label: 'Anna: 70%',
    });
  });
});
