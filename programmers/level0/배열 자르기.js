function solution(numbers, num1, num2) {
  const result = numbers.filter((num, index) => {
    return index >= num1 && index <= num2;
  });

  return result;
}
