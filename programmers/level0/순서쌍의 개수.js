function solution(n) {
  let result = 0;

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      result = result + 2;
    }
  }

  if (n % Math.sqrt(n) === 0) {
    result = result + 1;
  }

  return result;
}
