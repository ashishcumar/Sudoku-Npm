
const isValid = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num || board[i][col] == num) return false;
    let tempRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let tempCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[tempRow][tempCol] == num) false;
  }

  return true;
};

const solve = (arr) => {
  for (let i = 0; i < arr?.length; i++) {
    for (let j = 0; j < arr[0]?.length; j++) {
      if (arr[i][j] == 0) {
        /* This for loop is to check if the number is valid the location or not*/
        for (let n = 1; n <= 9; n++) {
          if (isValid(arr, i, j, n)) {
            arr[i][j] = n;
            if (solve(arr).status === true) {
              return {
                status: true,
                solution: arr,
              };
            } else {
              arr[i][j] = 0;
            }
          }
        }
        return { status: false };
      }
    }
  }
  return {
    status: true,
    solution: arr,
  };
};

const generateHalfSudoku = (req, res) => {
  let board = Array.from(Array(9)).map(
    (innerArr) => (innerArr = Array.from(Array(9).fill(0)))
  );

  for (let i = 0; i < 40; i++) {
    let randRow = Math.floor(Math.random() * 8);
    let randomCol = Math.floor(Math.random() * 8);
    let randomVal = Math.floor(Math.random() * 9);

    if (isValid(board, randRow, randomCol, randomVal)) {
      board[randRow][randomCol] = randomVal;
    }
  }

  res.send({ board });
};

const getSudokuSolution = (req, res) => {
  let { board } = req.body;
  let solvedVal = solve(board);
  res.send(solvedVal);
};

module.exports = {
  getSudokuSolution,
  generateHalfSudoku,
};
