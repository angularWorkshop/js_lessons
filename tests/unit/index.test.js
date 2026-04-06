import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  completedSteps,
  learningTrack,
  profileLine,
  studentCity,
  studentName,
  userCardState,
} from '../../src/index.js';

describe('declaration style', () => {
  it('keeps strict mode as the first statement', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source.trimStart().startsWith("'use strict';")).toBe(true);
  });

  it('uses const and let in the right places', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source).toMatch(/export const studentName =/);
    expect(source).toMatch(/export const studentCity =/);
    expect(source).toMatch(/export const learningTrack =/);
    expect(source).toMatch(/export let completedSteps =/);
    expect(source).not.toMatch(/\bvar\b/);
  });
});

describe('user card values', () => {
  it('stores the expected values', () => {
    expect(studentName).toBe('Mila');
    expect(studentCity).toBe('Kazan');
    expect(learningTrack).toBe('JavaScript Basics');
    expect(completedSteps).toBe(1);
    expect(profileLine).toBe('Mila studies JavaScript Basics.');
  });

  it('returns the final card state', () => {
    expect(userCardState).toEqual({
      studentName: 'Mila',
      studentCity: 'Kazan',
      learningTrack: 'JavaScript Basics',
      completedSteps: 1,
      profileLine: 'Mila studies JavaScript Basics.',
      isProfileReady: true,
    });
  });
});