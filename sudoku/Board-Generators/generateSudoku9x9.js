const Rules9x9 = require("../Rules/Rules9x9");
const isValid9x9 = require("../Step-Validator/isValid9x9");

const generateSudoku9x9 = () => {
  let board = Array.from(Array(9)).map(
    (innerArray) => (innerArray = Array.from(Array(9).fill(0)))
  );

  for (let i = 0; i < 40; i++) {
    let randRow = Math.floor(Math.random() * 8);
    let randomCol = Math.floor(Math.random() * 8);
    let randomVal = Math.floor(Math.random() * 9);

    if (isValid9x9(board, randRow, randomCol, randomVal)) {
      board[randRow][randomCol] = randomVal;
    }
  }

  return {board,rules:Rules9x9};
};

module.exports = generateSudoku9x9;
