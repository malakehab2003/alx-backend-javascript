const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });

    it('Correct status code when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/123`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)', (done) => {
      request.get(`${baseUrl}/cart/abc`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Correct result when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/456`, (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 456');
        done();
      });
    });
  
    it('Correct result when :id is NOT a number (=> 404)', (done) => {
      request.get(`${baseUrl}/cart/xyz`, (error, response, body) => {
        expect(body).to.equal('Cannot GET /cart/xyz\n');
        done();
      });
    });
  });
});