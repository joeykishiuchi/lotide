const tail = require('../index').tail;
const assert = require('chai').assert;

describe ('#tail',() => {
  it ('returns "[2, 3]" for "[1, 2, 3]"', () => {
    const actual = tail([1, 2, 3]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it('returns "["Lighthouse", "Labs"]" for "["Hello", "Lighthouse", "Labs"]"', () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });
  it('returns "[1, 2]" for "[2]"', () => {
    const actual = tail([1, 2]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });
  it('returns "[]" for "[1]"', () => {
    const actual = tail([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});