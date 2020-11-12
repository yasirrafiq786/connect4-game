import React, {useState} from 'react';
import Square from './Square';
import _ from 'lodash';

const Column = (props) => {
  const [turn, setTurn] = useState('white');

  const togglePlayer = (player) => {
    props.togglePlayer(player);
  };

  const squareHandler = (player) => {
    if (player === '1') {
      setTurn('red');
    } else if (player === '2') {
      setTurn('blue');
    } else {
      return;
    }
  };

  const renderSquares = props.col.map((square, i) => {
    return (
      <Square
        key={[i, props.Y]}
        coords={[i, props.Y]}
        currentPlayer={props.currentPlayer}
        squareHandler={squareHandler}
        togglePlayer={togglePlayer}
        turn={turn}
      />
    );
  });

  return (
    <div
      style={{
        height: '80vh',
        width: '80vw',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {renderSquares}
    </div>
  );
};

export default Column;
