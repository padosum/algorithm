function solution(n, k) {
  const LAMB_PRICE = 12000;
  const DRINK_PRICE = 2000;
  const DRINK_BONUS_CNT = 10;

  const bonusDrinkCnt = parseInt(n / DRINK_BONUS_CNT);
  const totalPrice = LAMB_PRICE * n + (k - bonusDrinkCnt) * DRINK_PRICE;
  return totalPrice;
}
