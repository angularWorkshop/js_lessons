import { describe, expect, it } from 'vitest';
import {
  buildCheckpointState,
  canOpenCertificate,
  isPassingScore,
} from '../../src/index.js';

describe('reuse helper in checks', () => {
  it('checks the passing score threshold', () => {
    expect(isPassingScore(70)).toBe(true);
    expect(isPassingScore(69)).toBe(false);
  });

  it('unlocks the certificate only when both scores pass', () => {
    expect(canOpenCertificate(80, 72)).toBe(true);
    expect(canOpenCertificate(80, 60)).toBe(false);
  });

  it('builds a predictable checkpoint state object', () => {
    expect(buildCheckpointState(90, 75)).toEqual({
      theoryScore: 90,
      practiceScore: 75,
      theoryPassed: true,
      practicePassed: true,
      certificateUnlocked: true,
      label: 'Certificate unlocked',
    });
  });
});
