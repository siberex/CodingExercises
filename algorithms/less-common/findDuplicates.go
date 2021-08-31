package main

// https://leetcode.com/problems/find-all-duplicates-in-an-array/
func findDuplicates(nums []int) []int {
	var result []int
	for i := 0; i < len(nums); i++ {
		n := nums[i]
		if n < 0 {
			n = -n
		}
		flagIndex := n - 1

		if nums[flagIndex] < 0 {
			// We have met number = n previously
			result = append(result, n)
		} else {
			nums[flagIndex] = -nums[flagIndex]
		}
	}
	return result
}
