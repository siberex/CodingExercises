/**
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 *
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n]
 * and each integer appears once or twice, return an array of all the integers that appears twice.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  // Naive approach (slow):
  // return nums.filter((v, i) => nums.indexOf(v, i + 1) !== -1);

  let numSet = new Set();
  let result = [];

  nums.forEach(v => {
    if ( numSet.has(v) ) {
      result.push(v);
    } else {
      numSet.add(v);
    }
  })

  return result;
};
