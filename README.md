# pool-demo-project

Minimal Node.js demo project used to validate the pool/CI workflow.

## Usage

```js
const { slugify } = require('./src/slugify');

slugify('Héllo, Wörld!'); // -> 'hello-world'
```

`slugify` turns arbitrary text into a URL-friendly slug: it strips accents,
lowercases the text, collapses non-alphanumeric runs into single hyphens, and
trims leading/trailing hyphens.

## Testing

```sh
npm test
```

Runs the project's test suite with Node's built-in test runner
(`node --test`).
