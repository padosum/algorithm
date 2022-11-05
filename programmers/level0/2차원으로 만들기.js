function solution(num_list, n) {
  let temp = [];

  const result = num_list.reduce((acc, curr, idx) => {
    if ((idx + 1) % n === 0 && idx !== 0) {
      temp.push(curr);
      const newArr = [...temp];
      acc.push(newArr);
      temp = [];
    } else {
      temp.push(curr);
    }
    return acc;
  }, []);
  return result;
}
