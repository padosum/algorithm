function solution(num, k) {
  const idx = num
    .toString()
    .split('')
    .findIndex((v, idx) => {
      if (Number(v) === k) {
        return true;
      } else {
        return false;
      }
    });

  if (idx !== -1) {
    return idx + 1;
  } else {
    return idx;
  }
}
