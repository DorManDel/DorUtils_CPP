# 🧰 DorUtils_CPP — Makefile Guide

> Educational build system for **DorUtils_CPP**  
> This Makefile is designed to both **build the project** and **teach how Makefiles work**.

---

# 📚 Table of Contents

- [What is a Makefile?](#what-is-a-makefile)
- [How Make Thinks](#how-make-thinks)
- [Project Layout](#project-layout)
- [Main Sections Explained](#main-sections-explained)
- [Useful Commands](#useful-commands)
- [Windows / WSL Notes](#windows--wsl-notes)
- [Why Makefiles Matter](#why-makefiles-matter)

---

# 🧠 What is a Makefile?

A **Makefile** is an automation script used to:

✅ Compile code  
✅ Build projects  
✅ Run tests  
✅ Organize large codebases  
✅ Save time and typing  

Instead of writing:

```bash
g++ file1.cpp ...
g++ file2.cpp ...
mkdir build
./program

You simply write:

make
⚙️ How Make Thinks

When you type:

make

Make asks:

What target should I build?

Default answer:

all:

Example:

all: examples tests

Meaning:

To build ALL:
1. Build examples
2. Build tests

📁 Project Layout

DorUtils_CPP/
│
├── include/
├── examples/
├── tests/
├── build/
├── makefile
└── README.md

🏗️ Main Sections Explained

---

1️⃣ Compiler Settings
CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude
Meaning
Variable	Purpose
CXX	Which compiler to use
CXXFLAGS	Compiler rules/options
Flags
Flag	Meaning
-std=c++17	Use C++17
-Wall	Common warnings
-Wextra	More warnings
-pedantic	Strict ISO rules
-Iinclude	Header folder
2️⃣ Folder Variables
BUILD_DIR := build
EXAMPLE_DIR := examples
TEST_DIR := tests

This avoids repeating paths everywhere.

3️⃣ Auto File Detection
EXAMPLE_SRCS := $(wildcard examples/*.cpp)

This automatically finds:

examples/stack_demo.cpp
examples/common_demo.cpp
examples/queue_demo.cpp

No need to manually update the Makefile each time.

4️⃣ Main Targets
all: examples tests

Typing:

make

Runs:

make examples
make tests
5️⃣ Build Rules
build/examples/%: examples/%.cpp

Meaning:

examples/file.cpp
↓
build/examples/file.exe
6️⃣ Folder Creation
mkdir -p build/examples

Creates folders if missing.

-p means:

No error if already exists
7️⃣ Run Helpers
make run-common
make run-stack
make run-tests

Instead of typing long paths manually.

8️⃣ Cleaning
make clean

Deletes compiled files:

build/

Useful before rebuilding.

9️⃣ .PHONY
.PHONY: clean all tests help

Tells Make:

These are commands, not files.

Without it, if a file named clean exists, Make may get confused.

🚀 Useful Commands
Command	What it Does
make	Build everything
make examples	Build demos
make tests	Build tests
make debug	Build with debug flags
make release	Optimized build
make run-common	Run common demo
make run-stack	Run stack demo
make run-tests	Run all tests
make doctor	Check environment
make clean	Remove build folder
make help	Show help menu
make version	Show project version
🩺 Doctor Mode
make doctor

Checks:

✅ Compiler exists
✅ Project folders exist
✅ Files detected
✅ Optional tools installed

🪟 Windows / WSL Notes
PowerShell (Windows)

Use:

mingw32-make

If make is unavailable.

WSL / Ubuntu

Use:

make

Install tools:

sudo apt update
sudo apt install build-essential cmake gdb valgrind clang

---

💡 Why Makefiles Matter?

A Makefile teaches real software engineering:

✅ Build systems
✅ Automation
✅ Dependency logic
✅ Scalable project structure
✅ Professional workflows

🧠 DorUtils Philosophy

This Makefile is part of the DorUtils_CPP Learning Lab —
     a project where tools are built to also teach how they work.

---

🔥 Future Ideas
Colored terminal output
Benchmark mode
Auto documentation generation
Unit test reports
Packaging system
CI/CD GitHub Actions

---