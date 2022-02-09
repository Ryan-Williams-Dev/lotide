const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const noSpace = sentence.replace(/ /g, '');
  const results = {};
  for (const letter of noSpace) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

console.log(countLetters("why hello there"));
