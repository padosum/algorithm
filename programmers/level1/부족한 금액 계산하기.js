function solution(price, money, count) {
  var answer = -1;
  
  const arr = Array.from({length: count}, (v, i) => i)
  const prices = arr.map((item, idx) => price * (idx+1))
  const sum = prices.reduce((acc, curr) => acc + curr, 0)
  
  return money < sum ? sum - money : 0
}