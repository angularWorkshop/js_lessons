'use strict';

export const studentName = 'Mila';
export const studentCity = 'Kazan';
export const learningTrack = 'JavaScript Basics';

export let completedSteps = 0;
completedSteps = completedSteps + 1;

export const profileLine = `${studentName} studies ${learningTrack}.`;

export const userCardState = {
  studentName,
  studentCity,
  learningTrack,
  completedSteps,
  profileLine,
  isProfileReady: true,
};