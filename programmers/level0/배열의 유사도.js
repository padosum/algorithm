function solution(s1, s2) {
  const result = s1.reduce((acc, curr) => {
    if (s2.includes(curr)) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return result;
}
