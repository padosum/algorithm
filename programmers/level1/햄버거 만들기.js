function solution(ingredient) {
  let answer = 0;

  let stack = [];
  ingredient.forEach((val, idx) => {
    stack.push(val);

    if (stack.length >= 4) {
      if (
        stack[stack.length - 1] === 1 &&
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 4] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        answer++;
      }
    }
  });

  return answer;
}
