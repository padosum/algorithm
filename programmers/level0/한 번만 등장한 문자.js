function solution(s) {
  let temp = [];
  let duplicated = [];

  s.split('').map((str) => {
    if (temp.includes(str)) {
      duplicated.push(str);
    } else {
      temp.push(str);
    }
  });

  const unique = s.split('').filter((str) => !duplicated.includes(str));

  return unique.sort().join('');
}
