const findKeyByValue = require('../index').findKeyByValue;
const assert = require('chai').assert;

describe ('#findKey',() => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it ('returns "drama" for "(bestTVShowsByGenre, "The Wire")"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.strictEqual(actual, expected);
  });
  it ('returns undefined for "(bestTVShowsByGenre, "That \'70s Show")"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});