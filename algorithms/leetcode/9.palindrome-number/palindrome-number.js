/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x
 * @return {boolean}
 *
 * FIXME: solve without converting the integer to a string
 */
const isPalindrome = x => {
  if (x < 0) return false;
  if (x < 10) return true;
  return x.toString() === x.toString().split('').reverse().join('');
};
