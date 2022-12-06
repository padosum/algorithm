function solution(s) {
  const arr = s.split('')
  const [sign] = arr

  const onlyNum = arr
    .filter(val => !isNaN(val))
    .map(Number)
    .join('')
  return sign === '-' ? -onlyNum : +onlyNum
}
