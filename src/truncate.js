'use strict';

/**
 * Truncates a string to a maximum length, appending a suffix ("...")
 * when the input is cut short. Never returns a string longer than maxLength.
 *
 * @param {string} str
 * @param {number} maxLength
 * @param {string} [suffix='...']
 * @returns {string}
 */
function truncate(str, maxLength, suffix = '...') {
  if (typeof str !== 'string') {
    throw new TypeError('truncate: str must be a string');
  }
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new RangeError('truncate: maxLength must be a non-negative integer');
  }
  if (typeof suffix !== 'string') {
    throw new TypeError('truncate: suffix must be a string');
  }

  if (str.length <= maxLength) {
    return str;
  }

  if (suffix.length >= maxLength) {
    return suffix.slice(0, maxLength);
  }

  return str.slice(0, maxLength - suffix.length) + suffix;
}

module.exports = { truncate };
