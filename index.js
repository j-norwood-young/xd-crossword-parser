// A library for converting .xd Crossword data to JSON (as defined by Saul Pwanson - http://xd.saul.pw)

function XDParser(opts) {
    function processData(data) {
        // Split into parts
        const parts = data.split(/^$^$/gm).filter(s => s !== "\n");
        if (parts.length !== 4) throw (`Too many parts - expected 4, found ${parts.length}`);
        const rawMeta = parts[0];
        const rawGrid = parts[1];
        const rawAcross = parts[2];
        const rawDown = parts[3];
        const meta = processMeta(rawMeta);
        const grid = processGrid(rawGrid);
        const across = processClues(rawAcross);
        const down = processClues(rawDown);
        return { meta, grid, across, down, rawGrid, rawAcross, rawDown, rawMeta, };
    }

    function processMeta(rawMeta) {
        const metaLines = rawMeta.split("\n").filter(s => (s) && s !== "\n");
        let meta = {};
        metaLines.forEach(metaLine => {
            const lineParts = metaLine.split(": ");
            console.log(lineParts);
            meta[lineParts[0]] = lineParts[1];
        });
        return meta;
    }

    function processGrid(rawGrid) {
        let result = [];
        const lines = rawGrid.split("\n").filter(s => (s) && s !== "\n");
        for (let x = 0; x < lines.length; x++) {
            result[x] = lines[x].split("");
        }
        return result;
    }

    function processClues(rawClues) {
        let result = [];
        const lines = rawClues.split("\n").filter(s => (s) && s !== "\n");
        const regex = /(^.\d*)\.\s(.*)\s\~\s(.*)/;
        for (let x = 0; x < lines.length; x++) {
            console.log({ x: lines[x].match(regex) });
            const parts = lines[x].match(regex);
            if (parts.length !== 4) throw (`Could not parse question ${lines[x]}`);
            result[x] = {
                num: parts[1],
                question: parts[2],
                answer: parts[3]
            }
        }
        return result;
    }
    
    opts = Object.assign({}, opts);
    if (opts.filename) {
        // TODO: load file
    } else if (opts.data) {
        return processData(opts.data);
    }
}

module.exports = XDParser;