function solution(s, n) {
  const answer = s.split('').map(char => {
    if (char === ' ') {
      return char
    }

    // 97 ~ 122 (소문자)
    // 65 ~ 90 (대문자)
    let code = char.charCodeAt(0)
    let offset = 0
    let encryptCode = 0

    if (code >= 97) {
      offset = code + n - 122
      encryptCode = offset > 0 ? 96 + offset : code + n
    } else {
      offset = code + n - 90
      encryptCode = offset > 0 ? 64 + offset : code + n
    }

    return String.fromCharCode(encryptCode)
  })

  return answer.join('')
}
