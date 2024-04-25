import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be validcurrency');
    }
  }

  // create getter for amount
  get amount() {
    return this._amount;
  }

  // create setter for amount
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }
  }

  // create getter for currency
  get currency() {
    return this._currency;
  }

  // create setter for the currency
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be validcurrency');
    }
  }

  // create function to show the amount and the currency
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // create function convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
