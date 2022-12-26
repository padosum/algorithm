function solution(s) {

  let result = 0
  let arr = s.split('')
  
  while(arr.length !== 0) {
      result ++;
      const [first, ...others] = arr
      let firstCnt = 0
      let othersCnt = 0
      
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === first) {
              firstCnt += 1;
          } else {
              othersCnt += 1;
          }
          
          if (firstCnt === othersCnt) {
              break
          }
      }
      
      arr = arr.slice(firstCnt + othersCnt)
  }
  
  return result
} 

