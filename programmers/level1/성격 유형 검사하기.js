function solution(survey, choices) {
  const result = new Map();
  const BASE_VAL = 4;
  choices.forEach((val, idx) => {
      const [left, right] = survey[idx].split('')
      if(val < BASE_VAL) {
          result.set(left, (result.get(left) || 0) + BASE_VAL - val)
      } else if (val > BASE_VAL) {
          result.set(right, (result.get(right) || 0) + val - BASE_VAL)
      }
  })
  
  const table = {
      1: "RT",
      2: "CF",
      3: "JM",
      4: "AN"
  }
  
  const answer = []
  for (let key in table) {
      const [first, second] = table[key].split('')
      const firstPoint =  result.get(first) || 0
      const secondPoint = result.get(second) || 0
      
      if (firstPoint < secondPoint) {
          answer.push(second)
      } else {
          answer.push(first)
      }
  }
  return answer.join('')
}
