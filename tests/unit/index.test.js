import { describe, expect, it } from 'vitest';
import {
  buildReferenceBugState,
  createEditableProfile,
  renameDraftProfile,
} from '../../src/index.js';

describe('fix shared reference bug', () => {
  it('creates a new editable object instead of reusing the original', () => {
    const original = { displayName: 'Anna' };
    const draft = createEditableProfile(original);

    expect(draft).toEqual({ displayName: 'Anna' });
    expect(draft).not.toBe(original);
  });

  it('renames the draft without mutating the original object', () => {
    const original = { displayName: 'Anna' };
    const draft = renameDraftProfile(original, 'Max');

    expect(original).toEqual({ displayName: 'Anna' });
    expect(draft).toEqual({ displayName: 'Max' });
  });

  it('builds a state object that reveals the bug is fixed', () => {
    expect(buildReferenceBugState({ displayName: 'Anna' }, 'Max')).toEqual({
      originalName: 'Anna',
      draftName: 'Max',
      sameReference: false,
    });
  });
});
