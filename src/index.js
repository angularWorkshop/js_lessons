'use strict';

export function isPassingScore(score) {
  return score >= 70;
}

export function canOpenCertificate(theoryScore, practiceScore) {
  return isPassingScore(theoryScore) && isPassingScore(practiceScore);
}

export function buildCheckpointState(theoryScore, practiceScore) {
  const theoryPassed = isPassingScore(theoryScore);
  const practicePassed = isPassingScore(practiceScore);
  const certificateUnlocked = canOpenCertificate(theoryScore, practiceScore);

  return {
    theoryScore,
    practiceScore,
    theoryPassed,
    practicePassed,
    certificateUnlocked,
    label: certificateUnlocked ? 'Certificate unlocked' : 'Certificate locked',
  };
}
