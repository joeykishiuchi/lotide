const countOnly = require('../index').countOnly;
const assert = require('chai').assert;

describe ('#countLetters',() => {
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  it ('returns "1" for "result1["Jason"]"', () => {
    const actual = result1["Jason"];
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it ('returns " undefined" for "result1["Karima"]"', () => {
    const actual = result1["Karima"];
    const expected =  undefined;
    assert.strictEqual(actual, expected);
  });
  it ('returns "2" for "result1["Fang"]"', () => {
    const actual = result1["Fang"];
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
});