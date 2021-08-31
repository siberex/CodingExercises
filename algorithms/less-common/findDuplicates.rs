
pub fn find_duplicates(mut nums: Vec<i32>) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();

    for i in 0..nums.len() {
        let n: i32 = if nums[i] > 0 { nums[i] } else { -nums[i] };
        let flag_index: usize = (n-1) as usize;

        if nums[flag_index].is_negative() {
            // We have met number = n previously
            result.push(n);
        } else {
            nums[flag_index] = -nums[flag_index];
        }
    }

    return result;
}
