function solution(k, score) {
  let result = [];
  let list = [];
  score.map((val, idx) => {
    list.push(val);
    const sorted = list.sort((a, b) => b - a);
    if (list.length >= k) {
      result.push(sorted[k - 1]);
    } else {
      result.push(sorted[sorted.length - 1]);
    }
  });
  return result;
}
