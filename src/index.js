'use strict';

export class LessonProgress {
  constructor(title) {
    this.title = title;
    this.totalSteps = 0;
    this.completedSteps = 0;
  }

  setTotalSteps(total) {
    this.totalSteps = Math.max(0, total);
    this.completedSteps = Math.min(this.completedSteps, this.totalSteps);
  }

  completeStep() {
    this.completedSteps = Math.min(this.totalSteps, this.completedSteps + 1);
  }

  getSnapshot() {
    return {
      title: this.title,
      totalSteps: this.totalSteps,
      completedSteps: this.completedSteps,
      isDone: this.totalSteps > 0 && this.completedSteps === this.totalSteps,
    };
  }
}
