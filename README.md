# pool-demo-project

## src/arrayUtils.js

The repo previously had no application code, only a smoke test
(`test/smoke.test.js`) asserting `2 + 2 === 4`. This adds a small,
dependency-free array utility module with input validation and a full
test suite, giving the project real, reusable functionality and
coverage to build on:

- `unique(arr)` — removes duplicate values, preserving first-occurrence
  order.
- `chunk(arr, size)` — splits an array into consecutive groups of
  `size` elements (the last group may be shorter).

Both functions validate their inputs and throw descriptive errors
(`TypeError`/`RangeError`) on misuse instead of failing silently.

Run the test suite with:

```sh
npm test
```
