import {checkSum} from "../checksum";

const fs = require('fs');
const path = require('path');

describe('checkSum', () => {
    it(`should calculate checksum for  list of box Ids`, () => {
        let ids = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
        expect(checkSum(ids)).toBe(12);
    })
    it(`should calculate checksum for  list of box Ids from input.txt`, () => {
        const inputfromFile = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
        const ids = inputfromFile.split('\n').filter(n => n);
        expect(checkSum(ids)).toBe(7776);
    })
})
