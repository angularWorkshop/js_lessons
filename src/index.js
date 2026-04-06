'use strict';

export function isPassingScore(score) {
  // TODO: return true when score is 70 or higher
  return false;
}

export function canOpenCertificate(theoryScore, practiceScore) {
  // TODO: reuse isPassingScore for both scores
  return false;
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
    label: 'Certificate locked', // TODO: switch to unlocked label when both checks pass
  };
}
