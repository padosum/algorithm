function solution(strings, n) {
  return strings.sort((a, b) => {
      const aChar = a.split('')[n]
      const bChar = b.split('')[n]
      
      if (aChar === bChar) {
          return a.localeCompare(b)
      } 
      
      return aChar.localeCompare(bChar)
  })
}