const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify');

test('lowercases and hyphenates words', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('strips accents', () => {
  assert.equal(slugify('Café Con Leche'), 'cafe-con-leche');
});

test('collapses non-alphanumeric runs into a single hyphen', () => {
  assert.equal(slugify('Hello,   World!!  123'), 'hello-world-123');
});

test('trims leading and trailing hyphens', () => {
  assert.equal(slugify('  --Already--Slugged--  '), 'already-slugged');
});

test('throws a TypeError for non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});
