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

module.exports = middle;