'use strict';

export function normalizeLegacyStudents(rawStudents) {
  var normalized = [];

  for (var i = 0; i < rawStudents.length; i += 1) {
    var student = rawStudents[i] || {};
    var name = String(student.name || '').trim();
    var track = String(student.track || 'general').toLowerCase();
    var score = Number(student.score ?? 0);

    normalized.push({
      id: `student-${i + 1}`,
      name,
      track,
      score: Number.isFinite(score) ? score : 0,
    });
  }

  return normalized;
}

export function buildLessonHandlers(lessonTitles) {
  var handlers = [];

  // TODO: refactor this loop to let/const so each handler keeps its own index and title.
  for (var i = 0; i < lessonTitles.length; i += 1) {
    var title = lessonTitles[i];

    handlers.push(function handler() {
      return `[${i}] ${title}`;
    });
  }

  return handlers;
}
