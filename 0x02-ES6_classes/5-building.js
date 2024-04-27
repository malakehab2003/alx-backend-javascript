export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }

  // create the getter to sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }
}
