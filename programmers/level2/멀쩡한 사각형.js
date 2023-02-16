const getGCD = (num1, num2) => {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
};

function solution(w, h) {
  return w * h - (w + h - getGCD(w, h));
}
