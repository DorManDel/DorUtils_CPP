# ⌬ DorUtils_CPP — Complete Makefile Study Guide ⌬

<p align="center">
  <img src="https://img.shields.io/badge/C++-17-blue?logo=cplusplus&style=for-the-badge">
  <img src="https://img.shields.io/badge/Build-Makefile-green?logo=gnu&style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20WSL-lightgrey?style=for-the-badge">
  <img src="https://img.shields.io/badge/Version-v0.1.0-purple?style=for-the-badge">
</p>

<p align="center">
  <b>Build • Test • Learn • Debug • Automate</b><br>
  This file explains the DorUtils_CPP Makefile extensively .
</p>

---

## 📚 Table of Contents

- [What is a Makefile?](#what-is-a-makefile)
- [How Make Thinks](#how-make-thinks)
- [Installing Make](#installing-make)
- [Making make Work on Windows](#making-make-work-on-windows)
- [Project Structure](#project-structure)
- [Full Makefile](#full-makefile)
- [Line-by-Line Explanation](#line-by-line-explanation)
- [Important Makefile Concepts](#important-makefile-concepts)
- [Useful Commands](#useful-commands)
- [Troubleshooting](#troubleshooting)
- [Future Ideas](#future-ideas)

---

## What is a Makefile?

A **Makefile** is a build automation file.

Instead of typing a long compile command manually:

```bash
g++ -std=c++17 -Wall -Wextra -pedantic -Iinclude examples/common_demo.cpp -o build/examples/common_demo
```

We can simply type:

```bash
make run-common
```
Or on Windows with MinGW:

```bash
mingw32-make run-common
```

A Makefile helps us:

Compile programs
Run tests
Clean build files
Organize project commands
Automate repetitive work
Learn real build-system logic
How Make Thinks

When we type:

```bash
make
```
Make looks for a file named:

<makefile> or: <Makefile>

Then it reads the first target.

Example:

```bash
all: examples tests
```

This means:

To build all, first build examples, then build tests.

A target usually has this structure:

target: dependencies
	command

Example:

```bash
run-common: build/examples/common_demo
	./build/examples/common_demo
```
Meaning:

Before running run-common, make sure build/examples/common_demo exists.
Then run the command below it.

### ⚠️ Important:

#### Commands inside Makefiles must start with a real TAB, not spaces.

### Installing Make
```bash
Windows — MinGW / MSYS2
```

Check if MinGW Make exists:

```bash
mingw32-make --version
```

If it works, use:

```bash
mingw32-make
```

* instead of:

```bash
make
Windows — Chocolatey
choco install make
```

* Then restart PowerShell or VS Code.

```bash
Windows — Scoop
scoop install make
```

* Then restart PowerShell or VS Code.

### WSL / Ubuntu

```bash
sudo apt update
sudo apt install build-essential cmake gdb valgrind clang
```

#### This installs:

```bash
make
g++
gcc
common build tools
debugging tools
```

### Test:
```bash
make --version
g++ --version
```
### Making make Work on Windows 🪟

#### Sometimes Windows has:
```bash
mingw32-make
```
but not:
```bash
make
```
That is why this may fail:
```bash
make help
```

but this works:

```bash
mingw32-make help
```
### Option 1 — Use mingw32-make

This is completely fine:
```bash
mingw32-make
mingw32-make help
mingw32-make doctor
```

### Option 2 — PowerShell Alias

Open PowerShell and run:

```bash
notepad $PROFILE
```

Add this line:
```bash
Set-Alias make mingw32-make
```

Save the file and restart PowerShell.

Now this should work:
```bash
make help
```

### Option 3 — Create make.exe (@ what i used : )

Find:
```bash
mingw32-make.exe
```

Usually it may be inside something like:
```bash
C:\msys64\mingw64\bin\
```
or:

```bash
C:\MinGW\bin\
```
* i used 🔍 "everything" by void-tools to search the file - very recommended tool: 
https://www.voidtools.com/downloads/

Copy it and rename the copy to:
```bash
make.exe
```
So you have both:

```bash
mingw32-make.exe
make.exe
```
Then restart the terminal.

Project Structure

Recommended DorUtils_CPP structure:
```
DorUtils_CPP/
├── include/
│   └── dor/
│       └── utils/
│           ├── DorUtils.hpp
│           ├── core/
│           │   └── Common.hpp
│           ├── debug/
│           │   └── Debug.hpp
│           └── containers/
│               └── Stack.hpp
│
├── examples/
│   ├── common_demo.cpp
│   └── stack_demo.cpp
│
├── tests/
│   ├── common_test.cpp
│   └── stack_test.cpp
│
├── build/
│
├── makefile
└── makefile_README.md
```

Folder purpose
Folder	Purpose
include/	Library headers
examples/	Demo files showing how to use the library
tests/	Test files that check correctness
build/	Generated compiled files
makefile	Build automation file
makefile_README.md	This guide
Full Makefile
```
 ==============================================================================
 🧰 DorUtils_CPP — Ultimate Educational Makefile V1
 ==============================================================================

CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude

DEBUG_FLAGS   := -g -O0
RELEASE_FLAGS := -O2

PROJECT_NAME := DorUtils_CPP
VERSION      := 0.1.0
CODENAME     := Interactive Lab
AUTHOR       := Dor Mandel

BUILD_DIR   := build
EXAMPLE_DIR := examples
TEST_DIR    := tests

EXAMPLE_SRCS := $(wildcard $(EXAMPLE_DIR)/*.cpp)
TEST_SRCS    := $(wildcard $(TEST_DIR)/*.cpp)

EXAMPLE_BINS := $(patsubst $(EXAMPLE_DIR)/%.cpp,$(BUILD_DIR)/examples/%,$(EXAMPLE_SRCS))
TEST_BINS    := $(patsubst $(TEST_DIR)/%.cpp,$(BUILD_DIR)/tests/%,$(TEST_SRCS))

all: examples tests

examples: $(EXAMPLE_BINS)

tests: $(TEST_BINS)

debug: CXXFLAGS += $(DEBUG_FLAGS)
debug: all

release: CXXFLAGS += $(RELEASE_FLAGS)
release: all

$(BUILD_DIR)/examples/%: $(EXAMPLE_DIR)/%.cpp | $(BUILD_DIR)/examples
	$(CXX) $(CXXFLAGS) $< -o $@

$(BUILD_DIR)/tests/%: $(TEST_DIR)/%.cpp | $(BUILD_DIR)/tests
	$(CXX) $(CXXFLAGS) $< -o $@

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(BUILD_DIR)/examples: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/examples

$(BUILD_DIR)/tests: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/tests

run-common: $(BUILD_DIR)/examples/common_demo
	./$(BUILD_DIR)/examples/common_demo

run-stack: $(BUILD_DIR)/examples/stack_demo
	./$(BUILD_DIR)/examples/stack_demo

run-tests: tests
	@for test in $(TEST_BINS); do \
		echo "Running $$test"; \
		./$$test; \
	done

version:
	@echo "============================================================"
	@echo " $(PROJECT_NAME)"
	@echo " Version : v$(VERSION)"
	@echo " Codename: $(CODENAME)"
	@echo " Author  : $(AUTHOR)"
	@echo "============================================================"

doctor:
	@echo "============================================================"
	@echo " DorUtils_CPP Doctor"
	@echo "============================================================"
	@echo "Checking compiler..."
	@$(CXX) --version || echo "g++ not found"
	@echo ""
	@echo "Checking project folders..."
	@test -d include  && echo "include/ found"  || echo "include/ missing"
	@test -d examples && echo "examples/ found" || echo "examples/ missing"
	@test -d tests    && echo "tests/ found"    || echo "tests/ missing"
	@echo ""
	@echo "Checking detected files..."
	@echo "Examples: $(EXAMPLE_SRCS)"
	@echo "Tests   : $(TEST_SRCS)"
	@echo ""
	@echo "Checking optional tools..."
	@cmake --version > /dev/null 2>&1 && echo "cmake found" || echo "cmake not found"
	@gdb --version > /dev/null 2>&1 && echo "gdb found" || echo "gdb not found"
	@valgrind --version > /dev/null 2>&1 && echo "valgrind found" || echo "valgrind not found"
	@clang++ --version > /dev/null 2>&1 && echo "clang++ found" || echo "clang++ not found"
	@echo "============================================================"

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
	@echo " make doctor       Check compiler, folders, files and tools"
	@echo " make version      Show project version info"
	@echo " make list         Show detected source files"
	@echo " make clean        Remove build folder"
	@echo "============================================================"

clean:
	rm -rf $(BUILD_DIR)

.PHONY: all examples tests debug release run-common run-stack run-tests list help version doctor clean
```

* Line-by-Line Explanation
Header comments:

```
 ==============================================================================
 🧰 DorUtils_CPP — Ultimate Educational Makefile V1
 ==============================================================================
```
 These are comments. Make ignores them.
 
 ```bash
 " # comment example"
 ```

They are used to make the file readable.

Compiler
 ```bash
CXX := g++
```
CXX stores the C++ compiler name.

Here we use:

g++

Later, instead of writing g++ everywhere, we write:
 ```bash
$(CXX)
Compiler flags
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude
```
CXXFLAGS stores options passed to the compiler.
 ```bash
Flag	Meaning
-std=c++17	Use the C++17 language standard
-Wall	Show common warnings
-Wextra	Show extra warnings
-pedantic	Be strict with the C++ standard
-Iinclude	Tell compiler to search headers inside include/
```

#### Because of -Iinclude, this works:
 ```bash
#include "dor/utils/DorUtils.hpp"
Debug flags
DEBUG_FLAGS := -g -O0

-g adds debug symbols.

-O0 disables optimization.
```

Useful for debugging with gdb.
 ```bash
Release flags
RELEASE_FLAGS := -O2

-O2 enables optimization.

Use for faster builds meant to run normally.

Project metadata
PROJECT_NAME := DorUtils_CPP
VERSION      := 0.1.0
CODENAME     := Interactive Lab
AUTHOR       := Dor Mandel

These variables store project identity.

They are used by:

make version
Folder variables
BUILD_DIR   := build
EXAMPLE_DIR := examples
TEST_DIR    := tests
```

Instead of hardcoding folder names everywhere, we store them once.

If we later rename examples to demos, we only change:
 ```bash
EXAMPLE_DIR := demos
Auto-detect example source files
EXAMPLE_SRCS := $(wildcard $(EXAMPLE_DIR)/*.cpp)
```

#### wildcard searches for matching files.

If examples/ contains:
 ```
common_demo.cpp
stack_demo.cpp
```
Then:
 ```bash
EXAMPLE_SRCS
```
becomes:
 ```bash
examples/common_demo.cpp examples/stack_demo.cpp
Auto-detect test source files
TEST_SRCS := $(wildcard $(TEST_DIR)/*.cpp)
```

Same idea, but for tests/.

#### Convert source paths to output paths
 ```bash
EXAMPLE_BINS := $(patsubst $(EXAMPLE_DIR)/%.cpp,$(BUILD_DIR)/examples/%,$(EXAMPLE_SRCS))
```
#### patsubst means pattern substitution.

It converts this:
```
examples/common_demo.cpp
```
into this:
```
build/examples/common_demo
```
#### The % means “whatever name is in the middle”.

#### Convert test paths to output paths
 ```bash
TEST_BINS := $(patsubst $(TEST_DIR)/%.cpp,$(BUILD_DIR)/tests/%,$(TEST_SRCS))
```
Converts:
```
tests/stack_test.cpp
```
into:
```
build/tests/stack_test
```
Default target
all: examples tests

This is the first real target.

When typing:
 ```bash
make
```
Make runs all.

all depends on:
```
examples
tests
```
So Make builds both.
```
Examples target
examples: $(EXAMPLE_BINS)
```
This means:

To build examples, build every file listed in EXAMPLE_BINS.

Tests target
tests: $(TEST_BINS)

Same idea for tests.

Debug target
 
 ```bash
debug: CXXFLAGS += $(DEBUG_FLAGS)
debug: all
```

This temporarily adds debug flags to CXXFLAGS.

Then it builds all.

So:
 ```bash
make debug
```
means:
```
build everything with -g -O0
Release target
release: CXXFLAGS += $(RELEASE_FLAGS)
release: all
```
This temporarily adds release flags.

So:
 ```bash
make release
```
builds everything with optimization.

### Build rule for examples
 ```bash
$(BUILD_DIR)/examples/%: $(EXAMPLE_DIR)/%.cpp | $(BUILD_DIR)/examples
	$(CXX) $(CXXFLAGS) $< -o $@
```
This is a pattern rule.

It says:

To create build/examples/name, compile examples/name.cpp.

Important automatic variables:

Symbol	Meaning
```
$<	First dependency/input file
$@	Target/output file
```
So for:

examples/common_demo.cpp

Make runs:
 ```bash
g++ -std=c++17 -Wall -Wextra -pedantic -Iinclude examples/common_demo.cpp -o build/examples/common_demo
```
The | symbol
 ```bash
| $(BUILD_DIR)/examples
```
This is an order-only dependency.

Meaning:

Make sure the folder exists before compiling, but do not rebuild the program just because the folder timestamp changed.

Build rule for tests
 ```bash
$(BUILD_DIR)/tests/%: $(TEST_DIR)/%.cpp | $(BUILD_DIR)/tests
	$(CXX) $(CXXFLAGS) $< -o $@
```
Same as examples, but for test files.

Create build folder
 ```bash
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)
```
Creates:
 ```bash
build/
```
 ```bash
mkdir -p 
``` 
#### means:
Create folder if missing. Do not fail if it already exists.

Create examples build folder
```bash
$(BUILD_DIR)/examples: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/examples
```
Creates:
```
build/examples/
```
It depends on build/ existing first.

Create tests build folder
```bash
$(BUILD_DIR)/tests: | $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/tests
```
Creates:
```
build/tests/
Run common demo
run-common: $(BUILD_DIR)/examples/common_demo
	./$(BUILD_DIR)/examples/common_demo
```
Before running, Make makes sure the executable exists.

If not, it builds it.

Run stack demo
```bash
run-stack: $(BUILD_DIR)/examples/stack_demo
	./$(BUILD_DIR)/examples/stack_demo
```
Same idea for stack_demo.

Run all tests
```bash
run-tests: tests
	@for test in $(TEST_BINS); do \
		echo "Running $$test"; \
		./$$test; \
	done
```
Explanation:

run-tests depends on tests
so all tests compile first
then a shell loop runs each compiled test

Why $$test and not $test?

Because Make uses $ for its own variables.

To pass a real $ to the shell, we write:
```
$$
The @ symbol
@echo "Hello"
```
* Normally Make prints the command before running it.

* @ hides the command itself and only prints the output.

Version target
```bash
version:
	@echo "============================================================"
	@echo " $(PROJECT_NAME)"
	@echo " Version : v$(VERSION)"
	@echo " Codename: $(CODENAME)"
	@echo " Author  : $(AUTHOR)"
	@echo "============================================================"
```
Prints project version info.

Run:
```bash
make version
```

Doctor target
```bash
doctor:
```
This target checks your environment.

It is like a health check for the project.

Check compiler
```bash
@$(CXX) --version || echo "g++ not found"
```

Runs:
```bash
g++ --version
```

If it fails, print:
```
g++ not found
```
### The || means:
```
If the command before failed, run the command after.
```
Check folders
```bash
@test -d include && echo "include/ found" || echo "include/ missing"

test -d include checks whether include/ exists.
``` 
### && means:

If previous command succeeded, run next command.

### || means:

If previous command failed, run next command.

#### Check optional tools
```bash
@cmake --version > /dev/null 2>&1 && echo "cmake found" || echo "cmake not found"
```

This checks if cmake exists.

> /dev/null 2>&1 hides normal output and error output.

List target
```bash
list:
	@echo "Examples found:"
	@echo "$(EXAMPLE_SRCS)"
	@echo ""
	@echo "Tests found:"
	@echo "$(TEST_SRCS)"
```
Shows which .cpp files Make detected.

Useful for checking if files are placed correctly.
```bash
Help target
```
### help:

Shows a command menu.

Run:
```bash
make help
Clean target
clean:
	rm -rf $(BUILD_DIR)
```

Deletes the build/ folder.

```rm -rf ```:  means:

`rm` remove
`-r` recursive, delete folders and contents
`-f` force, no confirmation

### ⚠️ Be careful with rm -rf.
```bash
Phony targets
```
`.PHONY:` all examples tests debug release run-common run-stack run-tests list help version doctor clean

.PHONY tells Make:

These are command names, not real files.

Without .PHONY, if a file named clean exists, Make might think the target is already done.

Important Makefile Concepts
```bash
:= vs =
A := hello
```
Immediate assignment.
```bash
A = hello
```
Recursive assignment.

### For simple project variables, := is usually safer and clearer.

Dependencies
```bash
target: dependency
```
Means:

Before building target, build dependency.

Pattern rules
```bash
build/examples/%: examples/%.cpp
```
The % matches a name.

Example:
```
common_demo
Automatic variables
Variable	Meaning
$@	Target/output
$<	First input/dependency
$^	All dependencies
TAB rule
```

### Makefile commands must start with a real TAB.

Correct:
```bash
target:
	g++ main.cpp
```
Wrong:
```bash
target:
    g++ main.cpp
```    
#### Useful Commands
### Windows :
```bash
mingw32-make help
mingw32-make list
mingw32-make examples
mingw32-make run-common
mingw32-make doctor
mingw32-make clean
```
### WSL / Linux :
```bash
make help
make list
make examples
make run-common
make doctor
make clean
```
Troubleshooting
```
make is not recognized
```
Use:
```bash
mingw32-make
```
or install Make / create an alias.

No rule to make target

Usually means one of these:
```
File is in the wrong folder
File name does not match the target
Makefile path is wrong
You are running Make from the wrong directory
```
Example:
```
run-common: build/examples/common_demo
```
requires:
```
examples/common_demo.cpp
missing separator
```
This usually means:

You used spaces instead of a TAB before a command.

Fix:
```bash
target:
<TAB>command
Header not found
```
If you see:
```
fatal error: dor/utils/DorUtils.hpp: No such file or directory
```
Check that your compile flags include:
```
-Iinclude
```
Also check that the file exists:
```
include/dor/utils/DorUtils.hpp
Output folder missing
```
The Makefile creates folders automatically with:
```bash
mkdir -p
```
If this fails on Windows PowerShell, use WSL / Git Bash / MSYS2, or adjust commands for Windows.

### Future Ideas
*  Colored output
*  Benchmark mode
*  Memory-check mode
*  Valgrind target
*  CMake version
*  GitHub Actions CI/CD
*  Automatic documentation generation
*  Auto-format target
*  Install target
*  Package target

### DorUtils Philosophy 🧠 :

#### ```⌬ DorUtils_CPP ⌬``` is not just a C++ utility library.

It is a learning lab.

Every file should help us:

* Build better tools
* Understand how they work
* Practice clean C++ structure
* Create reusable educational code

## Hope it Helps :)
```Dor ```
---