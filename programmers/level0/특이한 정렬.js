function solution(numlist, n) {
  numlist.sort((a, b) => {
    if (Math.abs(a - n) > Math.abs(b - n)) {
      return 1;
    } else if (Math.abs(a - n) < Math.abs(b - n)) {
      return -1;
    } else if (Math.abs(a - n) === Math.abs(b - n)) {
      if (a - b > 0) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  return numlist;
}
