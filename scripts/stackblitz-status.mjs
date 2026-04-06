import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import process from 'node:process';

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
  'tests/helpers/fake-dom.js',
  'tests/unit/index.test.js',
  'README.md',
  'vitest.config.js',
  'package.json',
];

let runNumber = 0;
let isRunning = false;
let rerunRequested = false;
let debounceTimer = null;

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

function runCommand(label, command, args) {
  return new Promise(resolve => {
    let child;
    try {
      child = spawn(command, args, {
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
          ...process.env,
          FORCE_COLOR: '1',
        },
      });
    } catch (error) {
      resolve({
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

    child.on('close', code => {
      resolve({
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

  const tests = await runCommand('Vitest', 'node', ['./node_modules/vitest/vitest.mjs', 'run', '--reporter=basic']);

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
