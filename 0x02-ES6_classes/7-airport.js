export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    } else {
      this._name = name;
    }

    if (typeof code !== 'string') {
      throw new TypeError('code must be string');
    } else {
      this._code = code;
    }
  }

  toString() {
    return `[${this._code}]`;
  }
}
