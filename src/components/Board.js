import React, {useState} from 'react';
import newBoard from '../helpers/newBoard';
import Square from './Square';

const Board = () => {
  const [start, setStart] = useState(false);
  const [player1, setPlayer1] = useState(false);

  const changePlayer = () => {
    setPlayer1(!player1);
  };

  const renderNewBoard = newBoard().map((row, i) => {
    return (
      <tr>
        {row.map((col, j) => (
          <Square
            X={`${i}`}
            Y={`${j}`}
            start={start}
            player1={player1}
            changePlayer={changePlayer}
          />
        ))}
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table style={{margin: '5em auto', borderCollapse: 'collapse'}}>
        <tbody>{renderNewBoard}</tbody>
      </table>
      <button onClick={() => setStart(true)}>Start</button>
    </React.Fragment>
  );
};

export default Board;
