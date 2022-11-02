function solution(emergency) {
  const emergencyArr = [...emergency];
  const sortedArr = emergencyArr.sort((a, b) => b - a);
  const result = emergency
    .map((order) => sortedArr.findIndex((num) => num === order))
    .map((num) => num + 1);

  return result;
}
