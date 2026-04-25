
#pragma once

/*
    ================================================================================
    🧱 Common.hpp 🧱
    --------------------------------------------------------------------------------
    Shared foundation utilities for DorUtils_CPP.

    Purpose:
        This file contains small common tools that many DorUtils modules can use.

    Important:
        Common.hpp should stay lightweight.
        Do not include HEAVY FILES AND LIBS HERE!
    ================================================================================
*/

// Standard Library Includes
// ================================================================================
#include <cstddef>      // std::size_t
#include <cstdint>      // fixed-size integers
#include <string>       // std::string
#include <iostream>     // std::cout, std::cerr


// DorUtils Namespace
// ================================================================================
namespace dor::utils
{
    // Common Type Aliases
    // ============================================================================

    using Size  = std::size_t;

    using i8    = std::int8_t;
    using i16   = std::int16_t;
    using i32   = std::int32_t;
    using i64   = std::int64_t;

    using u8    = std::uint8_t;
    using u16   = std::uint16_t;
    using u32   = std::uint32_t;
    using u64   = std::uint64_t;


    // Common Constants
    // ============================================================================

    inline constexpr Size INVALID_INDEX = static_cast<Size>(-1);

    // Small Helper Functions
    // ============================================================================

    inline void PrintLine()
    {
        std::cout << "--------------------------------------------------\n";
    }

    inline void PrintTitle(const std::string& title)
    {
        PrintLine();
        std::cout << title << '\n';
        PrintLine();
    }
}

/*
common.hpp        = includes common tools only
dorutils.hpp      = includes the entire library
stack.hpp         = includes only what Stack needs


Example dorutils.hpp:
#pragma once

#include "common/common.hpp"

#include "ds/stack.hpp"
#include "ds/queue.hpp"
#include "ds/linked_list.hpp"

#include "algorithms/bfs.hpp"
#include "algorithms/dfs.hpp"
#include "algorithms/dijkstra.hpp"

so later i can do: #include "dorutils/dorutils.hpp"
or: #include "dorutils/ds/stack.hpp"

compile : g++ -std=c++17 -Wall -Wextra -pedantic -Iinclude examples/stack_demo.cpp -o stack_demo
*/