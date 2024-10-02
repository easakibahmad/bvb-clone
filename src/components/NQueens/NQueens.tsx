import React, { useState } from "react";
import { backtrack } from "../../utils/nqueens";
import "./NQueens.css";

const NQueens: React.FC = () => {
  const [n, setN] = useState<number>(4); // Default to 4 queens
  const [solutions, setSolutions] = useState<string[][]>([]);
  const [error, setError] = useState<string>(""); // State for error message

  const solveNQueens = (n: number) => {
    const board = Array.from({ length: n }, () => Array(n).fill(false));
    const results: string[][] = [];
    backtrack(board, 0, results, n);
    setSolutions(results);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    // Validate input
    if (value < 4 || value > 9) {
      setError("Please enter a number between 4 and 9.");
    } else {
      setError(""); // Clear error message if input is valid
      setN(value);
    }
  };

  return (
    <div className="nqueens__container">
      <h1>N-Queens Problem</h1>
      <div className="nqueens__input-btn-div">
        <div className="nqueens__input-btn">
          <input
            type="number"
            value={n}
            min="4"
            max="9" // Set the max attribute to 9
            onChange={handleChange}
          />
          {error && <div className="nqueens__error-message">{error}</div>}
          <button onClick={() => solveNQueens(n)}>Solve</button>
        </div>
      </div>
      <div className="nqueens__results">
        {solutions.map((solution, index) => (
          <div key={index} className="nqueens__solution">
            {solution.map((row, rowIndex) => (
              <div key={rowIndex} className="nqueens__row">
                {row.split("").map((cell, cellIndex) => (
                  <span
                    key={cellIndex}
                    className={
                      cell === "Q" ? "nqueens__queen" : "nqueens__empty"
                    }
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
