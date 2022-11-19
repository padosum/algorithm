function solution(i, j, k) {
  const numbers = Array.from({ length: j - i + 1 }, (v, index) => index + i);

  const hasK = numbers.map(value => {
    return value
      .toString()
      .split('')
      .filter(val => val === k.toString()).length;
  });

  return hasK.reduce((acc, curr) => acc + curr, 0);
}
