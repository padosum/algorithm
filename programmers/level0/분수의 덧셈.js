const getGCD = (num1, num2) => {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
};

function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;

  const gcd = getGCD(denum, num);

  return [denum / gcd, num / gcd];
}
