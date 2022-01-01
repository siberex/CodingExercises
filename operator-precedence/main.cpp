#include <iostream>

// clang++ -std=c++17 -Wall -o /tmp/main main.cpp && /tmp/main
// g++ --std=c++17 -o /tmp/main main.cpp && /tmp/main
int main() {
    int $year = 2021;
    std::cout << (++ $year & $year --) + (++ $year ^ $year --);
    return 0;
}
