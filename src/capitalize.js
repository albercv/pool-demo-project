'use strict';

/**
 * Capitalizes the first character of a string and lower-cases the rest.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('capitalize expects a string');
  }
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = { capitalize };
