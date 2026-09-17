const test = require('node:test');
const assert = require('node:assert/strict');
const { truncate } = require('../src/truncate');

test('returns the original string when within maxLength', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('returns the original string when exactly maxLength', () => {
  assert.equal(truncate('hello', 5), 'hello');
});

test('truncates and appends the default suffix when too long', () => {
  assert.equal(truncate('hello world', 8), 'hello...');
});

test('truncates and appends a custom suffix', () => {
  assert.equal(truncate('hello world', 7, '…'), 'hello …');
});

test('falls back to a hard cut when suffix does not fit', () => {
  assert.equal(truncate('hello world', 2, '...'), '..');
});

test('handles maxLength of 0', () => {
  assert.equal(truncate('hello', 0), '');
});

test('handles empty string input', () => {
  assert.equal(truncate('', 5), '');
});

test('throws a TypeError when str is not a string', () => {
  assert.throws(() => truncate(42, 5), TypeError);
});

test('throws a RangeError when maxLength is negative', () => {
  assert.throws(() => truncate('hello', -1), RangeError);
});

test('throws a RangeError when maxLength is not an integer', () => {
  assert.throws(() => truncate('hello', 3.5), RangeError);
});

test('throws a TypeError when suffix is not a string', () => {
  assert.throws(() => truncate('hello world', 8, 42), TypeError);
});
