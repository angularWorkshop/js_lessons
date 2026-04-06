import { describe, expect, it } from 'vitest';
import { buildWorkflowScripts } from '../../src/index.js';

describe('workflow scripts map', () => {
  it('preserves existing scripts', () => {
    expect(buildWorkflowScripts({ preview: 'vite preview' }).preview).toBe('vite preview');
  });

  it('adds the standard workflow commands', () => {
    expect(buildWorkflowScripts({})).toEqual({
      dev: 'vite',
      test: 'vitest run',
      build: 'vite build',
      check: 'npm run test && npm run build',
    });
  });

  it('overrides conflicting workflow commands with the standard contract', () => {
    expect(buildWorkflowScripts({ test: 'jest' })).toEqual({
      test: 'vitest run',
      dev: 'vite',
      build: 'vite build',
      check: 'npm run test && npm run build',
    });
  });
});
