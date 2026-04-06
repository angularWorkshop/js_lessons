'use strict';

export function createLessonCard(documentRef, lesson) {
  // TODO: create one lesson card with title and level
  return documentRef.createElement('article');
}

export function renderLessonCards(root, lessons, documentRef) {
  // TODO: create cards for all lessons and replace the container children
  void root;
  void lessons;
  void documentRef;
}

export function buildCardsSnapshot(root, lessons, documentRef) {
  renderLessonCards(root, lessons, documentRef);

  return {
    count: 0, // TODO: count the rendered cards
    titles: [], // TODO: read the rendered titles back from the DOM
    firstId: '', // TODO: return the data-lesson-id of the first rendered card
  };
}
