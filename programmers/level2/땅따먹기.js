function solution(land) {
  const DP = Array.from({ length: land.length }, (v, i) =>
    Array.from({ length: 4 }, (v, i) => 0)
  );

  for (let i = 0; i < 4; i++) {
    DP[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const prev = DP[i - 1].filter((_, idx) => idx !== j);
      DP[i][j] = land[i][j] + Math.max(...prev);
    }
  }

  return Math.max(...DP[land.length - 1]);
}
