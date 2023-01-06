function solution(n, a, b) {
  let answer = 1
  while (n !== 1) {
    if (Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0) {
      break
    }
    answer++
    n = n / 2
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
  }
  return answer
}
