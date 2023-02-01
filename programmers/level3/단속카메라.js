function solution(routes) {
  let answer = 0;

  routes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      a[1] - b[1];
    }
  });

  let prev = Number.NEGATIVE_INFINITY;
  for (const route of routes) {
    const [start, end] = route;

    if (prev < start) {
      answer++;
      prev = end;
      continue;
    }

    if (prev > end) {
      prev = end;
    }
  }
  return answer;
}
