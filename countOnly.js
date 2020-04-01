const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countOnly = function(allItems, itemsToCount) {
  let totalCount = {};
  for (let item in itemsToCount) {
    let count = 0;
    for (let all of allItems) {
      if (all === item && itemsToCount[item]) {
        count++;
      }
    }
    if (count > 0) {
      totalCount[item] = count;
    }
  }
  return totalCount;
};

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);