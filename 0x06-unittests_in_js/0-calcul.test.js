const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('test calculate', () => {
    it('test non float number', () => {
        assert.strictEqual(calculateNumber(1, 2), 3)
    });

    it('test float number', () => {
        assert.strictEqual(calculateNumber(1.1, 2.2), 3)
    });

    it('test float number rounded to next number', () => {
        assert.strictEqual(calculateNumber(1.6, 2), 4)
    });
});