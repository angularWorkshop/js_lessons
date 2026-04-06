import { describe, expect, it } from 'vitest';
import { buildQualityGateSummary } from '../../src/index.js';

describe('quality gate summary', () => {
  it('returns canRelease true when all checks passed', () => {
    expect(
      buildQualityGateSummary([
        { name: 'test', passed: true },
        { name: 'build', passed: true },
      ]),
    ).toEqual({
      passedChecks: ['test', 'build'],
      failedChecks: [],
      canRelease: true,
    });
  });

  it('returns failed check names and canRelease false', () => {
    expect(
      buildQualityGateSummary([
        { name: 'test', passed: true },
        { name: 'lint', passed: false },
        { name: 'build', passed: false },
      ]),
    ).toEqual({
      passedChecks: ['test'],
      failedChecks: ['lint', 'build'],
      canRelease: false,
    });
  });

  it('keeps one stable shape even for an empty result list', () => {
    expect(buildQualityGateSummary([])).toEqual({
      passedChecks: [],
      failedChecks: [],
      canRelease: true,
    });
  });
});
