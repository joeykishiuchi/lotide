const without = function(source, itemsToRemove) {
  let outcomeArr = [];
  for (let src of source) {
    if (!itemsToRemove.includes(src)) {
      outcomeArr.push(src);
    }
  }
  return outcomeArr;
};

module.exports = without;
// tests
// let numbers = [1, 2, 4, 6, 1, 7, 8, 2];
// assertArraysEqual(without(numbers, [1, 4, '2']),[2, 6, 7, 8, 2]);
// assertArraysEqual(numbers, [1, 2, 4, 6, 1, 7, 8, 2]); // original array is not altered by without()

// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// assertArraysEqual(without(letters,['c', 5, 'e']),['a', 'b', 'd', 'f']);
// assertArraysEqual(letters, ['a', 'b', 'c', 'd', 'e', 'f']); // original array is not altered by without()