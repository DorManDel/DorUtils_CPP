# ==============================================================================
# 🧰 DorUtils_CPP — Ultimate Educational Makefile 🧰
# ------------------------------------------------------------------------------
# This Makefile is both:
#   1. A build tool for DorUtils_CPP
#   2. A study guide for learning how Makefiles work

#
##	versions wise:
##		v0.1.0  first skeleton
##		v0.2.0  stack stable
##		v0.3.0  queue + linked list
##		v1.0.0  first serious public release
# 

#
# 	-- in PWSH - run command : mingw32-make <CMD NAME> -- 
#	// for make to work : go to installed path of mingw32-make.exe -> copy -> paste -> rename to "make.exe"
#	// OPTION B - add powershell alias : Set-Alias make mingw32-make
# Basic commands:
#
#   make help         -> show available commands
#   make              -> build examples and tests
#   make examples     -> build all demo files
#   make tests        -> build all test files
#   make run-common   -> run common_demo
#   make run-tests    -> run all tests
#   make clean        -> delete build folder
# 	make version	  -> show current version
# ==============================================================================


# ==============================================================================
# SECTION 1 — Compiler Settings
# ==============================================================================

# compiler name :
CXX := g++

# compiler flags :
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude

DEBUG_FLAGS   := -g -O0
RELEASE_FLAGS := -O2

# FLAGS :
#	-std=c++17      use C++17
#	-Wall           show common warnings
#	-Wextra         show extra warnings
#	-pedantic       be strict
#	-Iinclude       allow #include "dor/utils/DorUtils.hpp"

# ==============================================================================
# SECTION 1.5 — DorUtils Version Tracking
# ==============================================================================

PROJECT_NAME := DorUtils_CPP
VERSION      := 0.1.0
CODENAME     := Interactive Lab
AUTHOR       := Dor Mandel

# ==============================================================================
# SECTION 2 — Project Folders
# ==============================================================================

#All compiled files go into :
BUILD_DIR   := build
EXAMPLE_DIR := examples
TEST_DIR    := tests


# ==============================================================================
# SECTION 3 — Auto File Detection
# ==============================================================================

EXAMPLE_SRCS := $(wildcard $(EXAMPLE_DIR)/*.cpp)
TEST_SRCS    := $(wildcard $(TEST_DIR)/*.cpp)

EXAMPLE_BINS := $(patsubst $(EXAMPLE_DIR)/%.cpp,$(BUILD_DIR)/examples/%,$(EXAMPLE_SRCS))
TEST_BINS    := $(patsubst $(TEST_DIR)/%.cpp,$(BUILD_DIR)/tests/%,$(TEST_SRCS))


# ==============================================================================
# SECTION 4 — Main Build Targets
# ==============================================================================

all: examples tests

examples: $(EXAMPLE_BINS)

tests: $(TEST_BINS)

debug: CXXFLAGS += $(DEBUG_FLAGS)
debug: all

release: CXXFLAGS += $(RELEASE_FLAGS)
release: all


# ==============================================================================
# SECTION 5 — Build Rules
# ==============================================================================

$(BUILD_DIR)/examples/%: $(EXAMPLE_DIR)/%.cpp | $(BUILD_DIR)/examples
	$(CXX) $(CXXFLAGS) $< -o $@

$(BUILD_DIR)/tests/%: $(TEST_DIR)/%.cpp | $(BUILD_DIR)/tests
	$(CXX) $(CXXFLAGS) $< -o $@


# ==============================================================================
# SECTION 6 — Folder Creation
# ==============================================================================

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(BUILD_DIR)/examples: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/examples

$(BUILD_DIR)/tests: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/tests


# ==============================================================================
# SECTION 7 — Run Helpers
# ==============================================================================

run-common: $(BUILD_DIR)/examples/common_demo
	./$(BUILD_DIR)/examples/common_demo

run-stack: $(BUILD_DIR)/examples/stack_demo
	./$(BUILD_DIR)/examples/stack_demo

run-tests: tests
	@for test in $(TEST_BINS); do \
		echo "Running $$test"; \
		./$$test; \
	done


# ==============================================================================
# SECTION 8 — Info / Study Commands
# ==============================================================================

list:
	@echo "Examples found:"
	@echo "$(EXAMPLE_SRCS)"
	@echo ""
	@echo "Tests found:"
	@echo "$(TEST_SRCS)"

help:
	@echo "============================================================"
	@echo " DorUtils_CPP Makefile Help"
	@echo "============================================================"
	@echo " make              Build examples and tests"
	@echo " make examples     Build all files inside examples/"
	@echo " make tests        Build all files inside tests/"
	@echo " make debug        Build with debug flags"
	@echo " make release      Build with optimization"
	@echo " make run-common   Run examples/common_demo.cpp"
	@echo " make run-stack    Run examples/stack_demo.cpp"
	@echo " make run-tests    Run all compiled tests"
	@echo " make list         Show detected source files"
	@echo " make clean        Remove build folder"
	@echo " make version      Show DorUtils version info"
	@echo "============================================================"
version:
	@echo "============================================================"
	@echo " $(PROJECT_NAME)"
	@echo " Version : v$(VERSION)"
	@echo " Codename: $(CODENAME)"
	@echo " Author  : $(AUTHOR)"
	@echo "============================================================"


# ==============================================================================
# SECTION 9 — Cleaning
# ==============================================================================

clean:
	rm -rf $(BUILD_DIR)


# ==============================================================================
# SECTION 10 — Phony Targets
# ==============================================================================

.PHONY: all examples tests debug release run-common run-stack run-tests list help version clean