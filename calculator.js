export function calculateDiscount(price, userType, couponCode) {
  let discount = 0;

  if (customer === 'VIP') {
    discount += 0.20;
  }

  return price * (1 - discount);
}
