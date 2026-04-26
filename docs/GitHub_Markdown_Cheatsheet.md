# 📝 Complete Markdown Cheat Sheet (GitHub Focused)

> A practical and advanced Markdown reference for GitHub README files, docs, wikis, notes, and project guides.

---

# 📚 Table of Contents

- Headings
- Text Formatting
- Paragraphs & Line Breaks
- Lists
- Task Lists
- Links
- Images
- Code
- Tables
- Quotes
- Horizontal Rules
- Details / Collapsible Sections
- HTML Inside Markdown
- Anchor Links
- Emojis
- Badges
- GitHub Special Features
- README Pro Layout Ideas
- Hidden Tricks
- Common Mistakes

---

# 🔠 Headings

```md
# H1
## H2
### H3
#### H4
##### H5
###### H6

H1
H2
H3
H4
✍️ Text Formatting
**Bold**
*Italic*
***Bold Italic***
~~Strikethrough~~
`Inline Code`

Bold
Italic
Bold Italic
Strikethrough
Inline Code

📄 Paragraphs & Line Breaks
Paragraph one.

Paragraph two.

Blank line = new paragraph.

Line break:

Line one  
Line two

(two spaces at end of line)

📋 Lists
Bullet List
- Item
- Item
  - Nested
Item
Item
Nested
Numbered List
1. First
2. Second
3. Third
First
Second
Third
✅ Task Lists
- [ ] Todo
- [x] Done
 Todo
 Done

Great for project tracking.

🔗 Links
[OpenAI](https://openai.com)

OpenAI

Auto Links
https://github.com

https://github.com

🖼️ Images
![Preview](images/preview.png)
Resize with HTML
<img src="images/preview.png" width="500">
Center Image
<p align="center">
  <img src="images/preview.png" width="600">
</p>
💻 Code Blocks
Generic
```txt
Hello
```
C++
```cpp
int main()
{
    return 0;
}
```
Bash
```bash
make
g++ main.cpp
```
PowerShell
```powershell
mingw32-make help
```
📊 Tables
| Name | Value |
|---|---|
| CXX | g++ |
| OS | WSL |
Name	Value
CXX	g++
OS	WSL
Alignments
| Left | Center | Right |
|:---|:---:|---:|
| A | B | C |
💬 Quotes
> This is a quote
>> Nested quote

This is a quote

Nested quote

➖ Horizontal Rule
---
📂 Collapsible Sections
<details>
<summary>Click to Expand</summary>

Hidden content here.

</details>
<details> <summary>Example</summary>

Hidden content here.

</details>
🌐 HTML Inside Markdown

GitHub supports limited HTML.

Center Text
<p align="center">Centered text</p>
Bold HTML
<b>Bold</b>
Line Break
<br>
🎯 Anchor Links

Heading:

## My Section

Link:

[Go to My Section](#my-section)
Rules:
Spaces -> -
Lowercase
Special chars removed

Example:

## What is a Makefile?

Becomes:

#what-is-a-makefile
😀 Emojis

GitHub supports emoji codes:

:rocket:
:fire:
:white_check_mark:
:bulb:
:warning:

Examples:

🚀 🔥 ✅ 💡 ⚠️

🛡️ Shields Badges
<img src="https://img.shields.io/badge/C++-17-blue">

Examples:

<img src="https://img.shields.io/badge/C++-17-blue"> <img src="https://img.shields.io/badge/Build-Makefile-green"> <img src="https://img.shields.io/badge/Platform-WSL-lightgrey">
Fancy Badge
https://img.shields.io/badge/Version-v1.0-purple?style=for-the-badge
🧠 GitHub Special Features
Mention Users
@username
Issue Link
#12
Commit SHA
abcdef1
File Path
`src/main.cpp`
📚 README Pro Layout Ideas
README.md
├── Title + badges
├── Preview image
├── Description
├── Features
├── Installation
├── Usage
├── Examples
├── Roadmap
├── License
└── Contact
🕵️ Hidden Tricks
Comment (hidden)
<!-- hidden note -->
Clickable Image
<a href="https://github.com">
  <img src="preview.png" width="400">
</a>
Mixed Markdown + HTML
<p align="center">

# Title

</p>
⚠️ Common Mistakes
Unclosed code block

Bad:

```cpp
int main()

Good:

```cpp
int main() {}
```
Broken Table

Need separator row:

| A | B |
|---|---|
Spaces Instead of Blank Line

Markdown often needs spacing between sections.

🔥 GitHub README Elite Tricks
Animated GIF Demo
![Demo](demo.gif)
Side-by-side badges row
<p align="center">
<img src="badge1">
<img src="badge2">
</p>
Expand Install Guide
<details>
<summary>Installation</summary>

steps here

</details>
