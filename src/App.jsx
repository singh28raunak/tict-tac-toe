import { useState } from "react";
import Header from "./component/Header";
import Players from "./component/Players";
import Board from "./component/Board";
import GameOver from "./component/GameOver";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const handleClick = (i) => {
    const newBoard = [...board];
    if (board[i] !== null) {
      return;
    }
    newBoard[i] = turn ? "X" : "O";
    setBoard(newBoard);
    setTurn((prevState) => !prevState);
  };

  const isWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let val of lines) {
      let [a, b, c] = val;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return false;
  };

  const winner = isWinner();
  const draw = !winner && board.every((val) => val !== null);

  const resetHandler = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialName="Player1"
            symbol="X"
            isActive={turn ? true : ""}
          />
          <Players
            initialName="Player2"
            symbol="O"
            isActive={!turn ? true : ""}
          />
        </ol>
        <Board board={board} handleClick={handleClick} />
        {(winner || draw) && (
          <GameOver onClick={resetHandler} winner={winner} />
        )}
      </div>
    </>
  );
}

export default App;
