const isSafe = (board: boolean[][], row: number, col: number, n: number) => {
  // Check column
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  // Check upper left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Check upper right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j]) return false;
  }

  return true; // Safe to place the queen
};

const backtrack = (
  board: boolean[][],
  row: number,
  results: string[][],
  n: number
) => {
  if (row === n) {
    results.push(
      board.map((row) => row.map((col) => (col ? "Q" : "▫️")).join(""))
    );
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col, n)) {
      board[row][col] = true; // Place queen
      backtrack(board, row + 1, results, n); // Recur for the next row
      board[row][col] = false; // Backtrack
    }
  }
};

export { backtrack, isSafe };
