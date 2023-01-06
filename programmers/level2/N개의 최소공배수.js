const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b)
}

const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b)
}

function solution(arr) {
  const result = arr.reduce((curr, acc) => {
    return getLCM(acc, curr)
  })

  return result
}
