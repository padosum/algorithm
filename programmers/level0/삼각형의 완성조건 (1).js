function solution(sides) {
  const maxSide = Math.max(...sides);

  const sidesSum = sides.reduce((acc, curr) => curr + acc, 0);

  if (maxSide < sidesSum - maxSide) {
    return 1;
  } else {
    return 2;
  }
}
