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

const flatten = function(arrayNest) {
  let flatArray = [];
  for (let array of arrayNest) {
    if (Array.isArray(array)) {
      for (let arr of array) {
        flatArray.push(arr);
      }
    } else {
      flatArray.push(array);
    }
  }
  return flatArray;
};

let testArr = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(testArr), [1, 2, 3, 4, 5, 6]);