/**
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 *
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n]
 * and each integer appears once or twice, return an array of all the integers that appears twice.
 *
 * @param {number[]} nums All the integers of nums are in the range [1, n]
 * @return {number[]}
 */
let findDuplicates = function(nums) {
  let result = [];

  if (nums.length < 2) {
    return result;
  }

  // To meet memory constraint, we will use input array as a temporary storage
  // As long as all nums are positive integers and each value is <= array size,
  // we could use current number as an index to flag for duplicates.
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i] > 0 ? nums[i] : -nums[i];

    if (nums[n - 1] < 0) {
      // We have met previously number = n
      result.push(n);
    } else {
      nums[n - 1] = -nums[n - 1];
    }
  }
  return result;
}

// console.log(findDuplicates([5,4,6,7,9,3,10,9,5,6]));   // [9,5,6]
// console.log(findDuplicates([4,3,2,7,8,2,3,1]));        // [2,3]
// console.log(findDuplicates([1,1]));                    // [1]
// console.log(findDuplicates([1,2,1]));                  // [1]
// console.log(findDuplicates([2,2,1]));                  // [2]


// Less naive approach, fast - O(n).
// But constant memory constraint is not met!
let findDuplicatesLessNaive = function(nums) {
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

// Naive approach (slow)
let findDuplicatesNaive = function(nums) {
  return nums.filter((v, i) => nums.indexOf(v, i + 1) !== -1);
}

