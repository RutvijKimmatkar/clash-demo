export function calculateDiscount(price, userType, couponCode) {
  let discount = 0;

  if (userType === 'VIP') {
    discount += 0.20;
  }

  return price * (1 - discount);
}
