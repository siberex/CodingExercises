object Solution {
  def findDuplicates(nums: Array[Int]): List[Int] = {
    var result = Array[Int]()

    for (i <- 0 until nums.length) {
      val n = if (nums(i) > 0) nums(i) else -nums(i)
      val flagIndex = n - 1

      if (nums(flagIndex) < 0)
        // We have met number = n previously
        result +:= n
      else nums(flagIndex) = -nums(flagIndex)
    }
    return result.toList
  }
}
