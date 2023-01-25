function solution(n, k) {
  const kNum = n.toString(k);
  const kArr = kNum.split("0");

  const prime = num => {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = kArr
    .filter(item => item !== "")
    .map(Number)
    .reduce((acc, curr) => {
      return prime(curr) ? acc + 1 : acc;
    }, 0);

  return result;
}
