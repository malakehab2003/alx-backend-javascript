const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("test calculateNumber with type", () => {
    it("test sum with round to up", () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
    });

    it("test subtract with round to up", () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });

    it("test divide with round to up", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });

    it("test divide with 0", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
});
