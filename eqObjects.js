const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (object1[key] && object2[key]) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2", c: "3"};
const ba = { b: "2", a: "1", c: "3" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "4" };
assertEqual(eqObjects(ab, abc), false); // => false