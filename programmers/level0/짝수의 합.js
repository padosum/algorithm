function solution(n) {
  const number = Array.from({ length: n }, (v, i) => i + 1);
  const even = number.filter((num) => num % 2 === 0);
  const sum = even.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
