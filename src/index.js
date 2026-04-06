'use strict';

export const articleTitle = 'Data Types Basics';

// TODO: fix the type of this value.
export const likesCount = '5';

// TODO: fix the type of this value.
export const isPublished = 'false';

// TODO: fix the type of this value.
export const editorNote = 'null';

// TODO: fix the type of this value.
export const scheduledAt = 'undefined';

export function articlePreviewState() {
  return {
    articleTitle,
    likesCount,
    isPublished,
    editorNote,
    scheduledAt,
    statusLabel: isPublished ? 'Published' : 'Draft',
    needsEditorBanner: editorNote !== null,
  };
}