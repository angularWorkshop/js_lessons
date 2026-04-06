'use strict';

export function readCourseSummary(root) {
  const titleNode = root.querySelector('[data-role="course-title"]');
  const statusNode = root.querySelector('[data-role="course-status"]');
  const countNode = root.querySelector('[data-role="course-count"]');

  return {
    title: titleNode.textContent.trim(),
    status: statusNode.textContent.trim(),
    lessonsCount: Number(countNode.textContent.trim()),
  };
}

export function readLessonTitles(root) {
  return Array.from(
    root.querySelectorAll('[data-role="lesson-title"]'),
    node => node.textContent.trim(),
  );
}

export function buildDomSnapshot(root) {
  const summary = readCourseSummary(root);
  const lessonTitles = readLessonTitles(root);

  return {
    summary,
    lessonTitles,
    hasLessons: lessonTitles.length > 0,
  };
}
