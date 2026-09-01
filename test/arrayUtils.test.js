const test = require('node:test');
const assert = require('node:assert/strict');
const { unique, chunk } = require('../src/arrayUtils');

test('unique removes duplicates and preserves first-occurrence order', () => {
  assert.deepEqual(unique([1, 2, 2, 3, 1, 4]), [1, 2, 3, 4]);
});

test('unique returns an empty array unchanged', () => {
  assert.deepEqual(unique([]), []);
});

test('unique throws on non-array input', () => {
  assert.throws(() => unique('not an array'), TypeError);
});

test('chunk splits an array into even groups', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 2), [[1, 2], [3, 4], [5, 6]]);
});

test('chunk keeps a smaller final group when it does not divide evenly', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk throws on a non-positive or non-integer size', () => {
  assert.throws(() => chunk([1, 2, 3], 0), RangeError);
  assert.throws(() => chunk([1, 2, 3], 1.5), RangeError);
});

test('chunk throws on non-array input', () => {
  assert.throws(() => chunk('not an array', 2), TypeError);
});
