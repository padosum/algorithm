function solution(my_string) {
  const invertCase = my_string
    .split('')
    .map((str) => {
      if (/^[A-Z]*$/.test(str)) {
        return str.toLowerCase();
      } else {
        return str.toUpperCase();
      }
    })
    .join('');

  return invertCase;
}
