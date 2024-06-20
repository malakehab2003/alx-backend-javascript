const sinon = require('sinon')
const { expect } = require('chai')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

describe('try stubs', () => {
  it('try stubs', () => {
    const spy = sinon.spy(console);
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    spy.log.restore();
    stub.restore();
  });
});