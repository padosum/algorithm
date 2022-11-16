function solution(sides) {
  const maxSide = Math.max(...sides);
  const minSide = Math.min(...sides);

  let count = 0;
  for (let i = 1; i <= maxSide; i++) {
    if (i + minSide > maxSide) {
      count = count + 1;
    }
  }

  const sum = sides.reduce((acc, curr) => acc + curr, 0);
  for (let j = maxSide + 1; j < sum; j++) {
    count = count + 1;
  }

  return count;
}
