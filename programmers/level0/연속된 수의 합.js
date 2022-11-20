function solution(num, total) {
  let arr = Array.from({ length: num }, (v, i) => i)
  let sum = arr.reduce((acc, curr) => acc + curr, 0)
  let j = 1
  while (sum !== total) {
    if (sum < total) {
      arr = Array.from({ length: num }, (v, i) => i + j)
      sum = arr.reduce((acc, curr) => acc + curr, 0)
    } else {
      arr = Array.from({ length: num }, (v, i) => i - j)
      sum = arr.reduce((acc, curr) => acc + curr, 0)
    }
    j++
  }

  return arr
}
