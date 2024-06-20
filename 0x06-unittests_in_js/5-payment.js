const Utils = require('./utils')

/**
 * take two numbers and get the sum
 * @param {Number} totalAmount 
 * @param {Number} totalShipping 
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`)
};

module.exports = sendPaymentRequestToApi;
