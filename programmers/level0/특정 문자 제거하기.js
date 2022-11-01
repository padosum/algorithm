function solution(my_string, letter) {
  const strArr = my_string.split("");
  const filtered = strArr.filter((str) => str !== letter);
  return filtered.join("");
}
