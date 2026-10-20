export function calculateDiscount(price, userType, couponCode) {
  let discount = 0;

  if (couponCode === 'SUMMER10') {
    discount += 0.10;
  }

  return price * (1 - discount);
}
