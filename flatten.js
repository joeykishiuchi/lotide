const flatten = function(nestedArray) {
  let flatArray = [];
  for (let array of nestedArray) {
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

module.exports = flatten;