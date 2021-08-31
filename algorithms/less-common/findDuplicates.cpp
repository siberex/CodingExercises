// https://leetcode.com/problems/find-all-duplicates-in-an-array/
class Solution {
public:
  vector<int> findDuplicates(vector<int> &nums) {
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
      int n = nums[i] > 0 ? nums[i] : -nums[i];

      if (nums[n - 1] < 0) {
        // We have met number = n previously
        result.push_back(n);
      } else {
        nums[n - 1] = -nums[n - 1];
      }
    }
    return result;
  }
};