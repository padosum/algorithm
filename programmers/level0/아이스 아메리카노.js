function solution(money) {
  const americanoPrice = 5500;
  const maxCnt = Math.floor(money / americanoPrice);
  const changes = money - maxCnt * americanoPrice;
  return [maxCnt, changes];
}
