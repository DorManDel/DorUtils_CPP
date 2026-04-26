<h2 align="center> ## 🚧 !!! CURRENTLY UNDER CONSTRUCTION !!! 🚧 </h2>
<p align="center">
  <img src="https://img.shields.io/badge/C++-17-blue?logo=cplusplus&style=for-the-badge">
  <img src="https://img.shields.io/badge/Build-Makefile-green?logo=gnu&style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20WSL-lightgrey?style=for-the-badge">
  <img src="https://img.shields.io/badge/Version-v0.1.0-purple?style=for-the-badge">
</p>

<h1 align="center"> 🧰 DorUtils_CPP — Ultimate Makefile Guide 🧰 </h1>

<p align="center">
  <b>Build • Test • Learn • Debug • Automate</b><br>
  Educational Makefile designed as both a build tool and a study guide.
</p>

---

# 📚 Table of Contents

* [🚀 Quick Start](#-quick-start)
* [🧠 What is a Makefile?](#-what-is-a-makefile)
* [⚙️ How Make Thinks](#️-how-make-thinks)
* [📁 Project Layout](#-project-layout)
* [🏗️ Main Makefile Sections](#️-main-makefile-sections)
* [🩺 Doctor Mode](#-doctor-mode)
* [🪟 Windows / WSL Notes](#-windows--wsl-notes)
* [💡 Why This Matters](#-why-this-matters)
* [🔥 Future Ideas](#-future-ideas)

---

# 🚀 Quick Start

## Windows (PowerShell)

```powershell
mingw32-make help
mingw32-make
mingw32-make doctor
```

## WSL / Ubuntu

```bash
make help
make
make doctor
```

---

# 🧠 What is a Makefile?

A **Makefile** is an automation file that tells the system how to:

✅ Compile code
✅ Build projects
✅ Run tests
✅ Organize outputs
✅ Save time

Instead of typing:

```bash
g++ main.cpp -o app
./app
```

You type:

```bash
make
```

---

# ⚙️ How Make Thinks

When you run:

```bash
make
```

Make asks:

> Which target should I build?

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

# 📁 Project Layout

```txt
DorUtils_CPP/
├── include/          # Headers
├── examples/         # Demo programs
├── tests/            # Unit / stress tests
├── build/            # Generated output
├── makefile
└── README.md
```

---

# 🏗️ Main Makefile Sections

<details>
<summary><b>1️⃣ Compiler Settings</b></summary>

```makefile
CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -Iinclude
```

| Variable   | Meaning       |
| ---------- | ------------- |
| `CXX`      | Compiler      |
| `CXXFLAGS` | Build options |

</details>

<details>
<summary><b>2️⃣ Folder Variables</b></summary>

```makefile
BUILD_DIR := build
EXAMPLE_DIR := examples
TEST_DIR := tests
```

Reusable paths.

</details>

<details>
<summary><b>3️⃣ Auto File Detection</b></summary>

```makefile
EXAMPLE_SRCS := $(wildcard examples/*.cpp)
```

Automatically finds all `.cpp` files.

</details>

<details>
<summary><b>4️⃣ Main Targets</b></summary>

```makefile
all: examples tests
```

Build everything.

</details>

<details>
<summary><b>5️⃣ Build Rules</b></summary>

```makefile
build/examples/%: examples/%.cpp
```

Converts:

```txt
examples/demo.cpp
↓
build/examples/demo
```

</details>

<details>
<summary><b>6️⃣ Cleaning</b></summary>

```bash
make clean
```

Deletes generated build files.

</details>

<details>
<summary><b>7️⃣ .PHONY</b></summary>

```makefile
.PHONY: all clean tests help
```

Marks command targets as commands, not files.

</details>

---

# 🩺 Doctor Mode

Check your environment:

```bash
make doctor
```

or on Windows:

```powershell
mingw32-make doctor
```

Doctor verifies:

✅ Compiler exists
✅ Required folders exist
✅ Example files found
✅ Test files found
✅ Optional tools available (`cmake`, `gdb`, `clang`, etc.)

---

# 🪟 Windows / WSL Notes

## Windows

Use:

```powershell
mingw32-make
```

If `make` is not recognized.

## WSL / Ubuntu

Install tools:

```bash
sudo apt update
sudo apt install build-essential cmake gdb valgrind clang
```

Then run:

```bash
make
```

---

# 💡 Why This Matters

This Makefile teaches real development skills:

✅ Build systems
✅ Automation
✅ Dependency logic
✅ Scalable project structure
✅ Professional workflow

---

# ⌬ DorUtils Philosophy

DorUtils_CPP is not just a library.

It is a **study-first project** where every tool also teaches how it works.

---

# 🔥 Future Ideas

* Colored terminal output
* Benchmark mode
* Unit test report summary
* Auto docs generation
* Package release mode
* GitHub Actions CI/CD
* Install command (`make install`)

---

