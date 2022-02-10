# xd-crossword-parser
A library for converting .xd crossword data (as defined by Saul Pwanson - http://xd.saul.pw) to JSON by Jason Norwood-Young

[branches](coverage/badge-branches.svg) [functions](coverage/badge-functions.svg) [lines](coverage/badge-lines.svg) [statements](coverage/badge-statements.svg)

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