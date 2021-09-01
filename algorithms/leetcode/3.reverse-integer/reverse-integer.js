/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * NB: Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let res = 0;

  const isNegative = x < 0;

  // Eliminate sign
  if (isNegative) x *= -1;

  // Note reverse()
  const arr = x.toString().split('').reverse();

  // ['3','2','1'] => 321
  for (let digit of arr) {
    digit |= 0; // aka parseInt

    // Make sure n <= 0x7FFFFFFF (= 2**31 - 1)
    // 214748364 === (2**31 / 10 | 0)
    if (res > 214748364) return 0;
    res *= 10;

    // 2**31 - 214748364 * 10 === 8
    if (res == 0x7FFFFFFF && digit > 7) return 0;
    res += digit;
  }

  // Restore sign
  if (isNegative) res *= -1;
  return res;
};

const reverseNaive2 = function(x) {
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
  // 0x80000000 === 2**31
  if (reverse > 0x80000000) return 0;

  // Restore sign
  if (isNegative) reverse *= -1;
  return reverse;
};

const reverseNaive1 = function(x) {
  // This is WRONG SOLUTION: environment does not allow you to store 64-bit integers
  let reverse = parseInt(x.toString().split('').reverse().join(''));
  // If reversing x causes the value to go outside the signed 32-bit integer range, then return 0
  if (reverse > 0x80000000) return 0; // 0x80000000 === 2**31
  if (x < 0) reverse *= -1;
  return reverse;
};