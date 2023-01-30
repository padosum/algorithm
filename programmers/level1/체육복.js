function solution(n, lost, reserve) {
  let uniqueLost = lost.sort().filter(item => !reserve.includes(item));
  const uniqueReserve = reserve.sort().filter(item => !lost.includes(item));

  for (let i = 0; i < uniqueReserve.length; i++) {
    const current = uniqueReserve[i];
    if (uniqueLost.includes(current - 1)) {
      uniqueLost = uniqueLost.filter(item => item !== current - 1);
    } else if (uniqueLost.includes(current + 1)) {
      uniqueLost = uniqueLost.filter(item => item !== current + 1);
    }
  }

  return n - uniqueLost.length;
}
