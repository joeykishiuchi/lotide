const eqObjects = require('../index').eqObjects;
const assert = require('chai').assert;


describe ('#eqObjects',() => {
  it ('returns "true" for "{ a: "1", b: "2"}, { b: "2", a: "1"})"', () => {
    const actual = eqObjects({ a: "1", b: "2"}, { b: "2", a: "1"});
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it ('returns "false" for "{ b: "2", a: "1"}, { a: "1", b: "2", c: "3" }"', () => {
    const actual = eqObjects({ b: "2", a: "1"}, { a: "1", b: "2", c: "3" });
    const expected = false;
    assert.strictEqual(actual, expected);
  });
  it ('returns "true" for "{ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }"', () => {
    const actual = eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it ('returns "true" for "{ y: 0, z: 1 }, b: 2 }, {})"', () => {
    const actual = eqObjects({a:{ y: 0, z: 1 }}, {a:{ y: 0, z: 1 }});
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});