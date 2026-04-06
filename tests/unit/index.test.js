import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  consoleLine,
  courseName,
  firstScriptState,
  introMessage,
  isReady,
  lessonNumber,
  studentName,
} from '../../src/index.js';

describe('source structure', () => {
  it('keeps strict mode as the first statement', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source.trimStart().startsWith("'use strict';")).toBe(true);
  });
});

describe('first script values', () => {
  it('stores the main constants of the script', () => {
    expect(courseName).toBe('JavaScript Start');
    expect(studentName).toBe('Mila');
    expect(lessonNumber).toBe(1);
    expect(isReady).toBe(true);
  });

  it('builds readable output lines', () => {
    expect(introMessage).toBe('Hello, Mila!');
    expect(consoleLine).toBe('Hello, Mila! Lesson 1 is ready.');
  });

  it('returns the complete final state object', () => {
    expect(firstScriptState).toEqual({
      strictMode: true,
      courseName: 'JavaScript Start',
      studentName: 'Mila',
      lessonNumber: 1,
      isReady: true,
      introMessage: 'Hello, Mila!',
      consoleLine: 'Hello, Mila! Lesson 1 is ready.',
    });
  });
});