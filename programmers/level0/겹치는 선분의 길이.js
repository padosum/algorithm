function solution(lines) {
  const areaMap = new Map()

  lines.forEach(value => {
    const [start, end] = value

    for (let i = start; i < end; i++) {
      areaMap.set(i + 1, (areaMap.get(i + 1) || 0) + 1)
    }
  })
  return [...areaMap.values()].filter(value => value >= 2).length
}
