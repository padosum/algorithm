const findSevenCount = number => {
  return number
    .toString()
    .split('')
    .filter(num => num.match(/7/)).length
}

function solution(array) {
  return array.reduce((acc, curr) => acc + findSevenCount(curr), 0)
}
