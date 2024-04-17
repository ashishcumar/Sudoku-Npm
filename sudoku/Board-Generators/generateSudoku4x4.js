const Rules4x4 = require("../Rules/Rules4x4");
const isValid4x4 = require("../Step-Validator/isValid4x4");


const generateSudoku4x4 = () => {
  let board = Array.from(Array(4)).map(
    (innerArray) => (innerArray = Array.from(Array(4).fill(0)))
  );

  for (let i = 0; i < 6; i++) {
    let randRow = Math.floor(Math.random() * 4);
    let randomCol = Math.floor(Math.random() * 4);
    let randomVal = Math.floor(Math.random() * 5);

    if (isValid4x4(board, randRow, randomCol, randomVal)) {
      board[randRow][randomCol] = randomVal;
    }
  }

  return {board,rules:Rules4x4};
};

module.exports =  generateSudoku4x4
