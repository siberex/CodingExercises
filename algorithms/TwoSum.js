function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let pairIndex = nums.indexOf(target - nums[i], i + 1);
    if (pairIndex !== -1)
      return [i, pairIndex];
  }
  return null;
};

console.log(
  twoSum([2,7,11,15], 9), // [0,1]
  twoSum([3,2,4], 6),     // [1,2]
  twoSum([3,3], 6),       // [0,1]
  twoSum([3,3], 9),       // null
)