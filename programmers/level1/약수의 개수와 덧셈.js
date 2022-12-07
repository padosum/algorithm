const getDivisor = number => {
  const divisors = []
  for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      divisors.push(i)
      divisors.push(number / i)
    }
  }

  return [...new Set(divisors)]
}

function solution(left, right) {
  let sum = 0
  for (let i = left; i <= right; i++) {
    if (getDivisor(i).length % 2 === 0) {
      sum += i
    } else {
      sum -= i
    }
  }
  return sum
}
