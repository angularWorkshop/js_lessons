import { isDeepStrictEqual } from 'node:util';

const state = {
  suiteStack: [],
  tests: [],
};

function format(value) {
  return typeof value === 'string' ? `'${value}'` : JSON.stringify(value);
}

export function resetTests() {
  state.suiteStack = [];
  state.tests = [];
}

export function describe(name, fn) {
  state.suiteStack.push(name);
  try {
    fn();
  } finally {
    state.suiteStack.pop();
  }
}

export function it(name, fn) {
  const fullName = [...state.suiteStack, name].join(' > ');
  state.tests.push({ name: fullName, fn });
}

function createSpy(impl = () => undefined) {
  const spy = (...args) => {
    spy.mock.calls.push(args);
    return impl(...args);
  };
  spy.mock = { calls: [] };
  return spy;
}

export const vi = {
  fn(impl) {
    return createSpy(impl);
  },
};

function assert(pass, message, invertedMessage, invert = false) {
  if (!invert && !pass) {
    throw new Error(message);
  }

  if (invert && pass) {
    throw new Error(invertedMessage ?? `Expected negated assertion to pass: ${message}`);
  }
}

function createBaseMatchers(actual, invert = false) {
  return {
    toBe(expected) {
      const pass = Object.is(actual, expected);
      assert(
        pass,
        `Expected ${format(actual)} to be ${format(expected)}`,
        `Expected ${format(actual)} not to be ${format(expected)}`,
        invert,
      );
    },
    toEqual(expected) {
      const pass = isDeepStrictEqual(actual, expected);
      assert(
        pass,
        `Expected ${format(actual)} to equal ${format(expected)}`,
        `Expected ${format(actual)} not to equal ${format(expected)}`,
        invert,
      );
    },
    toStrictEqual(expected) {
      this.toEqual(expected);
    },
    toContain(expected) {
      const pass = Boolean(actual?.includes?.(expected));
      assert(
        pass,
        `Expected ${format(actual)} to contain ${format(expected)}`,
        `Expected ${format(actual)} not to contain ${format(expected)}`,
        invert,
      );
    },
    toMatch(expected) {
      let pass = false;

      if (expected instanceof RegExp) {
        pass = expected.test(String(actual));
      } else {
        pass = String(actual).includes(String(expected));
      }

      assert(
        pass,
        `Expected ${format(actual)} to match ${format(String(expected))}`,
        `Expected ${format(actual)} not to match ${format(String(expected))}`,
        invert,
      );
    },
    toHaveLength(expected) {
      const pass = actual?.length === expected;
      assert(
        pass,
        `Expected length ${actual?.length} to be ${expected}`,
        `Expected length ${actual?.length} not to be ${expected}`,
        invert,
      );
    },
    toBeTruthy() {
      assert(Boolean(actual), `Expected ${format(actual)} to be truthy`, `Expected ${format(actual)} to be falsy`, invert);
    },
    toBeFalsy() {
      assert(!actual, `Expected ${format(actual)} to be falsy`, `Expected ${format(actual)} to be truthy`, invert);
    },
    toBeNull() {
      assert(actual === null, `Expected ${format(actual)} to be null`, `Expected ${format(actual)} not to be null`, invert);
    },
    toBeUndefined() {
      assert(actual === undefined, `Expected ${format(actual)} to be undefined`, `Expected ${format(actual)} not to be undefined`, invert);
    },
    toBeDefined() {
      assert(actual !== undefined, 'Expected value to be defined', 'Expected value to be undefined', invert);
    },
    toBeInstanceOf(expectedCtor) {
      const pass = actual instanceof expectedCtor;
      assert(
        pass,
        `Expected value to be instance of ${expectedCtor?.name ?? 'ctor'}`,
        `Expected value not to be instance of ${expectedCtor?.name ?? 'ctor'}`,
        invert,
      );
    },
    toBeCloseTo(expected, precision = 2) {
      const delta = Math.abs(actual - expected);
      const pass = delta <= 10 ** -precision / 2;
      assert(
        pass,
        `Expected ${actual} to be close to ${expected}`,
        `Expected ${actual} not to be close to ${expected}`,
        invert,
      );
    },
    toThrow(expectedMessage) {
      if (typeof actual !== 'function') {
        throw new Error('Actual value must be a function for toThrow');
      }

      let thrown = null;
      try {
        actual();
      } catch (error) {
        thrown = error;
      }

      const pass = thrown
        ? expectedMessage === undefined || String(thrown.message ?? thrown).includes(expectedMessage)
        : false;

      const message = !thrown
        ? 'Expected function to throw'
        : `Expected thrown error to include ${format(expectedMessage)}, got ${format(String(thrown.message ?? thrown))}`;

      assert(
        pass,
        message,
        expectedMessage === undefined
          ? 'Expected function not to throw'
          : `Expected thrown error not to include ${format(expectedMessage)}`,
        invert,
      );
    },
    toHaveBeenCalled() {
      const calls = actual?.mock?.calls?.length ?? 0;
      assert(calls > 0, 'Expected spy to have been called', 'Expected spy not to have been called', invert);
    },
    toHaveBeenCalledTimes(expected) {
      const actualCalls = actual?.mock?.calls?.length;
      assert(
        actualCalls === expected,
        `Expected spy to be called ${expected} times, got ${actualCalls ?? 'unknown'}`,
        `Expected spy not to be called ${expected} times`,
        invert,
      );
    },
    toHaveBeenCalledWith(...expectedArgs) {
      const calls = actual?.mock?.calls ?? [];
      const found = calls.some((call) => isDeepStrictEqual(call, expectedArgs));
      assert(
        found,
        `Expected spy to be called with ${format(expectedArgs)}, got ${format(calls)}`,
        `Expected spy not to be called with ${format(expectedArgs)}`,
        invert,
      );
    },
  };
}

function createExpect(actual) {
  return {
    ...createBaseMatchers(actual),
    not: createBaseMatchers(actual, true),
    resolves: {
      async toEqual(expected) {
        const resolved = await actual;
        if (!isDeepStrictEqual(resolved, expected)) {
          throw new Error(`Expected resolved value ${format(resolved)} to equal ${format(expected)}`);
        }
      },
      async toBe(expected) {
        const resolved = await actual;
        if (!Object.is(resolved, expected)) {
          throw new Error(`Expected resolved value ${format(resolved)} to be ${format(expected)}`);
        }
      },
    },
  };
}

export function expect(actual) {
  return createExpect(actual);
}

export async function runRegisteredTests() {
  const results = [];

  for (const test of state.tests) {
    try {
      await test.fn();
      results.push({ name: test.name, passed: true });
    } catch (error) {
      results.push({
        name: test.name,
        passed: false,
        error: String(error?.stack ?? error?.message ?? error),
      });
    }
  }

  const failed = results.filter((item) => !item.passed);
  return {
    total: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    results,
  };
}
