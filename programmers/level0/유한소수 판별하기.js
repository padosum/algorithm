const getGCD = (num1, num2) => {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2)
}

function solution(a, b) {
  const gcd = getGCD(a, b)
  let denominator = b / gcd

  let i = 2
  while (denominator !== 1) {
    if (denominator % i === 0) {
      if (i !== 2 && i !== 5) {
        break
      }
      denominator = denominator / i
    } else {
      i = i + 1
    }
  }

  if (i !== 2 && i !== 5) {
    return 2
  } else {
    return 1
  }
}
