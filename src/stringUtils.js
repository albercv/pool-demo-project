'use strict';

const COMBINING_DIACRITICS = /[̀-ͯ]/g;

function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError('slugify expects a string');
  }

  return input
    .normalize('NFKD')
    .replace(COMBINING_DIACRITICS, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
