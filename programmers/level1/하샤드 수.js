function solution(x) {
  const sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  return x % sum === 0 ? true : false;
}
