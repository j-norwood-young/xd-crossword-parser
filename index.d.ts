export interface XDMeta {
    [key: string]: string | undefined;
}

export type XDGrid = string[][];

export interface XDClue {
    num: string;
    question: string;
    answer: string;
}

export interface XDParsed {
    meta: XDMeta;
    grid: XDGrid;
    across: XDClue[];
    down: XDClue[];
    rawGrid: string;
    rawAcross: string;
    rawDown: string;
    rawMeta: string;
}

declare function XDParser(data: string): XDParsed;

export = XDParser;


