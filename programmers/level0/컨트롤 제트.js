function solution(s) {
  let temp = [];

  const result = s.split(' ').reduce((acc, curr, index, src) => {
    if (curr === 'Z') {
      const lastAdded = temp.pop();
      if (lastAdded) {
        return acc - lastAdded;
      }
      return acc;
    } else {
      temp.push(Number(curr));
      return acc + Number(curr);
    }
  }, 0);

  return result;
}
