import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDiscount } from './calculator.js';

test('standard VIP discount without coupon', () => {
  const result = calculateDiscount(100, 'VIP', null);
  assert.equal(result, 80);
});

test('VIP with SUMMER10 coupon stacks both discounts (30% off)', () => {
  const result = calculateDiscount(100, 'VIP', 'SUMMER10');
  assert.equal(result, 70);
});

test('Regular user with SUMMER10 gets 10% off', () => {
  const result = calculateDiscount(100, 'REGULAR', 'SUMMER10');
  assert.equal(result, 90);
});
