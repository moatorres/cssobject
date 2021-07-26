# CSS to JavaScript Objects

Convert CSS rules to JavaScript style objects

This repo is a fork from the archived [`css-to-object`](https://github.com/jxnblk/css-to-object) with minor updates and improvements.

```js
import toObj from 'css-to-obj'

const options = {
  kebabCase: true,
  camelCase: false,
  numbers: true,
}

const style = toObj(
  `
  .button {
    color: tomato;
    padding: 16px;
    @media (min-width: 40em) {
      paddingLeft: 32px;
      paddingRight: 32px;
    }
    &:hover {
      color: black;
    }
    & h1 {
      font-size: 48px;
    }
  }
`,
  options
)

console.log(style)
```

##### Prints

```js
const style = {
  '.button': { color: 'tomato', padding: 16 },
  '@media (min-width: 40em)': {
    '.button': { 'padding-left': 32, 'padding-right': 32 },
  },
  '.button:hover': { color: 'black' },
  '.button h1': { 'font-size': 48 },
}
```

## Options

- `numbers` converts **px** values to numbers
- `camelCase` converts CSS properties to `camelCased` keys
- `kebabCase` converts CSS properties to `'kebab-cased'` keys

## Tests

```sh
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |   95.35 |    77.78 |     100 |   97.22 |
 helpers.js |     100 |      100 |     100 |     100 |
 index.js   |   94.12 |    71.43 |     100 |   96.55 | 31
------------|---------|----------|---------|---------|-------------------
```

## 🔖 License

- [MIT](LICENSE.md)
