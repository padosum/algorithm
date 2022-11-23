function solution(s) {
  const stack = []

  s.split('').forEach(val => {
    if (val === '(') {
      stack.push('(')
    } else if (val === ')') {
      const top = stack[stack.length - 1]
      if (top === '(') {
        stack.pop()
      } else {
        stack.push(')')
      }
    }
  })

  if (stack.length > 0) {
    return false
  } else {
    return true
  }
}
