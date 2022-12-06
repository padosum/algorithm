function solution(arr) {
  const min = Math.min(...arr)
  const filtered = arr.filter(val => val !== min)
  return filtered.length > 0 ? filtered : [-1]
}
