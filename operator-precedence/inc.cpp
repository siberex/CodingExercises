#include <iostream>

#pragma GCC diagnostic ignored "-Wunsequenced"
int main() {
    int i = 100;
    std::cout << (++i & i--) << std::endl;

    int inc1 = i + 1;
    std::cout << (inc1 & inc1--) << std::endl;

    /*
    101
    101
    */
}
