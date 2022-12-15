function solution(n) {
  const nRemoveZero = n.toString(2).replace(/0/g, '')
  let number = n + 1
  let nextRemoveZero = number.toString(2).replace(/0/g, '')
  while (nextRemoveZero !== nRemoveZero) {
    number++
    nextRemoveZero = number.toString(2).replace(/0/g, '')
  }

  return number
}
