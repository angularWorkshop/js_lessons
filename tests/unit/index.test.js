import { describe, expect, it } from 'vitest';
import { LessonProgress } from '../../src/index.js';

describe('lesson progress class', () => {
  it('starts with predictable defaults', () => {
    const progress = new LessonProgress('Lifecycle');

    expect(progress.getSnapshot()).toEqual({
      title: 'Lifecycle',
      totalSteps: 0,
      completedSteps: 0,
      isDone: false,
    });
  });

  it('caps completed steps at the total', () => {
    const progress = new LessonProgress('Storage');
    progress.setTotalSteps(2);
    progress.completeStep();
    progress.completeStep();
    progress.completeStep();

    expect(progress.getSnapshot()).toEqual({
      title: 'Storage',
      totalSteps: 2,
      completedSteps: 2,
      isDone: true,
    });
  });

  it('shrinks completed steps if the total becomes smaller', () => {
    const progress = new LessonProgress('Events');
    progress.setTotalSteps(3);
    progress.completeStep();
    progress.completeStep();
    progress.setTotalSteps(1);

    expect(progress.getSnapshot()).toEqual({
      title: 'Events',
      totalSteps: 1,
      completedSteps: 1,
      isDone: true,
    });
  });
});
