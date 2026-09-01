'use strict';

/**
 * Converts a string into a URL-friendly slug:
 * lowercased, trimmed, non-alphanumeric runs collapsed to a single hyphen,
 * with leading/trailing hyphens removed.
 *
 * @param {string} input
 * @returns {string}
 */
function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError('slugify expects a string');
  }

  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
