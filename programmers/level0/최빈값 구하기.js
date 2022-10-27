function solution(array) {
  let result = -1;
  let max = -1;

  const countMap = new Map();

  array.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  for (const [key, value] of countMap) {
    if (max < value) {
      result = key;
      max = value;
    } else if (max === value) {
      result = -1;
    }
  }

  return result;
}
