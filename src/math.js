'use strict';

function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function add(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  return a + b;
}

function clamp(value, min, max) {
  assertFiniteNumber(value, 'value');
  assertFiniteNumber(min, 'min');
  assertFiniteNumber(max, 'max');
  if (min > max) {
    throw new RangeError('min must be <= max');
  }
  return Math.min(Math.max(value, min), max);
}

module.exports = { add, clamp };
