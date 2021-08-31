package main

// https://leetcode.com/problems/find-all-duplicates-in-an-array/
func findDuplicates(nums []int) []int {
	var result []int
	for i := 0; i < len(nums); i++ {
		n := nums[i]
		if n < 0 {
			n = -n
		}

		if nums[n-1] < 0 {
			// We have met number = n previously
			result = append(result, n)
		} else {
			nums[n-1] = -nums[n-1]
		}
	}
	return result
}
