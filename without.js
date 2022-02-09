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
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ - Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ - Assertion failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let sourceElem of source) {
    let present = false;
    for (let removeElem of itemsToRemove) {
      if(sourceElem === removeElem) {
        present = true;
      }
    }
    if (present === false)
    newArr.push(sourceElem);
  }
  return newArr;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
console.log(without([1,2,3,4,5,6,7,8], [2,7]));
console.log(without(['Hello', 'Lighthouse', 'Labs'], ['Lighthouse']));