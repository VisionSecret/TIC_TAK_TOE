import React from "react";
import useTikTakToe from "../Hooks/use-tik-tak-toe";

const TikTakToe = () => {
  const {
    board,
    isXNext,
    WINNING_PATTERNS,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
  } = useTikTakToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>
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
  );
};

export default TikTakToe;
