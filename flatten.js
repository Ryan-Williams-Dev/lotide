const flatten = function(source) {
  let result = [];
  for (let element of source) {
    if (Array.isArray(element)) {
      for (let innerElem of element) {
        result.push(innerElem);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flatten([1,2,3,4,5,[1,2,3,4,5],6,7,8,[9]]));
console.log(flatten(['Hello', 'this', ['an', 'array'], 'of', ['sorts']]));