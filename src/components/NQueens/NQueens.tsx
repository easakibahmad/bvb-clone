import React, { useState } from "react";

import "./NQueens.css";

const NQueens: React.FC = () => {
  const [n, setN] = useState<number>(4); // Default to 4 queens
  const [solutions, setSolutions] = useState<string[][]>([]);

  const solveNQueens = (n: number) => {
    const board = Array.from({ length: n }, () => Array(n).fill(false));
    const results: string[][] = [];
    backtrack(board, 0, results, n);
    setSolutions(results);
  };

  const backtrack = (
    board: boolean[][],
    row: number,
    results: string[][],
    n: number
  ) => {
    if (row === n) {
      results.push(
        board.map((row) => row.map((col) => (col ? "Q" : ".")).join(""))
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN(Number(e.target.value));
  };

  return (
    <div className="nqueens__container">
      <h1>N-Queens Problem</h1>
      <input type="number" value={n} min="1" onChange={handleChange} />
      <button onClick={() => solveNQueens(n)}>Solve</button>
      <div className="nqueens__results">
        {solutions.map((solution, index) => (
          <div key={index} className="nqueens__solution">
            {solution.map((row, rowIndex) => (
              <div key={rowIndex} className="nqueens__row">
                {row.split("").map((cell, cellIndex) => (
                  <span
                    key={cellIndex}
                    className={cell === "Q" ? "queen" : "empty"}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NQueens;
