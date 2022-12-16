function solution(a, b, n) {
  let result = 0;

  let remain = n;

  while (remain >= a) {
    const newBottleCount = Math.floor(remain / a) * b;
    result += newBottleCount;
    remain = newBottleCount + (remain % a);
  }
  return result;
}
