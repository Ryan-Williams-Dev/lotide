const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 5 for [5,6,7]', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 7 for [7,1,3,4,5,8,7,5]", () => {
    assert.strictEqual(head([7,1,3,4,5,8,7,5]), 7);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  })
});
