const Rules16x16 = {
  name: "16x16 Sudoku",
  description: "A 16x16 grid divided into 4x4 subgrids.",
  rules: [
    "Fill each row, column, and 4x4 subgrid with numbers from 1 to 16 without repeating any number.",
    "Each number from 1 to 16 should appear exactly once in every row, column, and 4x4 subgrid.",
    "The solution needs to fulfill the uniqueness requirement, ensuring that each row, column, and 4x4 subgrid is composed of unique numbers.",
  ],
};

module.exports =  Rules16x16;
