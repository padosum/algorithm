function solution(my_string) {
  return my_string
    .split('')
    .filter((str) => !isNaN(Number(str)))
    .sort((a, b) => a - b)
    .map(Number);
}
