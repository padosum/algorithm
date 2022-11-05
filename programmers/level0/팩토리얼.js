const factorial = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

function solution(n) {
  let fact = 1;
  let i = 1;
  while (fact <= n) {
    i++;
    fact = factorial(i);
  }
  return i - 1;
}
