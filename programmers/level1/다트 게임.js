const isNumber = value => Number.isInteger(Number(value))

function solution(dartResult) {
  let result = []

  dartResult.split('').forEach((point, idx) => {
    const last = [result.length - 1]
    if (isNumber(point)) {
      if (isNumber(dartResult[idx - 1])) {
        result.push(Number(result.pop() + point))
      } else {
        result.push(Number(point))
      }
    } else {
      switch (point) {
        case 'S':
          result[last] = result[last] * 1
          break
        case 'D':
          result[last] = result[last] ** 2
          break
        case 'T':
          result[last] = result[last] ** 3
          break
        case '*':
          result[last] = result[last] * 2
          if (last > 0) {
            result[last - 1] = result[last - 1] * 2
          }
          break
        case '#':
          result[last] = result[last] * -1
          break
      }
    }
  })
  return result.reduce((acc, curr) => acc + curr, 0)
}
