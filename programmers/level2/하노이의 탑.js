const hanoi = (n, from, to, temp, result) => {
  if (n === 1) {
    result.push([from, to]);
    return;
  }

  hanoi(n - 1, from, temp, to, result);
  result.push([from, to]);
  hanoi(n - 1, temp, to, from, result);
};

function solution(n) {
  const answer = [];
  hanoi(n, 1, 3, 2, answer);
  return answer;
}
