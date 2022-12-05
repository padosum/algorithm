const getGCD = (num1, num2) => {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
};

const getLCM = (num1, num2) => {
  return (num1 * num2) / getGCD(num1, num2);
};

function solution(n, m) {
  return [getGCD(n, m), getLCM(n, m)];
}
