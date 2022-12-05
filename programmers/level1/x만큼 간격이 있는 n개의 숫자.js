function solution(x, n) {
  const arr = Array.from({ length: n }, (v, i) => x);

  const answer = arr.map((value, idx) => {
    return x * (idx + 1);
  });
  return answer;
}
