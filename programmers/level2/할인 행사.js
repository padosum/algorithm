function solution(want, number, discount) {
  let answer = 0;
  const wantObj = {};
  want.forEach((w, i) => {
    wantObj[w] = number[i];
  });

  for (let i = 0; i + 10 <= discount.length; i++) {
    const discountItems = discount.slice(i, i + 10);
    const discountMap = new Map();
    discountItems.forEach(item => {
      discountMap.set(item, (discountMap.get(item) || 0) + 1);
    });

    let canDiscount = true;
    for (const [item, num] of Object.entries(wantObj)) {
      if (!discountMap.has(item)) {
        canDiscount = false;
        break;
      }
      if (discountMap.get(item) < num) {
        canDiscount = false;
        break;
      }
    }

    if (canDiscount) {
      answer++;
    }
  }
  return answer;
}
