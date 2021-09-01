/**
 *
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 * https://leetcode.com/problems/length-of-last-word/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.match(/(\w+)\s*$/)[1].length;
};

var lengthOfLastWordNoRe = function(s) {
  return s.split(' ').filter(Boolean).pop().length;
};
