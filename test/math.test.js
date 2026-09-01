const test = require('node:test');
const assert = require('node:assert/strict');
const { add, clamp } = require('../src/math');

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test('add rejects non-numeric input', () => {
  assert.throws(() => add('2', 3), TypeError);
  assert.throws(() => add(2, NaN), TypeError);
});

test('clamp keeps values within range', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
});

test('clamp rejects an inverted range', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
