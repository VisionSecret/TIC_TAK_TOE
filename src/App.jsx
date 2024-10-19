import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isPlayer, setIsPlayer] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (checker) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        checker[a] &&
        checker[a] === checker[b] &&
        checker[a] === checker[c]
      ) {
        return checker[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = checkWinner(board);
    if (winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isPlayer ? "X" : "O";
    setBoard(newBoard);
    setIsPlayer(!isPlayer);
  };

  const getPlayerMessage = () => {
    const winner = checkWinner(board);
    if (winner) {
      return `Player ${winner} wins!`;
    } else if (!board.includes(null)) {
      return "It's a draw!";
    } else {
      return `Player ${isPlayer ? "X" : "O"}'s turn`;
    }
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsPlayer(true);
  };

  return (
    <>
      <div className="game">
        <div className="status">
          <span>Winner is {getPlayerMessage()}</span>
          <button className="reset" onClick={() => resetGame()}>
            Reset
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
