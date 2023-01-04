function solution(brown, yellow) {
  let width = 0;
  let height = 0;
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      const w = yellow / i;
      const h = i;
      if ((w + 2) * 2 + h * 2 === brown) {
        width = w + 2;
        height = h + 2;
      }
    }
  }

  return [width, height];
}
