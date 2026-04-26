// --------------------------------------- >
// run in Terminal : make run-stack
/*
make tests
make run file=common_test
*/
// --------------------------------------- >

#include "dor/utils/DorUtils.hpp"

int main()
{
    dor::utils::PrintTitle("Common Demo");

    dor::utils::Size n = 42;

    std::cout << "Value: " << n << '\n';

    return 0;
}