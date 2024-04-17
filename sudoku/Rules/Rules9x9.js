const Rules9x9 = {
  name: "9x9 Sudoku",
  description: "A 9x9 grid divided into 3x3 subgrids.",
  rules: [
    "Fill each row, column, and 3x3 subgrid with numbers from 1 to 9 without repeating any number.",
    "Every number from 1 to 9 must appear exactly once in each row, column, and 3x3 subgrid.",
    "The solution must adhere to the condition of uniqueness, ensuring that each row, column, and 3x3 subgrid contains unique numbers.",
  ],
};

module.exports = Rules9x9;