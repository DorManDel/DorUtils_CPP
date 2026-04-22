// Compile in WSL : g++ -std=c++17 examples/containers/stack_demo.cpp -Iinclude -o stack_demo && ./stack_demo
// Path : cd /mnt/d/Programming/Scripts/Dor/DorUtils_CPP

#include <string>
#include "dor/utils/containers/Stack.hpp"
#include "dor/utils/debug/Debug.hpp"

int main()
{
    using dor::utils::Stack;
    using namespace dor::utils::debug;

    section("Stack Demo");

    Stack<int> s;

    info("Created empty stack");

    s.push(10);
    success("push(10)");

    s.push(20);
    success("push(20)");

    s.push(30);
    success("push(30)");

    info("Top = " + std::to_string(s.top()));
    info("Size = " + std::to_string(s.size()));
    info("Capacity = " + std::to_string(s.capacity()));

    s.pop();
    warning("pop() executed");

    info("Top = " + std::to_string(s.top()));
    info("Size = " + std::to_string(s.size()));

    s.clear();
    warning("clear() executed");

    info("Empty = true");

    section("End");
}