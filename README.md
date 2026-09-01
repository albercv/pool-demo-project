# pool-demo-project

## Decisión de la mejora

El repositorio solo contenía un test de humo (`2 + 2 === 4`) sin ninguna
funcionalidad real que verificar. Se añadió una utilidad pequeña y
autocontenida, `slugify`, junto con su suite de tests, para que el
proyecto tenga al menos una pieza de código real cubierta por pruebas
automatizadas y sirva de ejemplo del patrón a seguir (`src/` + `test/`).

## Uso

```js
const { slugify } = require('./src/slugify');

slugify('Hello World'); // 'hello-world'
```

`slugify` normaliza un string a un formato apto para URLs: minúsculas,
recortado, con cualquier secuencia de caracteres no alfanuméricos
colapsada en un único guion, y sin guiones al inicio o al final.

## Tests

```sh
npm test
```
