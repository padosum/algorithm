function solution(dots) {
  const [a, b, c, d] = dots

  const [x1, y1] = a
  const [x2, y2] = b
  const [x3, y3] = c
  const [x4, y4] = d

  if (Math.abs(x2 - x1) === 0) {
    return Math.abs(y2 - y1) * Math.abs(x2 - x3)
  } else {
    return Math.abs(x2 - x1) * Math.abs(y3 - y2)
  }
}
