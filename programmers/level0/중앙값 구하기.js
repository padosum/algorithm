function solution(array) {
  const centerIndex = Math.floor(array.length / 2);
  const sortedArr = array.sort((a, b) => a - b);

  return sortedArr[centerIndex];
}
