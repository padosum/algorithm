function solution(n) {
  let num = n;
  let i = 2;
  let numbers = [];
  while (num > 1) {
    if (num % i === 0) {
      numbers.push(i);
      num = num / i;
    } else {
      i++;
    }
  }

  const result = [...new Set(numbers)];
  return result;
}
