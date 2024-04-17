const generateSudoku16x16 = require("./sudoku/Board-Generators/generateSudoku16x16");
const generateSudoku4x4 = require("./sudoku/Board-Generators/generateSudoku4x4");
const generateSudoku9x9 = require("./sudoku/Board-Generators/generateSudoku9x9");
const Rules16x16 = require("./sudoku/Rules/Rules16x16");
const Rules4x4 = require("./sudoku/Rules/Rules4x4");
const Rules9x9 = require("./sudoku/Rules/Rules9x9");
const isValid16x16 = require("./sudoku/Step-Validator/isValid16x16");
const isValid4x4 = require("./sudoku/Step-Validator/isValid4x4");
const isValid9x9 = require("./sudoku/Step-Validator/isValid9x9");

const ruleMapper = (boardType) => {
  if (!["4x4", "9x9", "16x16"].includes(boardType))
    return { rulesError: "Invalid board type" };
  const rules = {
    "4x4": Rules4x4,
    "9x9": Rules9x9,
    "16x16": Rules16x16,
  };

  return rules[boardType];
};

const isValidFuncMapper = (boardType) => {
  if (!["4x4", "9x9", "16x16"].includes(boardType))
    return { rulesError: "Invalid board type" };
  const validatorFunctions = {
    "4x4": isValid4x4,
    "9x9": isValid9x9,
    "16x16": isValid16x16,
  };

  return validatorFunctions[boardType];
};

const solve = (board, boardType) => {
  let isValid = isValidFuncMapper(boardType);
  for (let i = 0; i < board?.length; i++) {
    for (let j = 0; j < board[0]?.length; j++) {
      if (board[i][j] == 0) {
        for (let n = 1; n <= board?.length; n++) {
          if (isValid(board, i, j, n)) {
            board[i][j] = n;
            if (solve(board, boardType).status === true) {
              return {
                status: true,
                solution: board,
                // rules: ruleMapper(boardType),
              };
            } else {
              board[i][j] = 0;
            }
          }
        }
        return { status: false };
      }
    }
  }
  return {
    status: true,
    solution: board,
    // rules: ruleMapper(boardType),
  };
};

const getSudokuSolution = (board, boardType) => {
  if (!["4x4", "9x9", "16x16"].includes(boardType))
    return { status: false, boardType: "Invalid board type" };
  let newBoard = board.map((row) => [...row]);
  let solvedVal = solve(newBoard, boardType);
  return solvedVal;
};

const generateSudokuBoard = (boardType) => {
  if (!["4x4", "9x9", "16x16"].includes(boardType))
    return { boardType: "Invalid board type" };
  if (boardType === "4x4") {
    return generateSudoku4x4();
  } else if (boardType === "9x9") {
    return generateSudoku9x9();
  } else if (boardType === "16x16") {
    return generateSudoku16x16();
  }
};

module.exports = { generateSudokuBoard, getSudokuSolution };
