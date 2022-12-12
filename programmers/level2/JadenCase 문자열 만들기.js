function solution(s) {
  let firstLetter = true

  const result = s.split('').map((char, idx) => {
    let convert = ''
    if (char === ' ') {
      convert = ' '
      firstLetter = true
    } else {
      const code = char.charCodeAt(0)
      if (firstLetter) {
        convert = code >= 97 && code <= 122 ? char.toUpperCase() : char
        firstLetter = false
      } else {
        convert = code >= 65 && code <= 90 ? char.toLowerCase() : char
      }
    }
    return convert
  })

  return result.join('')
}
