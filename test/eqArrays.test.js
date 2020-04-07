const eqArrays = require('../index').eqArrays;
const assert = require('chai').assert;

describe ('#eqArrays',() => {
  it ('returns "true" for "[1, 2, 3], [1, 2, 3]"', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it ('returns "false" for "["1", "2", "3"], ["1", "2", 3]"', () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
  it ('returns "true" for "["1", ["2", ["3", ["4"]]],[]], ["1", ["2", ["3", ["4"]]],[]]"', () => {
    const actual = eqArrays(["1", ["2", ["3", ["4"]]],[]], ["1", ["2", ["3", ["4"]]],[]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it ('returns "true" for "["1", "2", [["3"],"4"]], ["1", "2", [["3"],"4"]]"', () => {
    const actual = eqArrays(["1", "2", [["3"],"4"]], ["1", "2", [["3"],"4"]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});