const findKey = require('../index').findKey;
const assert = require('chai').assert;

describe ('#findKey',() => {
  const constellations = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it ('returns "noma" for "(constellations, x => x.stars === 2)"', () => {
    const actual = findKey(constellations, x => x.stars === 2);
    const expected = "noma";
    assert.strictEqual(actual, expected);
  });
  it ('returns "Akaleri" for "(constellations, x => x.stars === 3)"', () => {
    const actual = findKey(constellations, x => x.stars === 9);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});