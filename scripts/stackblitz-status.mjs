import { spawn } from 'node:child_process';
import { existsSync, watch } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

const WATCH_TARGETS = [
  'src/index.js',
  'tests/unit/index.test.js',
  'README.md',
  'scripts/validate-assignment.mjs',
  'vitest.config.js',
  'package.json',
];

let runNumber = 0;
let isRunning = false;
let rerunRequested = false;
let debounceTimer = null;
const vitestBin = path.resolve(process.cwd(), 'node_modules', 'vitest', 'vitest.mjs');

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

function runCommand(label, command, args) {
  return new Promise(resolve => {
    let settled = false;
    let child;

    const finish = result => {
      if (settled) {
        return;
      }

      settled = true;
      resolve(result);
    };

    try {
      child = spawn(command, args, {
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
          ...process.env,
          FORCE_COLOR: '1',
        },
        windowsHide: true,
      });
    } catch (error) {
      finish({
        code: 1,
        label,
        output: String(error?.message ?? error),
      });
      return;
    }

    let output = '';

    child.stdout.on('data', chunk => {
      output += chunk.toString();
    });

    child.stderr.on('data', chunk => {
      output += chunk.toString();
    });

    child.on('error', error => {
      finish({
        code: 1,
        label,
        output: String(error?.message ?? error),
      });
    });

    child.on('close', code => {
      finish({
        code: code ?? 1,
        label,
        output: output.trim(),
      });
    });
  });
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

  const tests = await runCustomValidation()
    ?? await runCommand('Vitest', process.execPath, [vitestBin, 'run', '--reporter=basic']);

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

for (const target of WATCH_TARGETS) {
  try {
    watch(target, () => {
      scheduleChecks(`change in ${target}`);
    });
  } catch {
    // Ignore optional missing files.
  }
}

console.log(colorize('cyan', 'StackBlitz status runner started.'));
console.log(colorize('dim', `Watching ${WATCH_TARGETS.join(', ')}`));
void executeChecks('initial run');
