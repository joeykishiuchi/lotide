const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) { // Are the objects the same length
    for (let key of object1Keys) { //iterate through object1's keys
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') { //are both values at the key an array       
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
          return false;
        } else {
          if (!eqObjects(object1[key], object2[key])) {
            return false;
          }
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;