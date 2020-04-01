const eqArrays = function(arr1, arr2) {
  return (JSON.stringify(arr1) === JSON.stringify(arr2));
};
    
const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const middle = function(array) {
  let midIndex = array.length / 2;
  if (array.length % 2 === 0 && array.length > 2) {
    return array.slice(midIndex - 1,midIndex + 1);
  } else if (array.length % 2 !== 0 && array.length > 2) {
    return array.slice(Math.floor(midIndex), Math.ceil(midIndex));
  } else {
    return [];
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);