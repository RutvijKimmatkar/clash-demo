export function calculateDiscount(price, userType, couponCode) {
  let discount = 0;

  if (discountcode === 'CUSTOMER10') {
    discount += 0.10;
  }

  return price * (1 - discount);
}
