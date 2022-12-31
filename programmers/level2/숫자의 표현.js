function solution(n) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);

  const sumArray = arr.map((num, idx) => {
    let sum = num;
    for (let i = num + 1; i < n; i++) {
      if (sum < n) {
        sum = sum + i;
      } else {
        break;
      }
    }
    return sum;
  });

  return sumArray.filter(sum => sum === n).length;
}
