import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  // create getter for the floors attr
  get floors() {
    return this._floors;
  }

  // override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
