/**
 * Returns a promise based on success flag.
 * @param {boolean} success Whether the operation succeeded or not.
 * @returns {Promise<{data: string}>} Promise that resolves with success message or does nothing on failure.
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
}

module.exports = getPaymentTokenFromAPI;
