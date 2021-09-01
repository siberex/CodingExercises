#include <stdlib.h>
#include <stdio.h>
#include "findDuplicates.input.h"

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDuplicates(int* nums, int numsSize, int* returnSize) {
  int resultSize = 0;
  int *result = malloc(0);

  for (int i = 0; i < numsSize; ++i) {
    int n = nums[i] > 0 ? nums[i] : -nums[i];

    if (nums[n - 1] < 0) {
      // We have met number = n previously
      ++resultSize;
      result = realloc(result, resultSize * sizeof(int));
      result[resultSize - 1] = n;
    } else {
      nums[n - 1] = -nums[n - 1];
    }
  }
  *returnSize = resultSize;
  return result;
}


// gcc -std=c11 -Wall -o /tmp/findDuplicates findDuplicates.c && time /tmp/findDuplicates
// clang -std=c11 -Wall -o /tmp/findDuplicates findDuplicates.c && /tmp/findDuplicates
int main() {
  int resSize = 0;
//  int data[] = {5,4,6,7,9,3,10,9,5,6};
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