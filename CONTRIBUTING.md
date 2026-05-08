# Contributing to LN-Portfolio- 🤝

First off, thank you for considering contributing to this portfolio project! 

While this repository primarily serves as a personal professional dossier for **Lydiah Nyakweba**, constructive feedback, bug fixes (like resolving typo issues or broken links), and feature enhancements are welcome.

## 💡 How to Contribute

### 1. Reporting Bugs
If you find a bug or layout issue (especially on mobile views), please open an Issue. Include:
- A clear descriptive title.
- Steps to reproduce the issue.
- Your environment (Browser, OS).
- Screenshots if possible.

### 2. Suggesting Enhancements
Have an idea to make the UI sleeker or the codebase more efficient?
- Open an Issue labeled `enhancement`.
- Describe the current behavior and your proposed changes.
- Explain *why* this enhancement improves the project.

### 3. Pull Requests
If you want to contribute code:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes using clean, well-commented code.
4. Test your changes locally using `npm run dev`.
5. Commit your changes: `git commit -m "feat: add amazing new feature"`
6. Push to your branch: `git push origin feature/your-feature-name`
7. Open a Pull Request targeting the `main` branch.

## 🎨 Style Guide

### CSS & Tailwind
- This project uses **Tailwind v4**.
- Avoid writing custom CSS in `globals.css` unless it involves keyframe animations or base-level variable definitions (like the `--animate-infinite-scroll`). Use utility classes wherever possible.
- Maintain the primary brand colors defined in `@theme`:
  - `--color-iron-lemon`: `#FEE12B`
  - `--color-industrial-grey`: `#3E3E3E`

### React / Next.js
- Keep components as **Server Components** by default to maintain fast load times and strong SEO.
- Only use `"use client"` when absolutely necessary (e.g., interactive state, `onClick` handlers, or hooks).

## 🛑 Code of Conduct
Please ensure all communications and code reviews remain professional, respectful, and constructive.

Thank you for helping keep this portfolio at a world-class standard!
