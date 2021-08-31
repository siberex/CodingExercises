<?php

// https://leetcode.com/problems/find-all-duplicates-in-an-array/
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDuplicates($nums) {
        $result = [];
        for ($i = 0; $i < count($nums); $i++) {
            $n = $nums[$i] > 0 ? $nums[$i] : -$nums[$i];
            $flagIndex = $n - 1;

            if ($nums[$flagIndex] < 0) {
                // We have met number = n previously
                $result[] = $n;
            } else {
                $nums[$flagIndex] = -$nums[$flagIndex];
            }
        }
        return $result;
    }
}