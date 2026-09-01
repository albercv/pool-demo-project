const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify');

test('slugify lowercases and hyphenates spaces', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify collapses repeated separators', () => {
  assert.equal(slugify('  Hello   World!! '), 'hello-world');
});

test('slugify strips accents', () => {
  assert.equal(slugify('Café con Leche'), 'cafe-con-leche');
});

test('slugify trims leading and trailing hyphens', () => {
  assert.equal(slugify('--Foo Bar--'), 'foo-bar');
});

test('slugify throws on non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});
