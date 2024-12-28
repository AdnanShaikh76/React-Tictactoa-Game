import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){

          return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleOnClick = (index) => {
    if(state[index] !== null){
        return;
    }
    const copystate = [...state];
    copystate[index] = isXturn ? "X" : "O";
    setState(copystate);
    setisXturn(!isXturn);
  };

  const handleReset = () =>{
    setState(Array(9).fill(null))
  }

  return (
    <div className="Board-container">
      {isWinner ? (
        <>{isWinner} Won <button onClick={handleReset}>Play Again</button></>
      ): (<>

        <h4>Player {isXturn ? "X" : "O"} Please Move</h4>
        <div className="Board-row">
          <Square onClick={() => handleOnClick(0)} value={state[0]} />
          <Square onClick={() => handleOnClick(1)} value={state[1]} />
          <Square onClick={() => handleOnClick(2)} value={state[2]} />
        </div>
        <div className="Board-row">
          <Square onClick={() => handleOnClick(3)} value={state[3]} />
          <Square onClick={() => handleOnClick(4)} value={state[4]} />
          <Square onClick={() => handleOnClick(5)} value={state[5]} />
        </div>
        <div className="Board-row">
          <Square onClick={() => handleOnClick(6)} value={state[6]} />
          <Square onClick={() => handleOnClick(7)} value={state[7]} />
          <Square onClick={() => handleOnClick(8)} value={state[8]} />
        </div>
      </>)}
    </div>
  );
};

export default Board;
