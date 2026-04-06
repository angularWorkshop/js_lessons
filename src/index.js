'use strict';

import { formatDisplayName } from './format-name.js';
import { calculateProgressPercent } from './calculate-progress.js';

export function buildStudentCard(name, done, total) {
  const displayName = formatDisplayName(name);
  const progressPercent = calculateProgressPercent(done, total);

  return {
    displayName,
    progressPercent,
    label: `${displayName}: ${progressPercent}%`,
  };
}
