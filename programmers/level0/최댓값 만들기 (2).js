function solution(numbers) {
  numbers.sort((a, b) => b - a)

  const {
    length,
    0: first,
    1: second,
    [length - 2]: secondFromBack,
    [length - 1]: last,
  } = numbers
  if (Math.sign(secondFromBack) * Math.sign(last) === 1) {
    return Math.max(first * second, secondFromBack * last)
  } else {
    return first * second
  }
}
