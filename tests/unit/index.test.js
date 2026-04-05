import { describe, expect, it } from 'vitest';
import { hello } from '../../src/index.js';

describe('baseline', () => {
  it('has working test runner', () => {
    expect(hello()).toBe('js_lessons baseline');
  });
});
