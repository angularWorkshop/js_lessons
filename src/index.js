'use strict';

export const scriptName = 'Starter Repair';
export const scriptPurpose = 'Learn how a small script is organized.';
export const currentStep = 2;
export const isFixed = true;

export const statusLine = `${scriptName}: step ${currentStep} is ready.`;

export const repairState = {
  strictMode: true,
  scriptName,
  scriptPurpose,
  currentStep,
  isFixed,
  statusLine,
};