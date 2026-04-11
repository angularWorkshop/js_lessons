import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

function sameObject(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

export async function validateAssignment() {
  const sourcePath = path.resolve(process.cwd(), 'src', 'index.js');
  const source = await fs.readFile(sourcePath, 'utf8');
  const moduleUrl = `${pathToFileURL(sourcePath).href}?t=${Date.now()}`;
  const module = await import(moduleUrl);
  const failures = [];

  if (!source.trimStart().startsWith("'use strict';")) {
    failures.push("Keep 'use strict'; as the first statement in src/index.js.");
  }

  if (module.scriptName !== 'Starter Repair') {
    failures.push("scriptName should be 'Starter Repair'.");
  }

  if (module.scriptPurpose !== 'Learn how a small script is organized.') {
    failures.push("scriptPurpose should be 'Learn how a small script is organized.'.");
  }

  if (module.currentStep !== 2) {
    failures.push('currentStep should be 2.');
  }

  if (module.isFixed !== true) {
    failures.push('isFixed should be true.');
  }

  if (module.statusLine !== 'Starter Repair: step 2 is ready.') {
    failures.push("statusLine should be 'Starter Repair: step 2 is ready.'.");
  }

  const expectedState = {
    strictMode: true,
    scriptName: 'Starter Repair',
    scriptPurpose: 'Learn how a small script is organized.',
    currentStep: 2,
    isFixed: true,
    statusLine: 'Starter Repair: step 2 is ready.',
  };

  if (!sameObject(module.repairState, expectedState)) {
    failures.push('repairState should match the final expected object.');
  }

  return {
    failures,
    summary: 'Custom validator: OK',
  };
}
