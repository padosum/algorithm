const fibonacci = (num) => {
  const arr = Array.from({length: num + 1}, (v, i) => 0)
  
  for(let i = 0 ; i < arr.length; i++) {
      if (i > 1) {
          arr[i] = (arr[i-1] + arr[i-2]) % 1234567
      } else {
          arr[i] = i
      }
  }
  return arr[num]
}

function solution(n) {
  return fibonacci(n)
}