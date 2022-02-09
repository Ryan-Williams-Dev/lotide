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

const middle = function (arr) {
  let length = arr.length;
  let middleIndex = [];
  if (length < 3) {return middleIndex};
  if (length % 2 === 0) {
    middleIndex.push(arr[Math.floor((length - 1) / 2)]);
    middleIndex.push(arr[Math.floor(length / 2)]);
  } else {
    middleIndex.push(arr[Math.floor(length / 2)]);
  }
  return middleIndex;
};

assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2]), []);