const test = require('node:test');
const assert = require('node:assert/strict');
const { capitalize } = require('../src/capitalize');

test('capitalize upper-cases the first letter and lower-cases the rest', () => {
  assert.equal(capitalize('hELLO'), 'Hello');
});

test('capitalize leaves an already-capitalized word unchanged', () => {
  assert.equal(capitalize('World'), 'World');
});

test('capitalize returns an empty string unchanged', () => {
  assert.equal(capitalize(''), '');
});

test('capitalize handles single-character strings', () => {
  assert.equal(capitalize('a'), 'A');
});

test('capitalize throws on non-string input', () => {
  assert.throws(() => capitalize(42), TypeError);
});
