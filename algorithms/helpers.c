#include <stdlib.h>
#include <stdio.h>

void helpers() {
  int desired_size = 0;
  int *dynamic_arr = malloc(desired_size * sizeof(int));

  // resize arr and realloc
  desired_size = 2;
  dynamic_arr = realloc(dynamic_arr, desired_size * sizeof(int));
  dynamic_arr[0] = 123;
  dynamic_arr[1] = 456;

  // print arr contents
  for (int i = 0; i < desired_size; ++i) {
    printf("%d\t", dynamic_arr[i]);
  }
  free(dynamic_arr);


  // get arr size
  int arr[] = {11, 22, 33};
  size_t arr_size = sizeof arr  / sizeof *arr;

  for (int i = 0; i < arr_size; ++i) {
    printf("%d\t", arr[i]);
  }

}

// pass arr pointer with arr size
void zero_fill(int* input, int n) {
  for (int i = 0; i < n; i++) {
    input[i] = 0;
  }
}

// pass arr pointer const with arr size
int first_even(const int* arr, int n) {
  for (int i = 0; i < n; i++) {
    if(arr[i] % 2 == 0) {
      return arr[i];
    }
  }
  return -1;
}

// transform array to unknown size arr, return pointer to it and return its new size via another ptr
int* list_even(int* data, int data_size, int* return_size) {
  int res_size = 0;
  int *res = malloc(res_size * sizeof(int));

  for (int i = 0; i < data_size; i++) {
    if (data[i] % 2 == 0) {
      res_size++;
      res = realloc(res, res_size * sizeof(int));
      res[res_size - 1] = data[i];
    }
  }

  *return_size = res_size;
  return res;
}

// gcc -std=c99 -Wall -o helpers helpers.c && ./helpers
int main() {
  //helpers();

  int dataSize = 6;
  int resSize;
  int data[] = {-1,-2,-11,3,4,5};
  int* even = list_even(data, dataSize, &resSize);

  printf("\ntotal even: %d\n",resSize);
  for (int i = 0; i < resSize; ++i) {
    printf("%d\t", even[i]);
  }

  int arr_to_fill[100];
  zero_fill(arr_to_fill, 100);

  int feven = first_even(data, dataSize);
  printf("first even: %d", feven);

  return 0;
}