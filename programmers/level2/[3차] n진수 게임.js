function solution(n, t, m, p) {
  let answer = '';
  const arr = [];
  
  for (let i = 0; i < t * m; i++) {
      arr.push(...i.toString(n).split(''));
  }
  
  for (let i = 0; i < t * m; i++) {
      if (i % m === 0) {
          answer += arr[i + p - 1]
      }
  }
  
  return answer.toUpperCase();
}