'use strict';

export const articleTitle = 'Data Types Basics';

export const likesCount = 5;

export const isPublished = false;

export const editorNote = null;

export const scheduledAt = undefined;

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
