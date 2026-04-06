'use strict';

export function calculateProgressPercent(done, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((done / total) * 100);
}
