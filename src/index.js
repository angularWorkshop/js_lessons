'use strict';

export class LessonProgress {
  constructor(title) {
    this.title = title;
    this.totalSteps = 0;
    this.completedSteps = 0;
  }

  setTotalSteps(total) {
    // TODO: save the total number of steps
    void total;
  }

  completeStep() {
    // TODO: move progress forward without crossing the max
  }

  getSnapshot() {
    // TODO: return a stable state snapshot
  }
}
