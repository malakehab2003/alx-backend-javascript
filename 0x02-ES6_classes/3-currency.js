export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else {
        this._name = name;
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      } else {
        this._code = code;
      }
  }

  // create a getter for the name
  get name() {
    return this._name;
  }

  // create setter for the name
  set name(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else {
        this._name = name;
      }
  }

  // create getter for the code
  get code() {
    return this._code;
  }

  //create setter for the code
  set code(code) {
    if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      } else {
        this._code = code;
      }
  }

  // create displayFullCurrency function
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}