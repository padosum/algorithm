function solution(my_string) {
  let stack = [];

  my_string.split(' ').map((str) => {
    if (Number.isInteger(Number(str))) {
      const top = stack[stack.length - 1];

      if (top === '+' || top === '-') {
        const operator = stack.pop();
        const operand = Number(stack.pop());

        if (operator === '+') {
          stack.push(operand + Number(str));
        } else if (operator === '-') {
          stack.push(operand - Number(str));
        }
      } else {
        stack.push(str);
      }
    } else {
      stack.push(str);
    }
  });

  return stack.pop();
}
