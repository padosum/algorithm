function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
  let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);

  const half = (sum1 + sum2) / 2;
  const queue = [...queue1, ...queue2];

  let p1 = 0;
  let p2 = queue1.length;

  for (let i = 0; i < queue1.length * 3; i++) {
    if (sum1 === half) {
      return i;
    }

    sum1 = sum1 > half ? sum1 - queue[p1++] : sum1 + queue[p2++];
  }

  return -1;
}
