const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hey", "Hey");
assertEqual(2 + 6, 4 + 4);
assertEqual(false, true);
assertEqual(3, 8);