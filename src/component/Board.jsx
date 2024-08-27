import React from "react";

export default function Board({ board, handleClick }) {
  return (
    <ol id="game-board">
      {board.map((val, index) => (
        <li key={index}>
          <button onClick={() => handleClick(index)}>{val}</button>
        </li>
      ))}
    </ol>
  );
}
