function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, (v, i) => -1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack) {
      const top = stack.at(-1);
      if (numbers[top] < numbers[i]) {
        answer[top] = numbers[i];
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i);
  }
  return answer;
}
