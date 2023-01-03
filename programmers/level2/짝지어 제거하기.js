function solution(s) {
  let stack = []

  s.split('').forEach((item, idx) => {
    const top = stack[stack.length - 1]
    if (top === item) {
      stack.pop()
    } else {
      stack.push(item)
    }
  })

  return stack.length === 0 ? 1 : 0
}
