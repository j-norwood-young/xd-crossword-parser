# xd-crossword-parser
A library for converting .xd crossword data (as defined by Saul Pwanson - http://xd.saul.pw) to JSON by Jason Norwood-Young

![Coverage badge gree][coverage-badge-green] ![Coverage badge gree][coverage-badge-yellow] ![Coverage badge gree][coverage-badge-red]

## Installing

```
npm install --save xd-crossword-parser
```

## Usage (Babel, Node.js etc)

```
const xdparser = require("xd-crossword-parser");
let crosswordData = xdparser(data);
```

## Testing

```
npm i
npm run test
```