function solution(n) {
  const result = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  return result;
}
