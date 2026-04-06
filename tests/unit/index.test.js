import { describe, expect, it } from 'vitest';
import { createIdGenerator } from '../../src/index.js';

describe('id generator', () => {
  it('starts from the default value', () => {
    const generator = createIdGenerator('lesson');

    expect(generator.next().value).toBe('lesson-1');
    expect(generator.next().value).toBe('lesson-2');
  });

  it('respects a custom start value', () => {
    const generator = createIdGenerator('topic', 10);

    expect(generator.next().value).toBe('topic-10');
    expect(generator.next().value).toBe('topic-11');
  });

  it('keeps the counter between calls', () => {
    const generator = createIdGenerator('id', 3);
    generator.next();
    generator.next();

    expect(generator.next().value).toBe('id-5');
  });
});
