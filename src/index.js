'use strict';

export function createLessonCard(documentRef, lesson) {
  const card = documentRef.createElement('article');
  const title = documentRef.createElement('h3');
  const level = documentRef.createElement('p');

  card.className = 'lesson-card';
  card.setAttribute('data-lesson-id', lesson.id);

  title.setAttribute('data-role', 'lesson-title');
  title.textContent = lesson.title;

  level.setAttribute('data-role', 'lesson-level');
  level.textContent = `${lesson.level} level`;

  card.append(title, level);
  return card;
}

export function renderLessonCards(root, lessons, documentRef) {
  const cards = lessons.map(lesson => createLessonCard(documentRef, lesson));
  root.replaceChildren(...cards);
}

export function buildCardsSnapshot(root, lessons, documentRef) {
  renderLessonCards(root, lessons, documentRef);

  return {
    count: root.querySelectorAll('.lesson-card').length,
    titles: Array.from(
      root.querySelectorAll('[data-role="lesson-title"]'),
      node => node.textContent,
    ),
    firstId: root.querySelector('.lesson-card')?.getAttribute('data-lesson-id') ?? '',
  };
}
