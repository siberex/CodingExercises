class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []

        for n in nums:
            if n < 0:
                n = -n
            flagIndex = n - 1

            if (nums[flagIndex] < 0):
                # We have met number = n previously
                result.append(n)
            else:
                nums[flagIndex] = -nums[flagIndex]

        return result
