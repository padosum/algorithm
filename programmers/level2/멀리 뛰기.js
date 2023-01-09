function solution(n) {
  const step = Array.from({ length: n + 1 }, (v, i) => 0);
  step[1] = 1;
  step[2] = 2;

  for (let i = 3; i < step.length; i++) {
    step[i] = (step[i - 1] + step[i - 2]) % 1234567;
  }

  return step[n];
}
