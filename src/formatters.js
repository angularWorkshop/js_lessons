'use strict';

export function formatCurrency(value) {
  return '$' + Number(value).toFixed(2);
}

export function formatDifficulty(level) {
  if (level === 'beginner') {
    return 'Beginner';
  }

  if (level === 'intermediate') {
    return 'Intermediate';
  }

  return 'Advanced';
}
