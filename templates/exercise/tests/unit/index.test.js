import { describe, expect, it } from 'vitest';
import { placeholder } from '../../../src/index.js';

describe('template placeholder', () => {
  it('returns template marker', () => {
    expect(placeholder()).toBe('replace me in exercise branch');
  });
});
