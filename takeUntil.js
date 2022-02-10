const takeUntil = (array, callback) => {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1,2,3,4,5,'hello',1,2,3,4,5];
const results3 = takeUntil(data3, x => !Number.isInteger(x));
console.log(results3);