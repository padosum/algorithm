function solution(my_string) {
  return my_string
    .split('')
    .filter((str) => !isNaN(Number(str)))
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
