function solution(s) {
  let idx = 0
  const answer = s.split('').map(char => {
    if (char === ' ') {
      idx = 0
      return char
    }

    let conversion = idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    idx++
    return conversion
  })
  return answer.join('')
}
