// clang++ -std=c++17 -Wall -o /tmp/main main.cpp && /tmp/main
// g++ --std=c++17 -Wall -o /tmp/main main.cpp && /tmp/main

#include <iostream>

#pragma GCC diagnostic ignored "-Wunsequenced"
int main() {
    int $year = 2021;
    std::cout << (++ $year & $year --) + (++ $year ^ $year --) << std::endl;
}
