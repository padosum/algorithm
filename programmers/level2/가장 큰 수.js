function solution(numbers) {
  const str = numbers.map((number) => number.toString())
  return str.sort((a, b) => (b+a) - (a+b)).join('').replace(/^0.*/gi, '0')
}