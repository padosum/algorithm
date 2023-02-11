function solution(topping) {
  let answer = 0;

  const toppingMap = new Map();
  const broToppings = new Set();

  topping.forEach(t => {
    toppingMap.set(t, (toppingMap.get(t) || 0) + 1);
  });

  for (let t of topping) {
    toppingMap.set(t, toppingMap.get(t) - 1);
    broToppings.add(t);

    if (toppingMap.get(t) === 0) {
      toppingMap.delete(t);
    }

    if (toppingMap.size === broToppings.size) {
      answer++;
    }

    if (topping.size < broToppings.size) {
      break;
    }
  }

  return answer;
}
