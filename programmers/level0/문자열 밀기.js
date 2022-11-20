function solution(A, B) {
  let result = -1
  let sliding = A

  if (A === B) {
    return 0
  }
  for (i = 0; i < A.length - 1; i++) {
    sliding = sliding
      .split('')
      .map((char, idx) => {
        if (idx === 0) {
          return sliding[sliding.length - 1]
        } else {
          return sliding[idx - 1]
        }
      })
      .join('')

    if (sliding === B) {
      result = i + 1
    }
  }

  return result
}
