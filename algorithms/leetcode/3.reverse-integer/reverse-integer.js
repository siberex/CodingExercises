/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * NB: Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // Guaranteed overflow for n >= 2**31 and n < -2**31
  let int32 = new Int32Array(1);

  const isNegative = x < 0;

  // Eliminate sign
  if (isNegative) x *= -1;

  // Note reverse()
  const arr = x.toString().split('').reverse();

  // ['3','2','1'] => 321
  for (const i in arr) {
    const digit = arr[i] | 0; // aka parseInt

    // Make sure n <= 0x7FFFFFFF (= 2**31 - 1)
    // 214748364 === (2**31 / 10 | 0)
    if (int32[0] > 214748364) return 0;
    int32[0] *= 10;

    // 2**31 - 214748364 * 10 === 8
    if (int32[0] == 0x7FFFFFFF && digit > 7) return 0;
    int32[0] += digit;
  }

  // Restore sign
  if (isNegative) int32[0] *= -1;
  return int32[0];
};

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
  // 0x80000000 === 2**31
  if (reverse > 0x80000000) return 0;

  // Restore sign
  if (isNegative) reverse *= -1;
  return reverse;
};

let reverseNaive1 = function(x) {
  // This is WRONG SOLUTION: environment does not allow you to store 64-bit integers
  let reverse = parseInt(x.toString().split('').reverse().join(''));
  // If reversing x causes the value to go outside the signed 32-bit integer range, then return 0
  if (reverse > 0x80000000) return 0; // 0x80000000 === 2**31
  if (x < 0) reverse *= -1;
  return reverse;
};