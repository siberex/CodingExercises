package algorithms

// return indices
func TwoSum(nums []int, target int) []int {
	numsMap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		numsMap[nums[i]] = i
	}

	for i := 0; i < len(nums); i++ {
		pair := target - nums[i]
		pairIndex, pairExists := numsMap[pair]
		if pairExists && pairIndex != i {
			return []int{i, pairIndex}
		}
	}
	return nil
}

// return values
func TwoSumValues(nums []int, target int) []int {
	res := TwoSum(nums, target)
	if res != nil {
		return []int{nums[res[0]], nums[res[1]]}
	}
	return nil
}
