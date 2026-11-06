export function calculateDiscount(price, userType, couponCode) {
  let discount = 0;

  if (couponCode === 'SUMMER10') {
    discount += 0.10;
  }
  if (userType === 'VIP') {
    discount += 0.20;
  }

  return price * (1 - discount);
}