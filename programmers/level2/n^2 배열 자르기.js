function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    const idx = i + 1;
    const num = idx % n === 0 ? n : Math.max(idx % n, Math.ceil(idx / n));
    result.push(num);
  }

  return result;
}
