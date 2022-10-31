function solution(my_string, n) {
  let result = "";

  my_string.split("").forEach((str) => {
    result += str.repeat(n);
  });

  return result;
}
