function solution(n) {
  const arr = Array.from({ length: n }, (v, i) => i + 1).filter(
    val => n % val === 0
  )
  return arr.reduce((acc, curr) => acc + curr, 0)
}
