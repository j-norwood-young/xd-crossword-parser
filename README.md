# xd-crossword-parser
A library for converting .xd crossword data (as defined by Saul Pwanson - http://xd.saul.pw) to JSON

## Installing

```
npm install --save xd-crossword-parser
```

## Usage (Babel, Node.js etc)

```
const xdparser = require("xd-crossword-parser");
let crosswordData = xdparser({
    data: <your xd data>
});
```
