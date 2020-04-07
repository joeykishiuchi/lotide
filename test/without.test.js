const without = require('../index').without;
const assert = require('chai').assert;

describe ('#without',() => {
  it ('returns "[1, 2]" for "([1, 3, 2, 4], [3, 4])"', () => {
    const actual = without([1, 3, 2, 4], [3, 4]);
    const expected = [1, 2];
    assert.deepEqual(actual, expected);
  });
  it ('returns "[]" for "([1, 3, 2, 4], [1, 3, 2, 4])"', () => {
    const actual = without([1, 3, 2, 4], [1, 3, 2, 4]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});