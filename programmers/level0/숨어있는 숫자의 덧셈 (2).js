function solution(my_string) {
  const onlyNumber = my_string
    .replace(/[^0-9]+/g, ',')
    .split(',')
    .filter(val => val !== '');

  return onlyNumber.reduce((acc, curr) => acc + Number(curr), 0);
}
