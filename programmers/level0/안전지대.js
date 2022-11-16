function solution(board) {
  const len = board.length;
  const tempBoard = board.map(arr => {
    return arr.slice();
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        // 상단
        if (j - 1 >= 0) {
          tempBoard[i][j - 1] = 1;
        }

        // 우측 상단
        if (i < len - 1 && j - 1 >= 0) {
          tempBoard[i + 1][j - 1] = 1;
        }

        // 우측
        if (i < len - 1) {
          tempBoard[i + 1][j] = 1;
        }

        // 우측 하단
        if (i < len - 1 && j < len - 1) {
          tempBoard[i + 1][j + 1] = 1;
        }

        // 하단
        if (j < len - 1) {
          tempBoard[i][j + 1] = 1;
        }

        // 좌측 하단
        if (i - 1 >= 0 && j < len - 1) {
          tempBoard[i - 1][j + 1] = 1;
        }

        // 좌측
        if (i - 1 >= 0) {
          tempBoard[i - 1][j] = 1;
        }

        // 좌측 상단
        if (i - 1 >= 0 && j - 1 >= 0) {
          tempBoard[i - 1][j - 1] = 1;
        }
      }
    }
  }

  return tempBoard.reduce(
    (acc, curr) => acc + curr.filter(val => val === 0).length,
    0
  );
}
