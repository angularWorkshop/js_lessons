'use strict';

export function formatFileSize(bytes) {
  if (bytes < 1024) {
    return String(bytes) + ' B';
  }

  if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(1) + ' KB';
  }

  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export function buildFilePreviewState(file, createObjectUrl) {
  const isImage = file.type.startsWith('image/');

  return {
    fileName: file.name,
    sizeLabel: formatFileSize(file.size),
    isImage,
    previewUrl: isImage ? createObjectUrl(file) : '',
  };
}
