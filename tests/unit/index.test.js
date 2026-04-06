import { describe, expect, it, vi } from 'vitest';
import { buildFilePreviewState, formatFileSize } from '../../src/index.js';

describe('file preview state', () => {
  it('formats bytes into readable labels', () => {
    expect(formatFileSize(512)).toBe('512 B');
    expect(formatFileSize(1536)).toBe('1.5 KB');
    expect(formatFileSize(2 * 1024 * 1024)).toBe('2.0 MB');
  });

  it('creates preview data for image files', () => {
    const file = {
      name: 'avatar.png',
      size: 1536,
      type: 'image/png',
    };
    const createObjectUrl = vi.fn(() => 'blob:avatar.png');

    expect(buildFilePreviewState(file, createObjectUrl)).toEqual({
      fileName: 'avatar.png',
      sizeLabel: '1.5 KB',
      isImage: true,
      previewUrl: 'blob:avatar.png',
    });
    expect(createObjectUrl).toHaveBeenCalledWith(file);
  });

  it('keeps the same shape for non-image files without creating preview urls', () => {
    const file = {
      name: 'guide.pdf',
      size: 2048,
      type: 'application/pdf',
    };
    const createObjectUrl = vi.fn(() => 'blob:guide.pdf');

    expect(buildFilePreviewState(file, createObjectUrl)).toEqual({
      fileName: 'guide.pdf',
      sizeLabel: '2.0 KB',
      isImage: false,
      previewUrl: '',
    });
    expect(createObjectUrl).not.toHaveBeenCalled();
  });
});
