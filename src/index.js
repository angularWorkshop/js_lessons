'use strict';

export function normalizeLegacyStudents(rawStudents) {
  const normalized = [];

  for (let i = 0; i < rawStudents.length; i += 1) {
    const student = rawStudents[i] || {};
    const name = String(student.name || '').trim();
    const track = String(student.track || 'general').toLowerCase();
    const score = Number(student.score ?? 0);

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
  const handlers = [];

  for (let i = 0; i < lessonTitles.length; i += 1) {
    const title = lessonTitles[i];

    handlers.push(function handler() {
      return `[${i}] ${title}`;
    });
  }

  return handlers;
}
