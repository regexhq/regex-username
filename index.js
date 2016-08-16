/**
 * Expose username regex, following github conventions
 * like:
 * _Username may only contain alphanumeric characters
 * and only single hyphen, and cannot begin or end with hyphen._
 *
 *
 * Example input:
 *   foo
 *   foo-bar
 */
module.exports = function regexUsername () {
  return /^\w+-?\w+(?!-)$/;
};
