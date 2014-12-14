/**
 * Module dependencies
 */
var assert = require('assert');
var regex = require('./');

/**
 * Test
 */
describe('username regex', function() {
  it('should match username input', function() {
    assert.equal(regex().test('tobi3'), true);
    assert.equal(regex().test('tobi-ferret'), true);
    assert.equal(regex().test('3tobi--ferret'), true);
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('-hello'), false);
    assert.equal(regex().test('~~derp@darp-----++asdfasdf'), false);
  });
});
