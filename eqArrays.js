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

module.exports = eqArrays;