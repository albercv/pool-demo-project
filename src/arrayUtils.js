'use strict';

/**
 * Returns a new array with duplicate values removed, preserving the
 * order of first occurrence.
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('unique expects an array');
  }
  return [...new Set(arr)];
}

/**
 * Splits an array into consecutive chunks of the given size. The last
 * chunk may be smaller than `size` if the array doesn't divide evenly.
 * @param {Array} arr
 * @param {number} size - positive integer chunk length
 * @returns {Array[]}
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    throw new TypeError('chunk expects an array');
  }
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError('chunk size must be a positive integer');
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = { unique, chunk };
