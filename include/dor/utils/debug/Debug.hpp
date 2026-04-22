#pragma once

#include <iostream>
#include <string>

namespace dor::utils::debug
{
    inline constexpr const char* RESET  = "\033[0m";
    inline constexpr const char* RED    = "\033[31m";
    inline constexpr const char* GREEN  = "\033[32m";
    inline constexpr const char* YELLOW = "\033[33m";
    inline constexpr const char* BLUE   = "\033[34m";
    inline constexpr const char* CYAN   = "\033[36m";
    inline constexpr const char* BOLD   = "\033[1m";

    inline void section(const std::string& text)
    {
        std::cout << "\n"
                  << BOLD << CYAN
                  << "==================================================\n"
                  << text << "\n"
                  << "==================================================\n"
                  << RESET;
    }

    inline void info(const std::string& text)
    {
        std::cout << BLUE << "[INFO] " << RESET << text << '\n';
    }

    inline void success(const std::string& text)
    {
        std::cout << GREEN << "[OK]   " << RESET << text << '\n';
    }

    inline void warning(const std::string& text)
    {
        std::cout << YELLOW << "[WARN] " << RESET << text << '\n';
    }

    inline void error(const std::string& text)
    {
        std::cout << RED << "[ERR]  " << RESET << text << '\n';
    }
}