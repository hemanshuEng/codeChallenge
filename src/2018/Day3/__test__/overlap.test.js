import {overlap} from "../overlap";

const fs = require('fs');
const path = require('path');


describe('overlap', () => {
    it(`should calculate overlapping spots`, () => {
        let inputs = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
        /**
         ........
         ...2222.
         ...2222.
         .11XX22.
         .11XX22.
         .111133.
         .111133.
         ........
         ovelaping spot = 4
         */
        expect(overlap(inputs)).toBe(4);
    })
    it(`should calculate overlapping spots from input.txt`, () => {
        const inputfromFile = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
        const inputs = inputfromFile.split('\n').filter(n => n);
        expect(overlap(inputs)).toBe(107043);
    })
})
