/*

  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
*/

function productExceptSelf(nums: number[]): number[] {

  const filteredZero = nums.filter(n => n !== 0);
  const countZeros = nums.length - filteredZero.length;
  if (countZeros > 1 || filteredZero.length === 0) {
    return new Array(nums.length).fill(0);
  }

  const prodNonZero = filteredZero.reduce((acc, v) => acc * v, 1);
  const haveZero = countZeros > 0;


  // FIXME: You must write an algorithm that runs in O(n) time and without using the division operation.
  return nums.map( n => haveZero && n ? 0 : prodNonZero / (n ? n : 1) );
};

console.log(
    productExceptSelf([-1,1,0,-3,3]), // [0,0,9,0,0]
    productExceptSelf([1,2,3,4]),     // [24,12,8,6]
    productExceptSelf([0,0]),         // [0,0]
);
