const fact = (num) => {
  if (num <= 1) {
    return BigInt(1);
  }

  return BigInt(num) * fact(num - 1);
};

function solution(balls, share) {
  if (balls === share) return 1;
  const result = fact(balls) / (fact(balls - share) * fact(share));
  return result;
}
