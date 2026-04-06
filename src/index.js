'use strict';

export function buildWorkflowScripts(baseScripts) {
  return {
    ...baseScripts,
    dev: 'vite',
    test: 'vitest run',
    build: 'vite build',
    check: 'npm run test && npm run build',
  };
}
