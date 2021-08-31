// https://leetcode.com/problems/find-all-duplicates-in-an-array/
class Solution {
  public List<Integer> findDuplicates(int[] nums) {
    List<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i] > 0 ? nums[i] : -nums[i];
      int flagIndex = n - 1;

      if (nums[flagIndex] < 0) {
        // We have met number = n previously
        result.add(n);
      } else {
        nums[flagIndex] = -nums[flagIndex];
      }
    }
    return result;
  }
}