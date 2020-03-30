const tail = function(array) {
    let tailArr = array.slice(1,array.length);
    return tailArr;
}
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  console.log(tail([1,2,3]));
  