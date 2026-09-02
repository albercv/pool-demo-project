const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify');

test('lowercases and hyphenates spaces', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('strips accents/diacritics', () => {
  assert.equal(slugify('Héllo Wörld'), 'hello-world');
});

test('collapses runs of non-alphanumeric characters', () => {
  assert.equal(slugify('foo___bar---baz'), 'foo-bar-baz');
});

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  --Hello World--  '), 'hello-world');
});

test('handles already-clean input', () => {
  assert.equal(slugify('already-a-slug'), 'already-a-slug');
});

test('throws a TypeError for non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});
