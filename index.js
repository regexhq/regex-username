/**
 * Expose username regex, following github conventions
 * like:
 * _Username may only contain alphanumeric characters
 * and only single hyphens, and cannot begin or end with a hyphen._
 *
 *
 * Example input:
 *   foo
 *   foo-bar
 */
module.exports = function regexUsername () {
  return /^([a-z\d]+-)*[a-z\d]+$/i;
};
