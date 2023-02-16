function solution(order) {
  let answer = 0;
  const belt = Array.from({ length: order.length }, (v, i) => order.length - i);
  const stack = [];

  for (let i = 0; i < order.length; i++) {
    const current = order[i];

    while (belt.at(-1) <= current) {
      stack.push(belt.pop());
    }

    const stackTop = stack.at(-1);
    if (stackTop === current) {
      stack.pop();
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
