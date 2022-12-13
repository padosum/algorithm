function solution(sizes) {
  let w = []
  let h = []
  sizes.forEach((val, idx) => {
      w.push(Math.max(...val))
      h.push(Math.min(...val))
  })
  
  return Math.max(...w) * Math.max(...h)
}