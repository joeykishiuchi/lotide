const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
      return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false); // => false

assertEqual(eqArrays(["1", ["2", ["3", ["4"]]],[]], ["1", ["2", ["3", ["4"]]],[]]), true); // => true
assertEqual(eqArrays(["1", "2", [["3"],"4"]], ["1", "2", "3", "4"]), false); // => false