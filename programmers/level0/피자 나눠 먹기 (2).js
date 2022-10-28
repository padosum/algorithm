const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b);
};

const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b);
};

function solution(n) {
  const L = getLCM(6, n);
  return L / 6;
}
