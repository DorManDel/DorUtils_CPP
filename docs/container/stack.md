# Stack Visualization

## Purpose

This folder contains an interactive visualization of a stack.

The goal is educational:
to help understand both the **behavior** of a stack and the **reason behind its complexity**.

This visualization focuses on:

- LIFO behavior
- push / pop / clear operations
- top element
- size and capacity
- current usage
- time complexity explanation
- space complexity explanation

---

## Files

- `index.html` → page structure
- `style.css` → visual layout and responsive design
- `script.js` → stack logic and interaction behavior
- `README.md` → explanation of how this visualization works

---

## Main Idea

The visualization models a stack as a dynamic-array-based structure.

This means:

- elements are pushed to the end
- the top is the last stored element
- capacity may grow when the structure becomes full

This allows the demo to explain why:

- `push` is usually `O(1)` amortized
- but a specific `push` may become `O(n)` when resize is needed

---

## Modes

### 1. Manual Mode

Manual mode lets the user interact directly with the stack.

Available actions:

- `Push`
- `Pop`
- `Clear`

This mode is useful for:
- learning the basic stack behavior
- seeing how top changes
- seeing how size changes
- seeing how capacity is used

---

### 2. Demo O(1)

This demo shows a push operation when free capacity already exists.

#### What happens
1. the demo prepares a stack with one free slot available
2. a push operation is performed
3. no resize is needed
4. the explanation panel shows why this step is `O(1)` amortized

#### Educational goal
To show that when the internal array still has room,
the new value is inserted directly at the end.

---

### 3. Demo O(n)

This demo shows a push operation when the stack is already full.

#### What happens
1. the demo prepares a stack whose size equals its capacity
2. a push operation is triggered
3. resize is required before insertion
4. the explanation panel shows why this specific step costs `O(n)`

#### Educational goal
To show that when capacity is full,
the stack must grow and existing elements must be copied or moved.

---

## UI Sections

### Controls
Contains:
- input field
- push button
- pop button
- clear button
- demo O(1) button
- demo O(n) button

---

### Stack View
Shows the current stack as vertical boxes.

The top element is highlighted and labeled.

---

### State Panel
Shows:
- current size
- current capacity
- current top
- current `n`

Here, `n` means the current number of elements stored in the stack.

---

### Usage Bar
Shows the current ratio between:

- `size`
- `capacity`

Example:

```txt
3 / 4