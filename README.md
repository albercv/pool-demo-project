# pool-demo-project

## Utilities

### `slugify(input)` (`src/stringUtils.js`)

Converts a string into a URL-safe slug: lowercases, strips accents,
replaces runs of non-alphanumeric characters with a single hyphen, and
trims leading/trailing hyphens. Throws a `TypeError` if `input` is not
a string.

```js
const { slugify } = require('./src/stringUtils');

slugify('Café con leche — 100% Bueno!'); // 'cafe-con-leche-100-bueno'
```

## Testing

```sh
npm test
```
