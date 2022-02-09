const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !==  arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ - Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ - Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/ /g, '');
  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];
    if (results[key]) {
      results[key].push(i);
    } else {
      results[key] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("Mary Poppins").o, [5]);
assertArraysEqual(letterPositions("Mary Poppins").p, [6,7]);
