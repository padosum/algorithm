const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(n) {
  let primeCnt = 1;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      primeCnt = primeCnt + 1;
    }
  }

  return n - primeCnt;
}
