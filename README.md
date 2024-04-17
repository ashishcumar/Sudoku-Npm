# JS Sudoku Solver

JS-Sudoku-Solver is a lightweight and efficient Javascript package for solving Sudoku puzzles programmatically. It provides a set of functions that can be easily integrated into your applications to solve Sudoku grids of varying complexity.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/js-sudoku-solver) to install JS Sudoku Solver.

```bash
npm i js-sudoku-solver
```

## Usage

```javascript

import {  generateSudokuBoard, getSudokuSolution } from "js-sudoku-solver";

boardType = "4x4","9x9","16x16"
boardToSolve = it is a array of array containing the digits

1.) generateSudokuBoard(boardType) :- pass the type of board you want to generate
2.) getSudokuSolution(boardToSolve,boardType) :- return solved sudoku board.

```
