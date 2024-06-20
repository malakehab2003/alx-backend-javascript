const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return the welcome message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return payment methods for cart id 123', (done) => {
    request(app)
      .get('/cart/123')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  });

  it('should return 404 for non-numeric cart id', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  });
});

describe('Available payments page', () => {
  it('should return the available payment methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login page', () => {
  it('should return a welcome message with the username', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'John' })
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome John');
        done();
      });
  });
});
