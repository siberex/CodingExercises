// clang -std=c11 -Wall -o /tmp/main main.c && /tmp/main
// gcc -std=c11 -Wall -o /tmp/main main.c && /tmp/main

// Compiler actions step by step:
// gcc -E main.c
// gcc -S main.c -o /tmp/main.s && cat /tmp/main.s
// gcc -c main.c -o /tmp/main.o

#include <stdio.h>

#pragma GCC diagnostic ignored "-Wunsequenced"
int main() {
    int $year = 2021;
    int $newyear = (++ $year & $year --) + (++ $year ^ $year --);
    printf("%d\n", $newyear);
    return 0;
}
