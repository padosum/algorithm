function solution(numbers) {
  const sum = numbers.reduce((acc, curr) => curr + acc ,0)
  return sum / numbers.length
}