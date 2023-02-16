function solution(board) {
  const width = board[0].length;
  const height = board.length;
  let max = 0;

  const dp = Array.from({ length: height }, (v, i) =>
    Array.from({ length: width }, (v, i) => 0)
  );

  for (let i = 0; i < height; i++) {
    dp[i][0] = board[i][0];
  }
  for (let i = 0; i < width; i++) {
    dp[0][i] = board[0][i];
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (board[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      max = Math.max(max, dp[i][j]);
    }
  }

  return max * max;
}
