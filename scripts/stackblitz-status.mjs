import { existsSync, promises as fs, watch } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { resetTests, runRegisteredTests } from '../tests/helpers/mini-vitest.js';

const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

const ROOTS_TO_WATCH = ['src', 'tests', 'scripts'];
const STANDALONE_TARGETS = ['README.md', 'vitest.config.js', 'package.json', '.stackblitzrc'];
const TEMP_TEST_FILE = path.resolve(process.cwd(), 'tests', 'unit', '.stackblitz-index.test.mjs');
const RUN_ONCE = process.env.STACKBLITZ_STATUS_ONCE === '1';

let runNumber = 0;
let isRunning = false;
let rerunRequested = false;
let debounceTimer = null;
let activeWatchers = [];

function colorize(color, text) {
  return `${COLORS[color]}${text}${COLORS.reset}`;
}

function printDivider() {
  console.log(colorize('dim', '------------------------------------------------------------'));
}

function printHeading(text, color) {
  printDivider();
  console.log(colorize(color, text));
  printDivider();
}

async function collectWatchTargets() {
  const targets = new Set();

  for (const filePath of STANDALONE_TARGETS) {
    const fullPath = path.resolve(process.cwd(), filePath);
    if (existsSync(fullPath)) {
      targets.add(fullPath);
    }
  }

  async function walk(currentPath) {
    let stats;
    try {
      stats = await fs.stat(currentPath);
    } catch {
      return;
    }

    if (stats.isFile()) {
      if (currentPath !== TEMP_TEST_FILE) {
        targets.add(currentPath);
      }
      return;
    }

    targets.add(currentPath);

    if (!stats.isDirectory()) {
      return;
    }

    const entries = await fs.readdir(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      const nextPath = path.join(currentPath, entry.name);
      await walk(nextPath);
    }
  }

  for (const root of ROOTS_TO_WATCH) {
    const fullPath = path.resolve(process.cwd(), root);
    if (existsSync(fullPath)) {
      await walk(fullPath);
    }
  }

  return [...targets];
}

async function refreshWatchers() {
  for (const watcher of activeWatchers) {
    watcher.close();
  }

  activeWatchers = [];
  const targets = await collectWatchTargets();

  for (const target of targets) {
    try {
      const watcher = watch(target, () => {
        void refreshWatchers();
        scheduleChecks(`change in ${path.relative(process.cwd(), target) || '.'}`);
      });
      activeWatchers.push(watcher);
    } catch {
      // Ignore paths that cannot be watched in the current environment.
    }
  }

  return targets;
}

async function runCustomValidation() {
  const validatorPath = path.resolve(process.cwd(), 'scripts', 'validate-assignment.mjs');

  if (!existsSync(validatorPath)) {
    return null;
  }

  const validatorUrl = `${pathToFileURL(validatorPath).href}?t=${Date.now()}`;
  const validatorModule = await import(validatorUrl);

  if (typeof validatorModule.validateAssignment !== 'function') {
    return {
      code: 1,
      output: 'validateAssignment export is missing in scripts/validate-assignment.mjs',
    };
  }

  try {
    const result = await validatorModule.validateAssignment();
    const failures = Array.isArray(result?.failures) ? result.failures : [];

    if (failures.length > 0) {
      return {
        code: 1,
        output: failures.map(item => `- ${item}`).join('\n'),
      };
    }

    return {
      code: 0,
      output: result?.summary ?? 'Custom validator: OK',
    };
  } catch (error) {
    return {
      code: 1,
      output: String(error?.stack ?? error?.message ?? error),
    };
  }
}

async function executeChecks(reason) {
  if (isRunning) {
    rerunRequested = true;
    return;
  }

  isRunning = true;
  runNumber += 1;

  printHeading(`Checking exercise status (#${runNumber})`, 'cyan');
  console.log(colorize('dim', `Reason: ${reason}`));

  let tests = await runCustomValidation();

  if (!tests) {
    try {
      resetTests();
      const stamp = Date.now();
      const unitDir = path.resolve(process.cwd(), 'tests', 'unit');
      const originalTestPath = path.join(unitDir, 'index.test.js');
      const originalSource = await fs.readFile(originalTestPath, 'utf8');
      const transformedSource = originalSource
        .replace(/from\s+['"]vitest['"]/g, "from '../helpers/mini-vitest.js'")
        .replace(/from\s+['"](\.\.\/\.\.\/src\/[^'\"?]+)['"]/g, (_, specifier) => `from '${specifier}?t=${stamp}'`)
        .replace(
          /from\s+['"](\.\.\/helpers\/(?!mini-vitest\.js)[^'\"?]+)['"]/g,
          (_, specifier) => `from '${specifier}?t=${stamp}'`,
        );

      await fs.writeFile(TEMP_TEST_FILE, transformedSource, 'utf8');
      await import(`${pathToFileURL(TEMP_TEST_FILE).href}?t=${stamp}`);
      const result = await runRegisteredTests();

      tests = result.failed > 0
        ? {
            code: 1,
            output: result.results
              .filter(item => !item.passed)
              .map(item => `- ${item.name}\n${item.error}`)
              .join('\n\n'),
          }
        : {
            code: 0,
            output: `Mini test runner: ${result.passed}/${result.total} passed`,
          };
    } catch (error) {
      tests = {
        code: 1,
        output: String(error?.stack ?? error?.message ?? error),
      };
    } finally {
      await fs.unlink(TEMP_TEST_FILE).catch(() => {});
    }
  }

  if (tests.code !== 0) {
    printHeading('TEST FAILURES', 'red');
    console.log(tests.output || colorize('red', 'Vitest failed without output.'));
    printHeading('ASSIGNMENT STATUS: NOT COMPLETED', 'red');
    console.log(colorize('yellow', 'Fix the errors above and save files to run checks again.'));
  } else {
    console.log(colorize('green', 'Vitest: OK'));
    printHeading('ASSIGNMENT STATUS: COMPLETED', 'green');
    console.log(colorize('green', 'All checks passed. The current solution is valid.'));
  }

  isRunning = false;

  if (rerunRequested) {
    rerunRequested = false;
    void executeChecks('queued file change');
  }

  return tests.code;
}

function scheduleChecks(reason) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    void executeChecks(reason);
  }, 150);
}

if (!RUN_ONCE) {
  const targets = await refreshWatchers();
  console.log(colorize('cyan', 'StackBlitz status runner started.'));
  console.log(colorize('dim', `Watching ${targets.map(target => path.relative(process.cwd(), target) || '.').join(', ')}`));
} else {
  console.log(colorize('cyan', 'StackBlitz status runner started in single-run mode.'));
}

const exitCode = await executeChecks('initial run');
if (RUN_ONCE) {
  process.exitCode = exitCode;
}
