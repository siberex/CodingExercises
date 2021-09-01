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
    int n = nums[i];
    if (n < 0) n *= -1;
    int flagIndex = n - 1;

    if (nums[flagIndex] < 0) {
      // We have met number = n previously
      *returnSize = *returnSize + 1;
      result[*returnSize - 1] = n;
    } else {
      nums[flagIndex] = -nums[flagIndex];
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