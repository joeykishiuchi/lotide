const takeUntil = require('../index').takeUntil;
const assert = require('chai').assert;

describe ('#takeUntil',() => {
  it ('returns "[2, 3, 7]" for "([2, 3, 7, -1, 4, -8], x => x < 0)"', () => {
    const actual = takeUntil([2, 3, 7, -1, 4, -8], x => x < 0);
    const expected = [2, 3, 7];
    assert.deepEqual(actual, expected);
  });
  it ('returns "[2, 3, 7, -1, 4, -8]" for "[2, 3, 7, -1, 4, -8], x === \'!\')"', () => {
    const actual = takeUntil([2, 3, 7, -1, 4, -8], x => x === '!');
    const expected = [2, 3, 7, -1, 4, -8];
    assert.deepEqual(actual, expected);
  });
});