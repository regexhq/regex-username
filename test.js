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
    assert.equal(regex().test('FooBar'), true);
    assert.equal(regex().test('FOOBAR'), true);
    assert.equal(regex().test('foo-bar-baz'), true);
    assert.equal(regex().test('f'), true);
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('-foo'), false);
    assert.equal(regex().test('foo-'), false);
    assert.equal(regex().test('-'), false);
    assert.equal(regex().test('foo--bar'), false);
    assert.equal(regex().test('foo-bar-'), false);
    assert.equal(regex().test('3tobi--ferret'), false);
    assert.equal(regex().test('~~derp@darp-----++asdfasdf'), false);
    assert.equal(regex().test('foo_bar'), false);
    assert.equal(regex().test('_foobar'), false);
    assert.equal(regex().test('foobar_'), false);
  });
});
