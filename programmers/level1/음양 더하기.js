function solution(absolutes, signs) {
  var answer = 123456789

  answer = absolutes.reduce((acc, curr, idx) => {
    if (signs[idx]) {
      // 양수
      return (acc += curr)
    } else {
      // 음수
      return (acc -= curr)
    }
  }, 0)

  return answer
}
