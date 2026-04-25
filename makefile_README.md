# How Makefile Thinks (Simple)

When you type:

<make>

## Make asks:

 ### What target should I build?

## Default answer:

<all:>

## Then it checks dependencies.

### Example:

### <all: examples tests>

## Means:

### To build ALL,
### first build examples,
### then build tests.

## MAKEFILE LAYOUT :

# ==============================================================================
# SECTION 1 : COMPILER SETTINGS
# SECTION 2 : PROJECT FOLDERS
# SECTION 3 : FILE AUTO DETECTION
# SECTION 4 : BUILD TARGETS
# SECTION 5 : BUILD RULES
# SECTION 6 : CREATE FOLDERS
# SECTION 7 : RUN HELPERS
# SECTION 8 : CLEANING
# SECTION 9 : SPECIAL NOTES
# ==============================================================================
SECTION 1 — Compiler Settings
CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude
Meaning:
CXX       = Which compiler to use
CXXFLAGS  = Rules/options sent to compiler
Why:
g++ = GNU C++ compiler
Flags:
-std=c++17     use C++17 standard
-Wall          common warnings
-Wextra        more warnings
-pedantic      strict ISO behavior
-Iinclude      tells compiler where headers are
SECTION 2 — Folders
BUILD_DIR := build
EXAMPLE_DIR := examples
TEST_DIR := tests

This avoids repeating:

build/
examples/
tests/

Later if renamed:

EXAMPLE_DIR := demos

Everything updates.

SECTION 3 — Auto Detection
EXAMPLE_SRCS := $(wildcard examples/*.cpp)
Meaning:

Find every .cpp file inside examples.

If folder has:

stack_demo.cpp
queue_demo.cpp
common_demo.cpp

Make automatically knows all 3.

SECTION 4 — Targets
all: examples tests

Means:

Typing:

make

runs:

make examples
make tests
SECTION 5 — Build Rules
build/examples/%: examples/%.cpp

This means:

Any .cpp in examples
becomes executable in build/examples

Example:

examples/stack_demo.cpp
↓
build/examples/stack_demo
SECTION 6 — Create Folders
mkdir -p build/examples

Creates folders if missing.

-p means:

No error if already exists
SECTION 7 — Run Helpers
run-stack:
    ./build/examples/stack_demo

Now user runs:

make run-stack

instead of manually typing path.

SECTION 8 — Clean
clean:
    rm -rf build

Deletes compiled junk.

Use after builds.

SECTION 9 — .PHONY
.PHONY: clean all tests

Tells Make:

These are commands, not files.

Without it, if a file named clean exists, Make gets confused.

Why Makefile is Amazing

Instead of:

g++ file1...
g++ file2...
g++ file3...
mkdir...
run...

You type:

make

And project builds itself.