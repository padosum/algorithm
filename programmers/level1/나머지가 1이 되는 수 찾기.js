function solution(n) {
  let num = n - 1
  let i = 2
  while (n) {
    if (num % i === 0) {
      break
    }
    i++
  }
  return i
}
