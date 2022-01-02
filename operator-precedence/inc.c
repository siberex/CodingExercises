#include <stdio.h>

// gcc -O3 -S inc.c -o /tmp/inc.s
// gcc -std=c89 inc.c -o /tmp/inc && /tmp/inc

#pragma GCC diagnostic ignored "-Wunsequenced"
int main() {
    int i = 10;
    printf("%d\n", ++i & i--);

    int inc1 = i + 1;
    printf("%d\n", inc1 & inc1--);
}