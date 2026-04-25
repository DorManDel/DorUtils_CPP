# 🧰 DorUtils_CPP — Makefile Guide

> Educational build system for **DorUtils_CPP**
> This Makefile is designed to both **build the project** and **teach how Makefiles work**.

---

## 📚 Table of Contents

* [What is a Makefile?](#-what-is-a-makefile)
* [How Make Thinks](#-how-make-thinks)
* [Project Layout](#-project-layout)
* [Main Sections Explained](#-main-sections-explained)
* [Useful Commands](#-useful-commands)
* [Windows / WSL Notes](#-windows--wsl-notes)
* [Why Makefiles Matter](#-why-makefiles-matter)

---

## 🧠 What is a Makefile?

A Makefile is an automation script used to:

* Compile code
* Build projects
* Run tests
* Save time

Instead of writing:

```bash
g++ file1.cpp
g++ file2.cpp
mkdir build
./program
```

You simply write:

```bash
make
```

---

## ⚙️ How Make Thinks

When you type:

```bash
make
```

Make asks:

> What target should I build?

Default target:

```makefile
all:
```

Example:

```makefile
all: examples tests
```

Meaning:

1. Build examples
2. Build tests

---

## 📁 Project Layout

```txt
DorUtils_CPP/
├── include/
├── examples/
├── tests/
├── build/
├── makefile
└── README.md
```

---

## 🏗️ Main Sections Explained

### 1️⃣ Compiler Settings

```makefile
CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude
```

### 2️⃣ Folder Variables

```makefile
BUILD_DIR := build
EXAMPLE_DIR := examples
TEST_DIR := tests
```

### 3️⃣ Auto File Detection

```makefile
EXAMPLE_SRCS := $(wildcard examples/*.cpp)
```

Automatically detects all `.cpp` files.

### 4️⃣ Main Targets

```makefile
all: examples tests
```

### 5️⃣ Build Rules

```makefile
build/examples/%: examples/%.cpp
```

### 6️⃣ Folder Creation

```makefile
mkdir -p build/examples
```

### 7️⃣ Run Helpers

```bash
make run-common
make run-stack
make run-tests
```

### 8️⃣ Cleaning

```bash
make clean
```

### 9️⃣ .PHONY

```makefile
.PHONY: clean all tests help
```

---

## 🚀 Useful Commands

| Command         | Purpose             |
| --------------- | ------------------- |
| `make`          | Build all           |
| `make examples` | Build demos         |
| `make tests`    | Build tests         |
| `make debug`    | Debug build         |
| `make release`  | Optimized build     |
| `make doctor`   | Environment check   |
| `make clean`    | Remove build folder |

---

## 🪟 Windows / WSL Notes

### Windows PowerShell

```powershell
mingw32-make
```

### WSL Ubuntu

```bash
make
sudo apt install build-essential cmake gdb valgrind clang
```

---

## 💡 Why Makefiles Matter

They teach:

* Automation
* Build systems
* Dependencies
* Scalable projects
* Professional workflow

---

## 🔥 Future Ideas

* Colored output
* Benchmark mode
* Auto docs
* Unit reports
* CI/CD

---
