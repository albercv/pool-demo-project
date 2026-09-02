const test = require('node:test');
const assert = require('node:assert/strict');
const { formatBytes } = require('../src/formatBytes');

test('formats zero bytes', () => {
  assert.equal(formatBytes(0), '0 B');
});

test('formats bytes below 1024 with the B unit', () => {
  assert.equal(formatBytes(512), '512.00 B');
});

test('formats kilobytes', () => {
  assert.equal(formatBytes(1536), '1.50 KB');
});

test('formats larger units correctly', () => {
  assert.equal(formatBytes(1024 ** 3), '1.00 GB');
});

test('respects a custom decimals argument', () => {
  assert.equal(formatBytes(1536, 0), '2 KB');
});

test('rejects negative numbers', () => {
  assert.throws(() => formatBytes(-1), RangeError);
});

test('rejects non-finite input', () => {
  assert.throws(() => formatBytes(Infinity), RangeError);
  assert.throws(() => formatBytes(NaN), RangeError);
});
