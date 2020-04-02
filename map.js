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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + '!');
assertArraysEqual(results2, ["ground!", "control!", "to!", "major!", "tom!"]);

const results3 = map(words, word => {
  if (word === 'tom') {
    return 'jim';
  }
  return word;
});
assertArraysEqual(results3, ["ground", "control", "to", "major", "jim"]);

