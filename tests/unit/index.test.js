import { describe, expect, it } from 'vitest';
import {
  articlePreviewState,
  editorNote,
  isPublished,
  likesCount,
  scheduledAt,
} from '../../src/index.js';

describe('type confusion repair', () => {
  it('stores corrected runtime values', () => {
    expect(likesCount).toBe(5);
    expect(isPublished).toBe(false);
    expect(editorNote).toBeNull();
    expect(scheduledAt).toBeUndefined();
  });

  it('stores corrected runtime types', () => {
    expect(typeof likesCount).toBe('number');
    expect(typeof isPublished).toBe('boolean');
    expect(editorNote).toBeNull();
    expect(scheduledAt).toBeUndefined();
  });

  it('returns a behaviorally correct preview state', () => {
    expect(articlePreviewState()).toEqual({
      articleTitle: 'Data Types Basics',
      likesCount: 5,
      isPublished: false,
      editorNote: null,
      scheduledAt: undefined,
      statusLabel: 'Draft',
      needsEditorBanner: false,
    });
  });
});