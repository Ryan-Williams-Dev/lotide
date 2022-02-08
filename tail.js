const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let result = arr.slice(1);
  return result;
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

console.log(tail(['Hello']));
console.log(tail([]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);