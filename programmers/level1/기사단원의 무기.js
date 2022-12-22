function solution(number, limit, power) {
  const numbers = Array.from({ length: number }, (v, i) => i + 1);

  const divisorsCnt = numbers.map(num => {
    let count = 0;
    for (let i = 1; i <= Number(Math.sqrt(num)); i++) {
      if (num % i == 0) {
        if (Number(Math.sqrt(num)) === i) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    return count;
  });

  const result = divisorsCnt.reduce((acc, curr) => {
    if (curr > limit) {
      return acc + power;
    } else {
      return acc + curr;
    }
  }, 0);

  return result;
}
