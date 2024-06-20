const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('test using done', () => {
  it('using done test', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
