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

}

