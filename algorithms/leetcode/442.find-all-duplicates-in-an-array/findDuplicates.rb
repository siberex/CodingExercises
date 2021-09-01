# https://leetcode.com/problems/find-all-duplicates-in-an-array/
# @param {Integer[]} nums
# @return {Integer[]}
def find_duplicates(nums)
  result = []
  nums.each do |n|
    n *= -1 if n < 0
    flagIndex = n - 1
    if nums[flagIndex] < 0
      # We have met number = n previously
      result.append(n)
    else
      nums[flagIndex] = -nums[flagIndex]
    end
  end
  return result
end