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
    assert.equal(regex().test('foobar'), true);
    assert.equal(regex().test('foo-bar'), true);
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('-foo'), false);
    assert.equal(regex().test('foo-'), false);
    assert.equal(regex().test('foo--bar'), false);
    assert.equal(regex().test('foo-bar-'), false);
    assert.equal(regex().test('3tobi--ferret'), false);
    assert.equal(regex().test('~~derp@darp-----++asdfasdf'), false);
  });
});
