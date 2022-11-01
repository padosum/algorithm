const angleNum = (angle) => {
  const ACUTE_ANGLE = 1;
  const RIGHT_ANGLE = 2;
  const OBTUSE_ANGLE = 3;
  const STRAIGHT_ANGLE = 4;

  if (angle > 0 && angle < 90) {
    return ACUTE_ANGLE;
  } else if (angle === 90) {
    return RIGHT_ANGLE;
  } else if (angle > 90 && angle < 180) {
    return OBTUSE_ANGLE;
  } else if (angle === 180) {
    return STRAIGHT_ANGLE;
  }
};

function solution(angle) {
  return angleNum(angle);
}
