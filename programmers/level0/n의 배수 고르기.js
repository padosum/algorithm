function solution(n, numlist) {
  const result = numlist.filter((num) => num % n === 0);
  return result;
}
