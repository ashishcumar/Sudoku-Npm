const isValid16x16 = require("../Step-Validator/isValid16x16");


const generateSudoku16x16 = () => {
  let board = Array.from(Array(16)).map(
    (innerArray) => (innerArray = Array.from(Array(16).fill(0)))
  );

  for (let i = 0; i < 60; i++) {
    let randRow = Math.floor(Math.random() * 16);
    let randomCol = Math.floor(Math.random() * 16);
    let randomVal = Math.floor(Math.random() * 17);

    if (isValid16x16(board, randRow, randomCol, randomVal)) {
      board[randRow][randomCol] = randomVal;
    }
  }

  return {board,Rules16x16};
};

module.exports = generateSudoku16x16;
