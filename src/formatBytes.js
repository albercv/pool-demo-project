const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

/**
 * Formats a byte count as a human-readable string (e.g. 1536 -> "1.5 KB").
 * @param {number} bytes - non-negative byte count
 * @param {number} [decimals=2] - number of decimal places to keep
 * @returns {string}
 */
function formatBytes(bytes, decimals = 2) {
  if (typeof bytes !== 'number' || !Number.isFinite(bytes) || bytes < 0) {
    throw new RangeError('formatBytes expects a finite, non-negative number');
  }
  if (bytes === 0) return '0 B';

  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    UNITS.length - 1
  );
  const value = bytes / 1024 ** exponent;
  const precision = Math.max(decimals, 0);

  return `${value.toFixed(precision)} ${UNITS[exponent]}`;
}

module.exports = { formatBytes };
