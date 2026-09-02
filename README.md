# pool-demo-project

A minimal Node.js demo project used to exercise CI (tests + secret scanning).

## Utilities

- `src/formatBytes.js` — formats a byte count as a human-readable string
  (e.g. `1536` -> `"1.50 KB"`). Added to give the repo a real, tested source
  module instead of only a smoke test.

## Development

```bash
npm test
```
