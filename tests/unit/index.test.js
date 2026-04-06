import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { declarationsReport } from '../../src/index.js';

describe('declaration repair', () => {
  it('keeps strict mode as the first statement', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source.trimStart().startsWith("'use strict';")).toBe(true);
  });

  it('uses modern declarations in the right places', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source).toMatch(/export const courseName =/);
    expect(source).toMatch(/export const mentorName =/);
    expect(source).toMatch(/export let completedTasks =/);
    expect(source).toMatch(/export let screenStatus =/);
    expect(source).not.toMatch(/\bvar\b/);
  });

  it('keeps the final runtime report correct', () => {
    expect(declarationsReport).toEqual({
      courseName: 'JavaScript Basics',
      mentorName: 'Denis',
      completedTasks: 2,
      screenStatus: 'ready',
      usesVar: false,
    });
  });
});