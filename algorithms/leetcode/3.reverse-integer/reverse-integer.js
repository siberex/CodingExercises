/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * NB: Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // This is WRONG SOLUTION: environment does not allow you to store 64-bit integers
  let reverse = parseInt(x.toString().split('').reverse().join(''));
  // If reversing x causes the value to go outside the signed 32-bit integer range, then return 0
  if (reverse > 0x80000000) return 0; // 0x80000000 === 2^31
  if (x < 0) reverse *= -1;
  return reverse;
};