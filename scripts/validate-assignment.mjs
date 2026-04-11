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

  if (module.courseName !== 'JavaScript Start') {
    failures.push("courseName should be 'JavaScript Start'.");
  }

  if (module.studentName !== 'Mila') {
    failures.push("studentName should be 'Mila'.");
  }

  if (module.lessonNumber !== 1) {
    failures.push('lessonNumber should be 1.');
  }

  if (module.isReady !== true) {
    failures.push('isReady should be true.');
  }

  if (module.introMessage !== 'Hello, Mila!') {
    failures.push("introMessage should be 'Hello, Mila!'.");
  }

  if (module.consoleLine !== 'Hello, Mila! Lesson 1 is ready.') {
    failures.push("consoleLine should be 'Hello, Mila! Lesson 1 is ready.'.");
  }

  const expectedState = {
    strictMode: true,
    courseName: 'JavaScript Start',
    studentName: 'Mila',
    lessonNumber: 1,
    isReady: true,
    introMessage: 'Hello, Mila!',
    consoleLine: 'Hello, Mila! Lesson 1 is ready.',
  };

  if (!sameObject(module.firstScriptState, expectedState)) {
    failures.push('firstScriptState should match the final expected object.');
  }

  return {
    failures,
    summary: 'Custom validator: OK',
  };
}
