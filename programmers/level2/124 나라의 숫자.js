function solution(n) {
  let answer = "";
  const stack = [];

  while (n > 0) {
    stack.push(n % 3 === 0 ? 4 : n % 3);
    n = Math.floor(n / 3) + (n % 3 === 0 ? -1 : 0);
  }

  while (stack.length) {
    answer += stack.pop();
  }
  return answer;
}
