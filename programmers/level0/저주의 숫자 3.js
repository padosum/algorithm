const includeThree = num => num.toString().split('').includes('3')

const multipleOfThree = num => num % 3 === 0

function solution(n) {
  let x = 1

  for (let i = 1; i < n; i++) {
    x = x + 1
    while (includeThree(x) || multipleOfThree(x)) {
      x = x + 1
    }
  }
  return x
}
