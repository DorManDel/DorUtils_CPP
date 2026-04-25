
---

# Roadmap / plan file

I suggest a dedicated file:

## `docs/roadmap.md`

```md
# DorUtils Roadmap

## Project Goal

Build a reusable and educational C++ utility library with visual support.

Each major topic should ideally include:

- code
- documentation
- demo
- tests
- visualization
- complexity notes
- optional debug integration

---

# Phase 1 — Foundation

## Core
- [x] Common.hpp
- [x] Debug.hpp
- [ ] Project-wide style rules
- [ ] Basic build flow

## Stack
- [x] Implementation
- [x] Documentation
- [x] Demo
- [x] Visualization
- [x] Complexity explanation
- [ ] Optional ASCII printer
- [ ] Optional step-by-step animation mode

---

# Phase 2 — More Containers

## Queue
- [ ] Queue.hpp
- [ ] Queue.md
- [ ] queue_demo.cpp
- [ ] test_queue.cpp
- [ ] queue visualization
- [ ] complexity notes

## LinkedList
- [ ] LinkedList.hpp
- [ ] LinkedList.md
- [ ] linked_list_demo.cpp
- [ ] test_linked_list.cpp
- [ ] linked list visualization

---

# Phase 3 — Graph Algorithms

## BFS
- [ ] BFS.hpp
- [ ] BFS.md
- [ ] bfs_demo.cpp
- [ ] test_bfs.cpp
- [ ] BFS visualization
- [ ] queue/visited/order panel
- [ ] complexity explanation

## DFS
- [ ] DFS.hpp
- [ ] DFS.md
- [ ] dfs_demo.cpp
- [ ] test_dfs.cpp
- [ ] DFS visualization

---

# Phase 4 — Search and Sort

## Searching
- [ ] Linear Search
- [ ] Binary Search

## Sorting
- [ ] Bubble Sort
- [ ] Selection Sort
- [ ] Insertion Sort
- [ ] Merge Sort
- [ ] Quick Sort

Each should ideally include visual explanation.

---

# Phase 5 — Memory

## Smart Pointers
- [ ] UniquePtr
- [ ] SharedPtr
- [ ] WeakPtr

## Memory Learning Goals
- [ ] ownership
- [ ] reference counting
- [ ] move semantics
- [ ] lifetime visualization if possible

---

# Visualization Hub Plan

## Goal
Create one main HTML page that connects all demos and tryouts.

## Planned Features
- [ ] main card-based index page
- [ ] status badge per module
- [ ] links to docs / examples / tests / visualization
- [ ] mobile-friendly design
- [ ] future screenshot thumbnails
- [ ] future search/filter support

---

## DorUtils Site TDL

### Future Features
- [ ] Add search bar for algorithms, data structures, utilities, and database topics.
- [ ] Start with simple frontend filtering by card title, text, and `data-tags`.
- [ ] Later upgrade to `search-index.json`.
- [ ] Add categories: Data Structures, Algorithms, Databases, C++ Utilities, Visual Demos.
- [ ] Add keyboard shortcut: `/` focuses the search bar.
- [ ] Add “No results found” message.

---

# Notes

The project should always prefer:
- clarity
- simplicity
- readability
- educational value