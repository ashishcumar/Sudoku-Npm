const Rules4x4 = {
  name: "4x4 Sudoku",
  description: "A 4x4 grid divided into 2x2 subgrids.",
  rules: [
    "Fill each row, column, and 2x2 subgrid with numbers from 1 to 4 without repeating any number.",
    "Each number from 1 to 4 must appear exactly once in every row, column, and 2x2 subgrid.",
    "The solution should satisfy the uniqueness condition, meaning each row, column, and 2x2 subgrid should contain unique numbers.",
  ],
};

module.exports =  Rules4x4;
