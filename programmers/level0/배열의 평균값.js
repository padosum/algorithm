function solution(numbers) {
  const sum = numbers.reduce((curr, acc) => curr + acc, 0);
  return sum / numbers.length;
}
