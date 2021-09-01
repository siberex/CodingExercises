// https://leetcode.com/problems/find-all-duplicates-in-an-array/
class Solution {
public:
  vector<int> findDuplicates(vector<int> &nums) {
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
      int n = nums[i];
      if (n < 0) n *= -1;
      int flagIndex = n - 1;

      if (nums[flagIndex] < 0) {
        // We have met number = n previously
        result.push_back(n);
      } else {
        nums[flagIndex] = -nums[flagIndex];
      }
    }
    return result;
  }
};