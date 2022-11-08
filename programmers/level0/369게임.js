function solution(order) {
  const result = order
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => {
      if (curr === 3 || curr === 6 || curr === 9) {
        return acc + 1;
      }
      return acc;
    }, 0);

  return result;
}
