function solution(food) {
  const side = []
  food.forEach((item, idx) => {
    if (idx > 0) {
      side.push(idx.toString().repeat(parseInt(item / 2)))
    }
  })
  return side.join('') + '0' + side.reverse().join('')
}
