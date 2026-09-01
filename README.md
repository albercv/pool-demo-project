# pool-demo-project

## `slugify` utility

Added `src/slugify.js`, a small dependency-free helper that converts arbitrary
strings into URL-friendly slugs (lowercase, ASCII, hyphen-separated, accents
stripped). This was the first piece of actual application code in the repo
(previously only a smoke test existed), so it gives the project something
concrete to build on and test against.

```js
const { slugify } = require('./src/slugify');

slugify('Café con Leche'); // -> 'cafe-con-leche'
```

Tests live in `test/slugify.test.js` and run via `npm test` (Node's built-in
test runner).
