function solution(keyinput, board) {
  let x = 0
  let y = 0

  const [boardX, boardY] = board
  const maxX = parseInt(boardX / 2)
  const maxY = parseInt(boardY / 2)

  keyinput.forEach(key => {
    if (key === 'up') {
      if (y < maxY) {
        y = y + 1
      }
    } else if (key === 'down') {
      if (y > -maxY) {
        y = y - 1
      }
    } else if (key === 'left') {
      if (x > -maxX) {
        x = x - 1
      }
    } else if (key === 'right') {
      if (x < maxX) {
        x = x + 1
      }
    }
  })
  return [x, y]
}
