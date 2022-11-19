function solution(chicken) {
  let total = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    serviceChicken = parseInt(coupon / 10);
    coupon = serviceChicken + (coupon % 10);
    total = total + serviceChicken;
  }
  return total;
}
