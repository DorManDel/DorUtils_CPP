#pragma once

/*
    ================================================================================
    🧰 DorUtils.hpp 🧰
    --------------------------------------------------------------------------------
    Main public include file for the DorUtils C++ library.

    Purpose:
        This file gathers the main public modules of DorUtils into one place.

    Usage:
        #include "dor/utils/DorUtils.hpp"

    Compile example:
        g++ -std=c++17 -Wall -Wextra -pedantic -Iinclude examples/stack_demo.cpp -o stack_demo

    Notes:
        - Use this file when you want the full DorUtils library.
        - For smaller builds, include only the specific module you need.
          Example:
              #include "dor/utils/containers/Stack.hpp"
    ================================================================================
*/


// Core utilities
// ================================================================================
#include "dor/utils/core/Common.hpp"

// Debug utilities
// ================================================================================
#include "dor/utils/debug/Debug.hpp"

// Containers
// ================================================================================
#include "dor/utils/containers/Stack.hpp"