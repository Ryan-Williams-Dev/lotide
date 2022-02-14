const middle = require('../middle');
const assert = require('chai').assert;



describe('#middle', () => {
  it ('should return [5,6] when passed [1,2,3,4,5,6,7,8,9,10]', () => {
    const actual = middle([1,2,3,4,5,6,7,8,9,10]);
    const expected = [5,6];
    assert.deepEqual(actual, expected);
  });
  it ('should return [4] when passed [1,2,3,4,5,6,7]', () => {
    const actual = middle([1,2,3,4,5,6,7]);
    const expected = [4];
    assert.deepEqual(actual, expected);
  });
  it ('should return [] when passed [1,2]', () => {
    const actual = middle([1,2]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it ('should return [2] when passed [1,2,3]', () => {
    const actual = middle([1,2,3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });
});