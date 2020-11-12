import React, {useState} from 'react';
import matrixGenerator from '../helpers/matrixGenerator';
import Column from './Column';

const Board = () => {
  const [currentPlayer, setCurrentPlayer] = useState('');

  const startGame = () => {
    console.log('yes');
    setCurrentPlayer('1');
  };

  const togglePlayer = (player) => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else if (currentPlayer === '2') {
      setCurrentPlayer('1');
    } else {
      return;
    }
  };

  const renderNewBoard = matrixGenerator().map((col, i) => {
    return (
      <Column
        key={i}
        col={col}
        Y={i}
        currentPlayer={currentPlayer}
        togglePlayer={togglePlayer}
      />
    );
  });

  return (
    <React.Fragment>
      <div style={{display: 'flex', padding: '24px'}}>{renderNewBoard}</div>

      <button onClick={() => startGame()}>Start</button>
    </React.Fragment>
  );
};

export default Board;
