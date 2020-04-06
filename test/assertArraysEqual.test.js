const assertArraysEqual = require('../assertArraysEqual');

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3];
assertArraysEqual(firstArray, secondArray);

firstArray = [];
secondArray = [];
assertArraysEqual(firstArray, secondArray);

firstArray = [1,[2, 3]];
secondArray = [1,[2, 3]];
assertArraysEqual(firstArray, secondArray);

firstArray = [1,[2, 3]];
secondArray = [1,[2, 4]];
assertArraysEqual(firstArray, secondArray);