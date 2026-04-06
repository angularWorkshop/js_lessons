import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  currentStep,
  isFixed,
  repairState,
  scriptName,
  scriptPurpose,
  statusLine,
} from '../../src/index.js';

describe('source structure', () => {
  it('keeps strict mode as the first statement', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source.trimStart().startsWith("'use strict';")).toBe(true);
  });
});

describe('repaired script values', () => {
  it('stores the repaired constants', () => {
    expect(scriptName).toBe('Starter Repair');
    expect(scriptPurpose).toBe('Learn how a small script is organized.');
    expect(currentStep).toBe(2);
    expect(isFixed).toBe(true);
  });

  it('builds the final status line', () => {
    expect(statusLine).toBe('Starter Repair: step 2 is ready.');
  });

  it('returns the repaired state object', () => {
    expect(repairState).toEqual({
      strictMode: true,
      scriptName: 'Starter Repair',
      scriptPurpose: 'Learn how a small script is organized.',
      currentStep: 2,
      isFixed: true,
      statusLine: 'Starter Repair: step 2 is ready.',
    });
  });
});