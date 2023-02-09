function solution(n) {
  var answer = 0;
  const MOD = 1000000007;
  const DP = Array.from({ length: n + 1 }).fill(0);

  DP[1] = 1;
  DP[2] = 2;

  for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % MOD;
  }

  return DP[n];
}
