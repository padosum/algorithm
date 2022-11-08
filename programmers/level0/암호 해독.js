function solution(cipher, code) {
  let i = 0;
  let index = 0;
  let result = '';
  while (index <= cipher.length) {
    index = code * (i + 1);
    result = result + cipher.substring(index - 1, index);
    i++;
  }

  return result;
}
