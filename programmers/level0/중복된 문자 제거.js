function solution(my_string) {
  const result = my_string
    .split('')
    .reduce((acc, curr) => {
      if (acc.includes(curr)) {
      } else {
        acc.push(curr);
      }
      return acc;
    }, [])
    .join('');

  return result;
}
