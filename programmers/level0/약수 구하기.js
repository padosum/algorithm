function solution(n) {
  let result = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) result = [...result, i, n / i];
  }

  if (Number.isInteger(Math.sqrt(n))) {
    result = [...result, Math.sqrt(n)];
  }

  return result.sort((a, b) => a - b);
}
