#include <stdlib.h>
#include <stdio.h>
#include "findDuplicates.input.h"

/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions/
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDuplicates(int* nums, int numsSize, int* returnSize) {
  *returnSize = 0;
  // Worst-case: every other number is duplicate,
  // therefore numsSize / 2 is sufficient
  int *result = malloc(numsSize / 2 * sizeof(int));

  for (int i = 0; i < numsSize; ++i) {
    int n = nums[i] > 0 ? nums[i] : -nums[i];

    if (nums[n - 1] < 0) {
      // We have met number = n previously
      *returnSize = *returnSize + 1;
      result[*returnSize - 1] = n;
    } else {
      nums[n - 1] = -nums[n - 1];
    }
  }
  result = realloc(result, *returnSize * sizeof(int));
  return result;
}


// gcc -std=c11 -Wall -o /tmp/findDuplicates findDuplicates.c && time /tmp/findDuplicates
// clang -std=c11 -Wall -o /tmp/findDuplicates findDuplicates.c && /tmp/findDuplicates
int main() {
  int resSize = 0;
  size_t dataSize = sizeof INPUT_DATA / sizeof *INPUT_DATA;

  int* dups = findDuplicates(&INPUT_DATA[0], dataSize, &resSize);

  printf("Duplicates Count: %d\n",resSize);
  for (int i = 0; i < resSize; ++i) {
    printf("%d ", dups[i]);
  }
  free(dups);

  printf("\n");
  return 0;
}