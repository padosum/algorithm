function solution(clothes) {
  const clothesMap = new Map()
  
  clothes.forEach(([item, type]) => {
      clothesMap.set(type, (clothesMap.get(type) || 0) + 1)
  })
  
  let result = 1
  for (let [key, value] of clothesMap.entries()) {
      result = result * (value + 1)
  }
  
  return result - 1
}