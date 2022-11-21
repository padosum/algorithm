function solution(participant, completion) {
  const map = new Map()
  let result = ''

  participant.forEach(player => {
    map.set(player, (map.get(player) || 0) + 1)
  })

  completion.forEach(player => {
    map.set(player, map.get(player) - 1)
  })

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      result = key
    }
  }

  return result
}
