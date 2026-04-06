'use strict';

export function buildQualityGateSummary(results) {
  const passedChecks = results.filter(item => item.passed).map(item => item.name);
  const failedChecks = results.filter(item => !item.passed).map(item => item.name);

  return {
    passedChecks,
    failedChecks,
    canRelease: failedChecks.length === 0,
  };
}
