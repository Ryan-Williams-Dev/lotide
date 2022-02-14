const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#Tail', () => {
  it("should return ['Lighthouse', 'Labs'] when given ['Hello', 'Lighthouse', 'Labs']", () => {
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const exppected = ['Lighthouse', 'Labs'];
    assert.deepEqual(actual, exppected);
  });
  it('should return [2,3,4,5] when passed [1,2,3,4,5]', () => {
    const actual = tail([1,2,3,4,5]);
    const exppected = [2,3,4,5];
    assert.deepEqual(actual, exppected);
  });
});
