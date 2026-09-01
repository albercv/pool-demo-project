const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify');

test('slugify lowercases and hyphenates spaces', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify collapses repeated separators', () => {
  assert.equal(slugify('  Hello   World!! '), 'hello-world');
});

test('slugify strips leading and trailing punctuation', () => {
  assert.equal(slugify('--Ready, Set, Go--'), 'ready-set-go');
});

test('slugify handles strings that are already slugs', () => {
  assert.equal(slugify('already-a-slug'), 'already-a-slug');
});

test('slugify throws on non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});
