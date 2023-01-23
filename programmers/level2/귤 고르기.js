function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let result = 0;
  for (const [key, val] of sortedMap) {
    result++;
    if (k > val) {
      k = k - val;
    } else {
      break;
    }
  }
  return result;
}
