/**
 * Expose username regex.
 *
 * Example input:
 *   tobi
 *   tobi-ferret
 *   tobino---ferret--
 */
module.exports = function() {
  return /^\w[\w-]+$/;
};
