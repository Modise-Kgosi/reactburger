# React Burger 🍔

A React app that renders a customizable burger. Users can toggle fillings on and off to build their own burger, no lettuce-haters left behind.

## Overview

This project was built as a group coding exercise to practice:

- Creating and composing React components
- Passing props between parent and child components
- Managing state to conditionally render UI
- Splitting UI into small, single-responsibility components

## Features

- **Exercise 1** — Renders a burger made up of individual components:
  - `TopBread` – the top bun
  - `Tomato` – the red filling
  - `Meat` – the patty
  - `Lettuce` – the green filling
  - `BaseBread` – the bottom bun
- **Exercise 2** — Users can select/deselect fillings (e.g. remove lettuce) and see the burger update in real time.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Project Structure

```
src/
├── components/
│   ├── Burger/
│   ├── TopBread/
│   ├── BaseBread/
│   ├── Tomato/
│   ├── Meat/
│   ├── Lettuce/
│   └── FillingControls/
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/react-burger.git
cd react-burger
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

## Usage

Use the filling controls on the page to toggle tomato, meat, and lettuce on or off. The burger updates instantly to reflect your selection.

## Deployment

This project is deployed at: `<add your deployed link here>`

## Author

Built by Modise Kgosi Moremedi as part of a group coding exercise (Lesson: Mohale).

## Resources

- [Your First Component – React Docs](https://react.dev/learn/your-first-component)
- [Importing and Exporting Components – React Docs](https://react.dev/learn/importing-and-exporting-components)
