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

module.exports = middle;