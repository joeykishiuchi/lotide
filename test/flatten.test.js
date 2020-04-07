const flatten = require('../index').flatten;
const assert = require('chai').assert;

describe ('#flatten',() => {
  it ('returns "[1, 2, 3, 4, 5, 6]" for "[1, 2, [3, 4], 5, [6]]"', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });
  it ('returns "[1, 2, 3, [4], 5, 6]" for "[1, 2, [3, [4]], 5, [6]]"', () => {
    const actual = flatten([1, 2, [3, [4]], 5, [6]]);
    const expected = [1, 2, 3, [4], 5, 6];
    assert.deepEqual(actual, expected);
  });
});
