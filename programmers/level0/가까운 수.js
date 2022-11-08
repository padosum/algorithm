function solution(array, n) {
  array.push(n);

  const sorted = array.sort((a, b) => a - b);
  const idx = sorted.findIndex((element) => element === n);

  if (idx === 0) {
    return sorted[idx + 1];
  } else {
    if (idx === sorted.length - 1) {
      return sorted[idx - 1];
    } else if (sorted[idx] - sorted[idx - 1] <= sorted[idx + 1] - sorted[idx]) {
      return sorted[idx - 1];
    } else {
      return sorted[idx + 1];
    }
  }
}
