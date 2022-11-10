function solution(my_string, num1, num2) {
  const str1 = my_string[num1];
  const str2 = my_string[num2];

  const result = my_string
    .split('')
    .map((str, idx) => {
      if (idx === num1) {
        return str2;
      } else if (idx === num2) {
        return str1;
      }
      return str;
    })
    .join('');

  return result;
}

function solution(my_string, num1, num2) {
  my_string = my_string.split('');

  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join('');
}
