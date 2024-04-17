# JS Sudoku Solver

JS-Sudoku-Solver is a lightweight and efficient Javascript package for solving Sudoku puzzles programmatically. It provides a set of functions that can be easily integrated into your applications to solve Sudoku grids of varying complexity.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/js-sudoku-solver) to install JS Sudoku Solver.

```bash
npm i js-sudoku-solver
```

## Usage

```javascript
// If "type":"module" in package.json and in js frameworks
import { generateSudokuBoard, getSudokuSolution } from "js-sudoku-solver";

// If "type":"common" in package.json and in vanila js
const { generateSudokuBoard, getSudokuSolution } = require("js-sudoku-solver");

/// Available Sudoke Board Types are "4x4","9x9","16x16".

/// To Generate 4x4 Sudoku Board :-
let sudokuBoard4x4 = generateSudokuBoard("4x4");

/// To Generate 9x9 Sudoku Board :-
let sudokuBoard9x9 = generateSudokuBoard("9x9");

/// To Generate 16x16 Sudoku Board :-
let sudokuBoard16x16 = generateSudokuBoard("16x16");

/// To Solve Sudoku Pass Sudoku Array
let sudokuSolution = getSudokuSolution(sudokuBoard4x4, "4x4");
```
