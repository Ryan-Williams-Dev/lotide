// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !==  arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ - Assertion passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`❌ - Assertion failed: ${arr1} !== ${arr2}`);
//   }
// }

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual([6,7,8,9,10], map([1,2,3,4,5], x => x + 5));

module.exports = map;