const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let matches = true;
  if (arr1.length !== arr2.length) {
    matches = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (Array.isArray(arr2[i])) {
        matches = eqArrays(arr1[i], arr2[i]);
      }
      if (!Array.isArray(arr2[i])) {
        matches = false;
      }
    } else if (arr1[i] !==  arr2[i]) {
      matches = false;
    }
  }
  return matches;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

// RECURSION TESTS FOR NESTED ARRAYS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

assertEqual(eqArrays([[[[1,2],2,3,3],4],8], [[[[1,2],2,3,3],4],8]), true);