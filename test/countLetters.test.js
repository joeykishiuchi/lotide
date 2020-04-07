const countLetters = require('../index').countLetters;
const assert = require('chai').assert;

describe ('#countLetters',() => {
  const result1 = countLetters('lighthouse in the house');
  it ('returns "1" for "result1[\'l\']"', () => {
    const actual = result1['l'];
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it ('returns "4" for "result1[\'h\']"', () => {
    const actual = result1['h'];
    const expected = 4;
    assert.strictEqual(actual, expected);
  });
});