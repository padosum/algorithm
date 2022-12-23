function solution(t, p) {
  const tArr = t.split('')
  const pLen = p.length
  const tLen = t.length
  
  let result = 0
  for (let i = 0; i <= tLen - pLen; i++) {
      const somePart = tArr.slice(i, i+pLen).join('')
      if (p >= somePart) {
          result++
      }
  }
  return result
}