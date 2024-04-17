const isValid9x9 = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num || board[i][col] == num) return false;
    let tempRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let tempCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[tempRow][tempCol] == num) false;
  }

  return true;
};

module.exports = isValid9x9;
