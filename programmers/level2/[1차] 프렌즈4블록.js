function solution(m, n, board) {
  let answer = 0;
  board = board.map(item => item.split(""));

  while (true) {
    const visited = Array.from({ length: m }, (v, i) =>
      Array.from({ length: n }, (v, i) => false)
    );
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (j + 1 < n && i + 1 < m) {
          const current = board[i][j];
          if (current !== 0) {
            const right = board[i][j + 1];
            const bottom = board[i + 1][j];
            const right_bottom = board[i + 1][j + 1];

            if (
              current === right &&
              current === bottom &&
              current === right_bottom
            ) {
              visited[i][j] = true;
              visited[i][j + 1] = true;
              visited[i + 1][j] = true;
              visited[i + 1][j + 1] = true;
            }
          }
        }
      }
    }

    let cnt = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i][j]) {
          cnt++;
          if (i > 0) {
            for (let k = i; k > 0; k--) {
              board[k][j] = board[k - 1][j];
              board[k - 1][j] = 0;
            }
          } else {
            board[i][j] = 0;
          }
        }
      }
    }

    if (cnt === 0) {
      break;
    }

    answer += cnt;
  }

  return answer;
}
