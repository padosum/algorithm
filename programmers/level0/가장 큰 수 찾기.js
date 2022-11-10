function solution(array) {
  const max = Math.max(...array);

  const idx = array.findIndex((val) => val === max);

  return [max, idx];
}
