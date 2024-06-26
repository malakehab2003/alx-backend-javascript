const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      const round_b = Math.round(b);
      if (round_b === 0) {
        return "Error"
      } else {
        return Math.round(a) / Math.round(b);
      }
    }
  }
};

module.exports = Utils;
