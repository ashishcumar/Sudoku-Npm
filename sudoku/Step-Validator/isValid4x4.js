const isValid4x4 = (board, row, col, num) => {
  for (let i = 0; i < 4; i++) {
    if (board[row][i] == num || board[i][col] == num) return false;
    let tempRow = 2 * Math.floor(row / 2) + Math.floor(i / 2);
    let tempCol = 2 * Math.floor(col / 2) + (i % 2);
    if (board[tempRow][tempCol] == num) return false;
  }
  return true;
};

module.exports = isValid4x4;
