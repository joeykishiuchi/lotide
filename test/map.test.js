const map = require('../index').map;
const assert = require('chai').assert;

describe ('#map',() => {
  it ('returns "[ \'g\', \'c\', \'t\', \'m\', \'t\' ]" for "(words, word => word[0])"', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[0]);
    const expected = [ 'g', 'c', 't', 'm', 't' ];
    assert.deepEqual(actual, expected);
  });
  it ('returns "[]" for "([], word => word + \'!\')"', () => {
    const actual = map([], word => word + '!');
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});