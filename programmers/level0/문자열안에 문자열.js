function solution(str1, str2) {
  // const regex = new RegExp(`(${str2})`, 'g')
  const regex = new RegExp(str2, 'g')

  if (regex.test(str1)) {
    return 1
  } else {
    return 2
  }
}
