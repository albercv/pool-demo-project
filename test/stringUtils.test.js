const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/stringUtils');

test('slugify lowercases and hyphenates spaces', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify strips punctuation', () => {
  assert.equal(slugify('Café con leche — 100% Bueno!'), 'cafe-con-leche-100-bueno');
});

test('slugify trims leading/trailing separators', () => {
  assert.equal(slugify('  --Weird Input--  '), 'weird-input');
});

test('slugify removes accents', () => {
  assert.equal(slugify('Ñoño Zâmbia'), 'nono-zambia');
});

test('slugify throws on non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});
