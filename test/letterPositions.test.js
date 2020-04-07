const letterPositions = require('../index').letterPositions;
const assert = require('chai').assert;

describe ('#letterPositions',() => {
  const result1 = letterPositions('hello');
  it ('returns "[2, 3]" for "result1.l"', () => {
    const result1 = letterPositions('hello');
    const actual = result1.l;
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it ('returns "{}" for empty string', () => {
    const actual = letterPositions('');
    const expected = {};
    assert.deepEqual(actual, expected);
  });
});