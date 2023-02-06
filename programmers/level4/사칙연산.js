function solution(arr) {
  const len = Math.ceil(arr.length / 2);
  const MAX_DP = Array.from({ length: len }, (v, i) =>
    Array.from({ length: len }, (v, i) => -Infinity)
  );
  const MIN_DP = Array.from({ length: len }, (v, i) =>
    Array.from({ length: len }, (v, i) => Infinity)
  );

  for (let i = 0; i < len; i++) {
    MAX_DP[i][i] = Number(arr[i * 2]);
    MIN_DP[i][i] = Number(arr[i * 2]);
  }

  for (let cnt = 1; cnt < len; cnt++) {
    for (let i = 0; i < len - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === "+") {
          MAX_DP[i][j] = Math.max(
            MAX_DP[i][j],
            MAX_DP[i][k] + MAX_DP[k + 1][j]
          );
          MIN_DP[i][j] = Math.min(
            MIN_DP[i][j],
            MIN_DP[i][k] + MIN_DP[k + 1][j]
          );
        } else {
          MAX_DP[i][j] = Math.max(
            MAX_DP[i][j],
            MAX_DP[i][k] - MIN_DP[k + 1][j]
          );
          MIN_DP[i][j] = Math.min(
            MIN_DP[i][j],
            MIN_DP[i][k] - MAX_DP[k + 1][j]
          );
        }
      }
    }
  }

  return MAX_DP[0][len - 1];
}
