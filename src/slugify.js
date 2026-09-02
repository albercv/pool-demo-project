'use strict';

/**
 * Convert a string into a URL-friendly slug:
 * lowercase, accents stripped, non-alphanumeric runs collapsed to a single
 * hyphen, and leading/trailing hyphens trimmed.
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
