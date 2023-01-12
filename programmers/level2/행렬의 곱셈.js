function solution(arr1, arr2) {
  let A = arr1;
  let B = arr2;

  const answer = Array.from({ length: A.length }, (v, i) =>
    Array.from({ length: B[0].length })
  );

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      answer[i][j] = A[i].reduce((acc, curr, idx) => {
        return acc + curr * B[idx][j];
      }, 0);
    }
  }
  return answer;
}
