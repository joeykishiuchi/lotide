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

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

// Assertion Tests -------------------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);