const isValid16x16 = (board, row, col, num) => {
  const size = board.length;
  const subgridSize = Math.sqrt(size);

  for (let i = 0; i < size; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  const subgridRowStart = Math.floor(row / subgridSize) * subgridSize;
  const subgridColStart = Math.floor(col / subgridSize) * subgridSize;
  for (let i = 0; i < subgridSize; i++) {
    for (let j = 0; j < subgridSize; j++) {
      if (board[subgridRowStart + i][subgridColStart + j] === num) {
        return false;
      }
    }
  }

  return true;
};

module.exports = isValid16x16;
