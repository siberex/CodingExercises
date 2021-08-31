#include <stdlib.h>
#include <stdio.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDuplicates(int* nums, int numsSize, int* returnSize) {
  int resultSize = 0;
  int *result = malloc(numsSize * sizeof(int));

  int n;
  for (int i = 0; i < numsSize; ++i) {
    n = nums[i] > 0 ? nums[i] : -nums[i];

    if (nums[n - 1] < 0) {
      // We have met number = n previously
      ++resultSize;
      result[resultSize - 1] = n;
    } else {
      nums[n - 1] = -nums[n - 1];
    }
  }
  *returnSize = resultSize;
  result = realloc(result, resultSize * sizeof(int));
  return result;
}


// gcc -ansi -o findDuplicates findDuplicates.c && ./findDuplicates
// gcc -std=c99 -Wall -o findDuplicates findDuplicates.c && ./findDuplicates
int main() {
  int resSize = 0;
  int data[] = {5,4,6,7,9,3,10,9,5,6};
  size_t dataSize = sizeof data / sizeof *data;

  int* dups = findDuplicates(data, dataSize, &resSize);

  printf("\nresults count: %d\n",resSize);
  for (int i = 0; i < resSize; ++i) {
    printf("%d ", dups[i]);
  }

  return 0;
}