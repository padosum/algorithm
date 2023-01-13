const correctParentheses = str => {
  let stack = [];

  str.forEach(s => {
    if (stack.length === 0) {
      stack.push(s);
    } else {
      const last = stack[stack.length - 1];
      switch (last) {
        case "(":
          if (s === ")") {
            stack.pop();
          } else {
            stack.push(s);
          }
          break;
        case "[":
          if (s === "]") {
            stack.pop();
          } else {
            stack.push(s);
          }
          break;
        case "{":
          if (s === "}") {
            stack.pop();
          } else {
            stack.push(s);
          }
          break;
      }
    }
  });
  return stack.length > 0 ? false : true;
};

function solution(s) {
  let arr = s.split("");
  const len = arr.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    const { 0: first, ...rest } = arr;
    arr = arr.slice(1).concat(first);
    if (correctParentheses(arr)) {
      result++;
    }
  }
  return result;
}
