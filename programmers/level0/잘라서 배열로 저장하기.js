function solution(my_str, n) {
  let i = 0
  let j = 0
  let result = []
  const my_arr = my_str.split('')

  while (j < my_arr.length / n) {
    result.push(my_arr.slice(i, i + n).join(''))
    i = i + n
    j++
  }

  return result
}
