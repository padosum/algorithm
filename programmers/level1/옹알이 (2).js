function solution(babbling) {
  const result = babbling.filter((word) => {
      if (!/(aya|ye|woo|ma)\1+/g.test(word)) {
          return /^(aya|ye|woo|ma)+$/g.test(word)    
      }
  })
  
 return result.length
}

