const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("test calculateNumber with type with chai", () => {
    it("test sum with round to up", () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    });

    it("test subtract with round to up", () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    });

    it("test divide with round to up", () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    });

    it("test divide with 0", () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    });
});
