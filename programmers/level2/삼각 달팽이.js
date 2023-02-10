function solution(n) {
  const arr = Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }).fill(0)
  );

  let row = -1;
  let col = 0;
  let num = 1;

  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) {
      arr[++row][col] = num++;
    }
    for (let j = 0; j < i - 1; j++) {
      arr[row][++col] = num++;
    }

    for (let j = 0; j < i - 2; j++) {
      arr[--row][--col] = num++;
    }
  }

  return arr.flat();
}
