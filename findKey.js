const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
}

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const data2 = {
  woo: 1,
  foo: 2,
  boo: 3
};

assertEqual(findKey(data, x => x.stars === 2), 'noma');

assertEqual(findKey(data, x => x.stars === 3), 'Akaleri');

assertEqual(findKey(data2, x => x === 2), 'foo');