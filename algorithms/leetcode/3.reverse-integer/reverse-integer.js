/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * NB: Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * @param {number} x
 * @return {number}
 */
var reverseNaive2 = function(x) {
  const isNegative = x < 0;

  // Eliminate sign
  if (isNegative) x *= -1;

  let reverse = 0;
  x.toString().split('')
    .forEach(
      // ['1','2','3'] => 321
      (curr, i) => reverse += 10 ** i * (curr|0)
    );

  // If reversing x causes the value to go outside the signed 32-bit integer range, then return 0
  // 0x80000000 === 2^31
  if (reverse > 0x80000000) return 0;

  // Restore sign
  if (isNegative) reverse *= -1;
  return reverse;
};

let reverseNaive1 = function(x) {
  // This is WRONG SOLUTION: environment does not allow you to store 64-bit integers
  let reverse = parseInt(x.toString().split('').reverse().join(''));
  // If reversing x causes the value to go outside the signed 32-bit integer range, then return 0
  if (reverse > 0x80000000) return 0; // 0x80000000 === 2^31
  if (x < 0) reverse *= -1;
  return reverse;
};