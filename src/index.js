'use strict';

export function readCourseSummary(root) {
  // TODO: find the needed DOM nodes and return their values
  return {
    title: '',
    status: '',
    lessonsCount: 0,
  };
}

export function readLessonTitles(root) {
  // TODO: return an array of trimmed lesson titles
  return [];
}

export function buildDomSnapshot(root) {
  const summary = readCourseSummary(root);
  const lessonTitles = readLessonTitles(root);

  return {
    summary,
    lessonTitles,
    hasLessons: false, // TODO: true when the page contains at least one lesson title
  };
}
