let primes = num => {
  let sieve = new Array(num + 1).fill(true)

  for (let i = 2; i <= num; i++) {
    if (sieve[i]) {
      for (let j = i + i; j <= num; j += i) {
        sieve[j] = false
      }
    }
  }
  return sieve
}

function solution(n) {
  const answer = primes(n)
  return answer.filter(val => val).slice(2).length
}
