function solution(arr) {
  return arr.filter((value, idx, origin) => {
    if (idx === 0) return true
    if (origin[idx - 1] === value) {
      return false
    } else {
      return true
    }
  })
}
