'use strict';

/**
 * Converts a string into a URL-friendly slug: lowercase, accents stripped,
 * non-alphanumeric runs collapsed to a single hyphen, no leading/trailing hyphens.
 */
function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError('slugify expects a string');
  }

  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
