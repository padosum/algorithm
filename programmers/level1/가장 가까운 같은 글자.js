function solution(s) {
    
  const map = new Map()
  
  const result = s.split('').map((char, idx) => {
      const index = map.has(char) ? idx - map.get(char) : -1
      map.set(char,idx)
      return index
  })
  
  return result
}