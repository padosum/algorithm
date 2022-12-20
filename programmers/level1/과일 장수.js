function solution(k, m, score) {
  let result = 0;
  let ordered = score.sort((a, b) => b - a);
  let i = 1;
  ordered.forEach((val, idx) => {
    if (idx === m * i - 1) {
      result += val * m;
      i++;
    }
  });

  return result;
}
